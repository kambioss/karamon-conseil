import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  FileSearch,
  Globe,
  GraduationCap,
  Home,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { NewsCard } from "@/components/site/news-card";
import { ProjectCard } from "@/components/site/project-card";
import { Eyebrow, SectionHeading } from "@/components/site/section-heading";
import { getAllProjects, getPublishedActualites } from "@/lib/data";

const SERVICES = [
  { key: "eies", icon: FileSearch },
  { key: "pges", icon: Shield },
  { key: "par", icon: Home },
  { key: "audit", icon: ClipboardCheck },
  { key: "bio", icon: Leaf },
  { key: "formation", icon: GraduationCap },
] as const;

const PARTNERS = [
  { name: "World Bank", logo: "/images/partners/world-bank.svg" },
  { name: "African Development Bank", logo: "/images/partners/afdb.png" },
  { name: "UEMOA", logo: "/images/partners/uemoa.svg" },
  { name: "BIDC / EBID", logo: "/images/partners/bidc.png" },
];

const PHONE = "+228\u00a091\u00a052\u00a026\u00a079";
const EMAIL = "infokaramonconseilsarlu@gmail.com";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const projects = getAllProjects(locale);
  const news = getPublishedActualites(locale);

  const stats = [
    { value: "8+", label: t("about.statYears") },
    { value: `${projects.length}+`, label: t("about.statProjects") },
    { value: "10+", label: t("about.statExperts") },
    { value: "8", label: t("about.statCountries") },
  ];

  const contactItems = [
    { icon: MapPin, label: t("contact.address"), value: "Route de Ségbé, Lomé, Togo" },
    { icon: Phone, label: t("contact.phone"), value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Mail, label: t("contact.email"), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Globe, label: t("contact.area"), value: t("contact.areaValue") },
  ];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section id="accueil" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur sm:text-sm">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              {t("hero.badge")}
            </p>
            <h1 className="mt-7 font-serif text-[2.3rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              {t("hero.title1")}{" "}
              <em className="font-medium text-primary">{t("hero.titleHighlight")}</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-xl px-7 text-base">
                <Link href={`/${locale}#contact`}>
                  {t("hero.cta2")}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl px-7 text-base">
                <Link href={`/${locale}#services`}>{t("hero.cta1")}</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-6 animate-in fade-in zoom-in-[0.98] duration-1000">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-muted ring-1 ring-border lg:aspect-[5/6]">
              <Image
                src="/images/hero-bg.webp"
                alt={t("hero.title1") + " " + t("hero.titleHighlight")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-xl sm:left-auto sm:right-6 sm:w-80 lg:-left-10 lg:right-auto">
              {stats.slice(1, 3).map((s) => (
                <div key={s.label} className="bg-card/95 px-5 py-4 backdrop-blur">
                  <p className="font-serif text-3xl font-semibold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROOF: partners + figures ═══════════ */}
      <section aria-labelledby="proof-title" className="border-y border-border bg-card/50 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="proof-title" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("about.trustedBy")}
              </h2>
              <ul className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-2">
                {PARTNERS.map((p) => (
                  <li
                    key={p.name}
                    className="relative h-24 rounded-xl bg-white ring-1 ring-border transition-shadow duration-300 hover:shadow-md"
                  >
                    <Image src={p.logo} alt={p.name} fill sizes="220px" className="object-contain p-3.5" />
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4 lg:col-span-7">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse bg-background px-5 py-6">
                  <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="font-serif text-4xl font-semibold tracking-tight text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="apropos" aria-labelledby="about-title" className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-muted ring-1 ring-border">
              <Image
                src="/images/projects/p17-audit-pta-2425.webp"
                alt="Équipe KARAMON CONSEIL en réunion de travail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div aria-hidden className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[1.75rem] border border-terracotta/40" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <Eyebrow>{t("about.badge")}</Eyebrow>
            <h2 id="about-title" className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-[2.75rem]">
              {t("about.title")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem] hyphens-auto text-justify">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
            <Button asChild variant="link" className="mt-6 h-11 px-0 text-base">
              <Link href={`/${locale}#services`}>
                {t("about.cta")}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" aria-labelledby="services-title" className="bg-muted/50 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="services-title"
            eyebrow={t("services.badge")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ key, icon: Icon }, i) => (
              <li key={key} className="group relative flex flex-col bg-card p-7 transition-colors duration-300 hover:bg-background md:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-xl font-semibold leading-snug text-foreground md:text-[1.4rem]">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted-foreground hyphens-auto text-justify">
                  {t(`services.${key}.desc`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section id="projets" aria-labelledby="projects-title" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="projects-title"
            eyebrow={t("projects.badge")}
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
            action={
              <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                <Link href={`/${locale}/projets`}>
                  {t("projects.seeAllProjects")}
                  <ArrowUpRight aria-hidden />
                </Link>
              </Button>
            }
          />
          {projects.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((project) => (
                <li key={project.id} className="reveal">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-12 text-center text-muted-foreground">{t("projects.noResults")}</p>
          )}
        </div>
      </section>

      {/* ═══════════ NEWS ═══════════ */}
      {news.length > 0 && (
        <section id="actualites" aria-labelledby="news-title" className="border-t border-border bg-muted/50 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="news-title"
              eyebrow={t("news.badge")}
              title={t("news.title")}
              subtitle={t("news.subtitle")}
              action={
                <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                  <Link href={`/${locale}/actualites`}>
                    {t("news.seeAllNews")}
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
              }
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="reveal lg:col-span-3">
                <NewsCard actu={news[0]} featured />
              </div>
              {news.slice(1, 4).map((actu) => (
                <div key={actu.id} className="reveal">
                  <NewsCard actu={actu} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" aria-labelledby="contact-title" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-5">
            <div className="relative bg-ink p-8 text-ink-foreground md:p-12 lg:col-span-2">
              <Eyebrow className="text-ink-foreground/80">{t("contact.badge")}</Eyebrow>
              <h2 id="contact-title" className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                {t("contact.title")}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-foreground/80 hyphens-auto text-justify">{t("contact.subtitle")}</p>
              <ul className="mt-10 space-y-6">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-foreground/10">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-ink-foreground/70">{label}</p>
                      {href ? (
                        <a href={href} className="break-words font-medium underline-offset-4 hover:underline">
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-12 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
