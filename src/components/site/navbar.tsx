"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "fr", short: "FR", label: "Français" },
  { code: "en", short: "EN", label: "English" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const links = [
    { label: t("home"), href: `/${locale}#apropos`, section: "apropos" },
    { label: t("services"), href: `/${locale}#services`, section: "services" },
    { label: t("projects"), href: `/${locale}/projets`, section: "projets" },
    { label: t("news"), href: `/${locale}/actualites`, section: "actualites" },
    { label: t("contact"), href: `/${locale}#contact`, section: "contact" },
  ];

  const isActive = (link: (typeof links)[number]) =>
    isHome
      ? activeSection === link.section
      : !link.href.includes("#") && pathname.startsWith(link.href);

  const localeHref = (code: string) => pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${code}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (homepage only)
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-[0_8px_30px_-20px_oklch(0.2_0.03_160/0.35)] backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 md:h-[4.5rem] lg:px-8"
      >
        <Link href={`/${locale}`} className="flex shrink-0 items-center rounded-md">
          <Image
            src="/images/logo.png"
            alt="KARAMON CONSEIL, accueil"
            width={296}
            height={72}
            className="h-10 w-auto md:h-11"
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? (isHome ? "location" : "page") : undefined}
                  className={cn(
                    "relative inline-flex h-10 items-center rounded-lg px-3.5 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active && (
                    <span aria-hidden className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-terracotta" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center rounded-lg border border-border p-0.5" aria-label={t("language")} role="group">
            {LOCALES.map((l) => (
              <Link
                key={l.code}
                href={localeHref(l.code)}
                hrefLang={l.code}
                lang={l.code}
                aria-label={l.label}
                aria-current={locale === l.code ? "true" : undefined}
                className={cn(
                  "inline-flex h-8 items-center rounded-md px-2.5 text-xs font-semibold transition-colors",
                  locale === l.code
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.short}
              </Link>
            ))}
          </div>
          <ThemeToggle label={t("themeToggle")} className="h-10 w-10 text-muted-foreground hover:bg-muted hover:text-foreground" />
          <Button asChild className="ml-1 h-10 rounded-lg px-4">
            <Link href={`/${locale}#contact`}>
              {t("cta")}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle label={t("themeToggle")} className="h-11 w-11 text-foreground hover:bg-muted" />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11" aria-label={t("menu")}>
                <Menu aria-hidden className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,85vw)] gap-0 p-6">
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
              <ul className="mt-10 flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive(link) ? "page" : undefined}
                      className={cn(
                        "flex h-12 items-center rounded-lg px-3 text-base font-medium transition-colors",
                        isActive(link) ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t("language")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {LOCALES.map((l) => (
                    <Link
                      key={l.code}
                      href={localeHref(l.code)}
                      hrefLang={l.code}
                      lang={l.code}
                      onClick={() => setMobileOpen(false)}
                      aria-current={locale === l.code ? "true" : undefined}
                      className={cn(
                        "flex h-11 items-center justify-center rounded-lg border text-sm font-medium transition-colors",
                        locale === l.code
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Button asChild className="mt-6 h-12 w-full rounded-xl text-base">
                <Link href={`/${locale}#contact`} onClick={() => setMobileOpen(false)}>
                  {t("cta")}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
