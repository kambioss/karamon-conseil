"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/site/theme-toggle";

const SECTION_IDS = ["accueil", "apropos", "services", "projets", "actualites", "contact"];

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const { scrollYProgress } = useScroll();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const NAV_LINKS = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "/projets" },
    { label: t("nav.news"), href: "/actualites" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active-section tracking, homepage only
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const scrollTo = useCallback(
    (href: string) => {
      setMobileOpen(false);
      if (!href.startsWith("#")) {
        router.push(`/${locale}${href}`);
        return;
      }
      if (isHome) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${locale}/${href}`);
      }
    },
    [isHome, locale, router],
  );

  const goHome = useCallback(() => {
    if (isHome) {
      document.getElementById("accueil")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${locale}`);
    }
  }, [isHome, locale, router]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-md border-b border-border/60"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-terracotta"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button onClick={goHome} className="flex items-center group">
          <Image
            src="/images/logo.png"
            alt="KARAMON CONSEIL"
            width={296}
            height={72}
            className="h-12 md:h-16 w-auto"
            priority
          />
        </button>

        {/* Desktop links + language switcher + theme toggle */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = isHome && activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled
                    ? isActive
                      ? "text-white bg-white/15"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    : isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-terracotta"
                  />
                )}
              </button>
            );
          })}
          {/* Language switcher */}
          <div
            className={`flex items-center gap-1 ml-3 border-l pl-3 ${scrolled ? "border-white/20" : "border-border"}`}
          >
            <button
              onClick={() => switchLocale("fr")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                scrolled
                  ? locale === "fr"
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                  : locale === "fr"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLocale("en")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                scrolled
                  ? locale === "en"
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                  : locale === "en"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              EN
            </button>
          </div>
          <ThemeToggle
            label={t("nav.themeToggle")}
            className={`ml-2 ${
              scrolled
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
            }`}
          />
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle
            label={t("nav.themeToggle")}
            className={scrolled ? "text-white" : "text-foreground"}
          />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={
                  scrolled
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:bg-foreground/5"
                }
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white w-72">
              <div className="flex flex-col gap-2 mt-8">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 justify-start"
                  >
                    <X className="mr-2 h-5 w-5" />
                    {t("nav.close")}
                  </Button>
                </SheetClose>
                <Separator className="bg-white/20 my-2" />
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all text-left"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <Separator className="bg-white/20 my-2" />
                {/* Mobile language switcher */}
                <div className="flex items-center gap-2 px-4">
                  <button
                    onClick={() => switchLocale("fr")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      locale === "fr"
                        ? "bg-white/20 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => switchLocale("en")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      locale === "en"
                        ? "bg-white/20 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
