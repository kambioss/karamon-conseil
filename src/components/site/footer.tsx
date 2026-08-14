"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Link href={`/${locale}`}>
                <Image
                  src="/images/logo.png"
                  alt="KARAMON CONSEIL"
                  width={296}
                  height={72}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed text-justify">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 tracking-wide uppercase">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => goTo(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 tracking-wide uppercase">
              {t("nav.contact")}
            </h3>
            <div className="space-y-3 text-primary-foreground/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Lomé, Togo — Route de Ségbé</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+228 91 52 26 79</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>infokaramonconseilsarlu@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 my-8" />

        <div className="text-center text-primary-foreground/50 text-xs">
          <p>
            Copyright &copy; 2026 KARAMON CONSEIL SARL. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
