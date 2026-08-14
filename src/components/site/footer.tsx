"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const SERVICES_KEYS = ["eies", "pges", "par", "audit", "bio", "formation"] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const NAV_LINKS = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "/projets" },
    { label: t("nav.news"), href: "/actualites" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const goTo = (href: string) => {
    if (!href.startsWith("#")) {
      router.push(`/${locale}${href}`);
      return;
    }
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${locale}/${href}`);
    }
  };

  const linkClass =
    "group inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors";
  const underline = (
    <span className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
  );

  return (
    <footer className="relative bg-primary text-primary-foreground mt-auto overflow-hidden">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-terracotta via-institutional to-terracotta" />
      {/* Subtle texture */}
      <div className="absolute inset-0 geo-accent-dots opacity-30 pointer-events-none" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-playfair)] mb-1.5">
              {t("footer.ctaTitle")}
            </h3>
            <p className="text-primary-foreground/70 text-sm max-w-md">
              {t("footer.ctaSubtitle")}
            </p>
          </div>
          <Button
            onClick={() => goTo("#contact")}
            className="bg-terracotta hover:bg-terracotta/90 text-white shrink-0 gap-2 px-6"
          >
            {t("hero.cta2")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="KARAMON CONSEIL"
                width={296}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed text-justify mb-5">
              {t("footer.description")}
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <button
                  key={social.label}
                  type="button"
                  aria-label={social.label}
                  className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-primary-foreground/80 hover:text-white hover:bg-terracotta hover:border-terracotta transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm mb-5 tracking-wide uppercase text-primary-foreground/90">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => goTo(link.href)} className={linkClass}>
                    <span className="relative">
                      {link.label}
                      {underline}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-5 tracking-wide uppercase text-primary-foreground/90">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {SERVICES_KEYS.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => goTo("#services")}
                    className={linkClass}
                    title={t(`services.${key}.title`)}
                  >
                    <span className="relative line-clamp-1 text-left">
                      {t(`services.${key}.title`)}
                      {underline}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-5 tracking-wide uppercase text-primary-foreground/90">
              {t("nav.contact")}
            </h3>
            <div className="space-y-3.5 text-primary-foreground/70 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Lomé, Togo — Route de Ségbé</span>
              </div>
              <a href="tel:+22891522679" className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+228 91 52 26 79</span>
              </a>
              <a
                href="mailto:infokaramonconseilsarlu@gmail.com"
                className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">infokaramonconseilsarlu@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-10" />

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-primary-foreground/50 text-xs">
          <p className="text-center sm:text-left">
            Copyright &copy; 2026 KARAMON CONSEIL SARL. {t("footer.rights")}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors"
          >
            {t("nav.backToTop")}
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
