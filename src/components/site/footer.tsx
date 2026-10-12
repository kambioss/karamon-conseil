import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const SERVICES_KEYS = ["eies", "pges", "par", "audit", "bio", "formation"] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { label: t("nav.home"), href: `/${locale}#apropos` },
    { label: t("nav.services"), href: `/${locale}#services` },
    { label: t("nav.projects"), href: `/${locale}/projets` },
    { label: t("nav.news"), href: `/${locale}/actualites` },
    { label: t("nav.contact"), href: `/${locale}#contact` },
  ];

  const linkClass =
    "text-sm text-primary-foreground/75 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline";
  const headingClass =
    "mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/60";

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      {/* CTA band */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:py-16 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {t("footer.ctaTitle")}
            </h2>
            <p className="mt-2 max-w-md text-primary-foreground/75">{t("footer.ctaSubtitle")}</p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-xl bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90"
          >
            <Link href={`/${locale}#contact`}>
              {t("hero.cta2")}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href={`/${locale}`} className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image
                src="/images/logo.png"
                alt="KARAMON CONSEIL"
                width={296}
                height={72}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {t("footer.description")}
            </p>
          </div>

          <nav aria-labelledby="footer-links" className="lg:col-span-2">
            <h3 id="footer-links" className={headingClass}>{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={headingClass}>{t("footer.services")}</h3>
            <ul className="space-y-3">
              {SERVICES_KEYS.map((key) => (
                <li key={key}>
                  <Link href={`/${locale}#services`} className={linkClass}>
                    {t(`services.${key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-3">
            <h3 className={headingClass}>{t("nav.contact")}</h3>
            <ul className="space-y-3.5 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
                Route de Ségbé, Lomé, Togo
              </li>
              <li>
                <a href="tel:+22891522679" className={`flex items-center gap-2.5 ${linkClass}`}>
                  <Phone aria-hidden className="h-4 w-4 shrink-0" />
                  +228 91 52 26 79
                </a>
              </li>
              <li>
                <a href="mailto:infokaramonconseilsarlu@gmail.com" className={`flex items-center gap-2.5 ${linkClass}`}>
                  <Mail aria-hidden className="h-4 w-4 shrink-0" />
                  <span className="break-all">infokaramonconseilsarlu@gmail.com</span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        <p className="mt-14 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} KARAMON CONSEIL SARLU. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
