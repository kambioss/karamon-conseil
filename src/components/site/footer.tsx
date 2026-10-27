import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const SERVICES_KEYS = ["eies", "pges", "par", "audit", "bio", "formation"] as const;

const ADDRESS = "Route de Ségbé, Lomé, Togo";
const PHONE = "+228 91 52 26 79";
const PHONE_HREF = `tel:${PHONE.replace(/\s/g, "")}`;
const EMAIL_USER = "infokaramonconseilsarlu";
const EMAIL_DOMAIN = "gmail.com";
const EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

const headingClass =
  "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/50";

/** Column link: colour + a small slide on hover, no layout shift. */
function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex text-sm text-ink-foreground/70 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-ink-foreground"
    >
      {children}
    </Link>
  );
}

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

  const contactItems = [
    { icon: MapPin, value: ADDRESS, key: ADDRESS, href: null },
    { icon: Phone, value: PHONE, key: PHONE, href: PHONE_HREF },
    {
      icon: Mail,
      // Split so a narrow column breaks the address at the "@" instead of mid-word
      value: (
        <>
          {EMAIL_USER}
          <wbr />
          {`@${EMAIL_DOMAIN}`}
        </>
      ),
      key: EMAIL,
      href: `mailto:${EMAIL}`,
    },
  ];

  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-ink text-ink-foreground">
      {/* Brand hairline and a soft glow, purely decorative */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracotta/70 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-36 -z-10 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      {/* ─── Call to action ─── */}
      <div className="border-b border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between md:py-16 lg:px-8">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 bg-ink-foreground/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-foreground/70">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              {t("footer.badge")}
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] tracking-tight md:text-[2.6rem]">
              {t("footer.ctaTitle")}
            </h2>
            <p className="mt-4 text-ink-foreground/75 hyphens-auto text-justify">
              {t("footer.ctaSubtitle")}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-ink-foreground px-6 text-base text-ink hover:bg-ink-foreground/90"
            >
              <Link href={`/${locale}#contact`}>
                {t("hero.cta2")}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-ink-foreground/20 px-5 text-base font-medium text-ink-foreground/90 transition-colors hover:border-ink-foreground/40 hover:bg-ink-foreground/5 hover:text-ink-foreground"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* ─── Sitemap ─── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href={`/${locale}`}
              className="inline-flex rounded-xl bg-white p-3 ring-1 ring-ink-foreground/10"
            >
              <Image
                src="/images/logo.png"
                alt="KARAMON CONSEIL"
                width={296}
                height={72}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/70 hyphens-auto text-justify">
              {t("footer.description")}
            </p>
            <p className="mt-7 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground/45">
              <span aria-hidden className="h-px w-7 bg-terracotta" />
              {t("footer.since")}
            </p>
          </div>

          <nav aria-labelledby="footer-links" className="lg:col-span-2">
            <h3 id="footer-links" className={headingClass}>
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className={headingClass}>{t("footer.services")}</h3>
            <ul className="mt-6 space-y-3.5">
              {SERVICES_KEYS.map((key) => (
                <li key={key}>
                  <FooterLink href={`/${locale}#services`}>{t(`services.${key}.title`)}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic lg:col-span-3">
            <h3 className={headingClass}>{t("nav.contact")}</h3>
            <ul className="mt-6 space-y-4">
              {contactItems.map(({ icon: Icon, value, key, href }) => (
                <li key={key} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-foreground/10 ring-1 ring-inset ring-ink-foreground/10"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="pt-2 text-sm break-words text-ink-foreground/70 underline-offset-4 transition-colors hover:text-ink-foreground hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="pt-2 text-sm text-ink-foreground/70">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>

      {/* ─── Legal line ─── */}
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} KARAMON CONSEIL SARLU. {t("footer.rights")}
          </p>
          <p>{t("footer.based")}</p>
        </div>
      </div>
    </footer>
  );
}
