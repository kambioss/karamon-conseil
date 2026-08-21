"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type FormEvent,
} from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  FileSearch,
  Shield,
  Home,
  ClipboardCheck,
  Leaf,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Loader2,
  Send,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

/* ─── Types ─── */
interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  client: string;
  location: string;
  status: string;
  category: string;
  startDate: string | null;
  endDate: string | null;
  image: string | null;
  actions: string | null;
  results: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Actualite {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string | null;
  category: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

/* ─── Service icon mapping ─── */
const SERVICES_ICONS = [
  FileSearch,
  Shield,
  Home,
  ClipboardCheck,
  Leaf,
  GraduationCap,
];
const SERVICES_KEYS = [
  "eies",
  "pges",
  "par",
  "audit",
  "bio",
  "formation",
] as const;

/* ─── Partner / funder logos ─── */
const PARTNERS = [
  { name: "World Bank", logo: "/images/partners/world-bank.svg" },
  { name: "African Development Bank", logo: "/images/partners/afdb.png" },
  { name: "UEMOA", logo: "/images/partners/uemoa.svg" },
  { name: "BIDC / EBID", logo: "/images/partners/bidc.png" },
];

/* ─── Hero image ─── */
const HERO_IMAGE = "/images/hero-bg.png";

/* ─── Animation helpers ─── */

/** Word-by-word reveal that sweeps in from the left. */
function AnimatedText({
  text,
  className = "",
  stagger = 0.07,
  baseDelay = 0,
  triggerOnMount = false,
}: {
  text: string;
  className?: string;
  stagger?: number;
  baseDelay?: number;
  triggerOnMount?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => {
        const transition = {
          duration: 0.6,
          delay: baseDelay + i * stagger,
          ease: "easeOut" as const,
        };
        const wordClass =
          i < words.length - 1 ? "inline-block mr-[0.28em]" : "inline-block";
        return triggerOnMount ? (
          <motion.span
            key={i}
            className={wordClass}
            initial={{ x: -28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
          >
            {word}
          </motion.span>
        ) : (
          <motion.span
            key={i}
            className={wordClass}
            initial={{ x: -28, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}

/** Right-hand hero visual: crossfading photo panel blended into the
 * page with soft gradient blobs, plus a floating glass stat card. */
function HeroImagePanel({
  projectsCount,
  projectsLabel,
}: {
  projectsCount: number;
  projectsLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Soft gradient blobs blending the panel into the page */}
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-terracotta/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-12 w-64 h-64 rounded-full bg-primary/25 blur-3xl pointer-events-none" />

      <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-border/60">
        <Image
          src={HERO_IMAGE}
          alt="KARAMON CONSEIL — projets environnementaux en Afrique de l'Ouest"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover animate-ken-burns"
        />
        {/* Brand-colored gradient wash for cohesion */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-terracotta/15 mix-blend-multiply dark:mix-blend-color-dodge dark:opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Floating glass stat card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
        className="absolute -bottom-8 -left-6 sm:-left-10 bg-card/90 backdrop-blur-md border border-border rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-terracotta/15 flex items-center justify-center shrink-0">
          <Leaf className="h-6 w-6 text-terracotta" />
        </div>
        <div>
          <AnimatedCounter
            target={projectsCount}
            suffix="+"
            className="text-2xl font-bold text-primary leading-none font-[family-name:var(--font-playfair)]"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {projectsLabel}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({
  target,
  suffix,
  className = "text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-playfair)]",
}: {
  target: number;
  suffix: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const { toast } = useToast();

  // Services built from translations
  const services = SERVICES_KEYS.map((key, i) => ({
    icon: SERVICES_ICONS[i],
    title: t(`services.${key}.title`),
    description: t(`services.${key}.desc`),
  }));

  // Stats built from translations — le nombre de projets reflète
  // désormais le nombre réel de projets listés dans src/lib/data.ts
  const STATS = [
    { value: 8, suffix: "+", label: t("about.statYears") },
    { value: projects.length, suffix: "+", label: t("about.statProjects") },
    { value: 10, suffix: "+", label: t("about.statExperts") },
    { value: 8, suffix: "", label: t("about.statCountries") },
  ];

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const [projRes, actRes] = await Promise.all([
          fetch(`/api/projects?locale=${locale}`),
          fetch(`/api/actualites?locale=${locale}`),
        ]);
        if (projRes.ok) setProjects(await projRes.json());
        if (actRes.ok) setActualites(await actRes.json());
      } catch {
        // data will stay empty, that's ok
      }
    }
    fetchData();
  }, [locale]);

  // Smooth scroll handler
  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Contact form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const errors: Record<string, string> = {};
    if (formData.name.trim().length < 2)
      errors.name = t("contact.nameRequired");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = t("contact.emailInvalid");
    if (formData.message.trim().length < 10)
      errors.message = t("contact.messageRequired");
    if (!formData.subject) errors.subject = t("contact.subjectRequired");
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: t("contact.error"),
          description: data.message || "Error",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: t("contact.error"),
        description: t("contact.serverError"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return t("projects.inProgress");
    return new Date(dateStr).toLocaleDateString(
      locale === "fr" ? "fr-FR" : "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );
  };

  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        id="accueil"
        className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-background geo-accent-dots"
      >
        {/* Ambient gradient backdrop */}
        <div className="absolute -top-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-terracotta/20 via-primary/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-institutional/15 via-primary/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Badge className="bg-terracotta text-terracotta-foreground border-terracotta mb-6 px-4 py-1.5 text-sm">
                {t("hero.badge")}
              </Badge>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.12] font-[family-name:var(--font-playfair)] mb-6">
              <AnimatedText
                text={t("hero.title1")}
                triggerOnMount
                baseDelay={0.25}
                className="block"
              />
              <AnimatedText
                text={t("hero.titleHighlight")}
                triggerOnMount
                baseDelay={0.55}
                className="block text-terracotta"
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={() => scrollTo("#services")}
                  className="bg-terracotta hover:bg-terracotta/90 text-white text-base px-8 py-6 rounded-xl shadow-lg w-full sm:w-auto"
                >
                  {t("hero.cta1")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("#contact")}
                  className="border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground text-base px-8 py-6 rounded-xl w-full sm:w-auto"
                >
                  {t("hero.cta2")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick trust stats */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-border"
            >
              {STATS.slice(0, 3).map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl md:text-3xl font-bold text-primary font-[family-name:var(--font-playfair)]">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image panel */}
          <HeroImagePanel
            projectsCount={STATS[1].value}
            projectsLabel={STATS[1].label}
          />
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section
        id="apropos"
        className="py-20 md:py-28 section-bg-image section-bg-about geo-pattern-overlay overflow-hidden"
      >
        <div
          className="geo-shape geo-shape-triangle animate-float"
          style={{ top: "10%", right: "8%" }}
        />
        <div
          className="geo-shape geo-shape-diamond animate-float-reverse"
          style={{ bottom: "15%", left: "5%" }}
        />
        <div
          className="geo-shape geo-shape-circle animate-rotate-slow"
          style={{ top: "50%", right: "3%" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInSection>
              <Badge variant="secondary" className="mb-4">
                {t("about.badge")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-6">
                <AnimatedText text={t("about.title")} />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                {t("about.p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                {t("about.p2")}
              </p>
              <Button
                onClick={() => scrollTo("#services")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t("about.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border group">
                  <Image
                    src="/images/projects/p17-audit-pta-2425.jpg"
                    alt="Équipe KARAMON CONSEIL en réunion de travail"
                    width={700}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl shadow-xl px-5 py-4 flex items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-lg bg-terracotta/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-primary leading-none font-[family-name:var(--font-playfair)]">
                      {STATS[0].value}
                      {STATS[0].suffix}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {STATS[0].label}
                    </p>
                  </div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-24">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 bg-card/95 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          {/* Trusted by */}
          <FadeInSection delay={0.4}>
            <div className="mt-14 md:mt-16 flex flex-col items-center gap-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t("about.trustedBy")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    title={partner.name}
                    className="relative h-10 sm:h-12 w-28 sm:w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="140px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section
        id="services"
        className="py-20 md:py-28 bg-muted/40 geo-accent-dots relative overflow-hidden"
      >
        <div className="absolute top-10 left-[15%] w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-64 h-64 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
        <svg
          className="absolute top-0 left-0 w-24 h-24 opacity-[0.06]"
          viewBox="0 0 100 100"
        >
          <polygon points="0,0 100,0 0,100" fill="oklch(0.33 0.08 160)" />
        </svg>
        <svg
          className="absolute top-0 right-0 w-24 h-24 opacity-[0.06]"
          viewBox="0 0 100 100"
        >
          <polygon points="0,0 100,0 100,100" fill="oklch(0.57 0.13 50)" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-24 h-24 opacity-[0.06]"
          viewBox="0 0 100 100"
        >
          <polygon points="0,0 0,100 100,100" fill="oklch(0.57 0.13 50)" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.06]"
          viewBox="0 0 100 100"
        >
          <polygon points="100,0 0,100 100,100" fill="oklch(0.33 0.08 160)" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              {t("services.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              <AnimatedText text={t("services.title")} />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 32,
                  scale: 0.92,
                  rotate: i % 2 === 0 ? -2.5 : 2.5,
                }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <Card className="relative h-full border-0 rounded-2xl gap-0 p-8 pb-14 overflow-hidden bg-institutional text-institutional-foreground shadow-lg shadow-institutional/10 transition-colors duration-300 hover:bg-institutional/90 group">
                  <span className="text-terracotta text-xs font-bold tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-xl font-bold text-institutional-foreground mt-6 mb-3 leading-snug font-[family-name:var(--font-playfair)]">
                    {service.title}
                  </CardTitle>
                  <p className="text-institutional-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-institutional-foreground/40 transition-all duration-300 group-hover:text-terracotta group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROJECTS ═══════════ */}
      <section
        id="projets"
        className="py-20 md:py-28 section-bg-image section-bg-projects geo-pattern-overlay geo-pattern-overlay-2 overflow-hidden"
      >
        <div
          className="geo-shape geo-shape-diamond animate-float"
          style={{ top: "8%", left: "6%" }}
        />
        <div
          className="geo-shape geo-shape-triangle animate-float-reverse"
          style={{ bottom: "10%", right: "5%" }}
        />
        <div
          className="geo-shape"
          style={{
            top: "40%",
            left: "2%",
            width: "100px",
            height: "100px",
            background: "oklch(0.57 0.13 50)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            opacity: "0.06",
          }}
        />
        <div
          className="geo-shape"
          style={{
            top: "20%",
            right: "4%",
            width: "80px",
            height: "80px",
            border: "3px solid oklch(0.33 0.08 160)",
            borderRadius: "50%",
            opacity: "0.08",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              {t("projects.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              <AnimatedText text={t("projects.title")} />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.slice(0, 6).map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    rotate: idx % 2 === 0 ? -0.7 : 0.7,
                    transition: { duration: 0.25 },
                  }}
                >
                  <Link
                    href={`/${locale}/projets/${project.slug}`}
                    className="block h-full"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 bg-card group">
                      <div className="relative h-48 overflow-hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
                        {/* Diagonal light sweep on hover */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="absolute -inset-y-full -left-1/2 w-1/3 -skew-x-12 bg-white/25 -translate-x-[150%] group-hover:translate-x-[420%] transition-transform duration-[900ms] ease-out" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300">
                          <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <ArrowUpRight className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge
                            variant={
                              project.status === "en-cours"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              project.status === "en-cours"
                                ? "bg-green-600 text-white border-green-600"
                                : "bg-institutional text-white border-institutional"
                            }
                          >
                            {project.status === "en-cours" ? (
                              <>
                                <span className="relative mr-1.5 flex h-2 w-2">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
                                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                                </span>
                                {t("projects.ongoingBadge")}
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="mr-1 h-3 w-3" />{" "}
                                {t("projects.completedBadge")}
                              </>
                            )}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-white/90 text-foreground border-white/50"
                          >
                            {t(`categories.${project.category}` as any) ||
                              project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-foreground mb-2 leading-snug line-clamp-2 text-sm">
                          {project.title}
                        </h3>
                        <div className="space-y-1.5 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            <span className="line-clamp-1">
                              {project.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            <Building2 className="h-3.5 w-3.5 shrink-0" />
                            <span className="line-clamp-1">
                              {project.client}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-primary hover:text-primary/80 p-0 h-auto text-sm font-medium"
                        >
                          {t("projects.viewDetails")}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {projects.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              {t("projects.noResults")}
            </div>
          ) : (
            <FadeInSection delay={0.2} className="text-center mt-10">
              <Link href={`/${locale}/projets`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary hover:text-primary-foreground gap-2"
                >
                  {t("projects.seeAllProjects")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </FadeInSection>
          )}
        </div>
      </section>

      {/* ═══════════ ACTUALITÉS ═══════════ */}
      <section
        id="actualites"
        className="py-20 md:py-28 bg-muted/40 geo-accent-lines relative overflow-hidden"
      >
        <div className="absolute top-1/3 -right-16 w-72 h-72 rounded-full bg-institutional/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-[8%] w-56 h-56 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
        <div
          className="absolute top-0 left-0 right-0 h-3 opacity-[0.08]"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, oklch(0.33 0.08 160) 0px, oklch(0.33 0.08 160) 10px, transparent 10px, transparent 20px, oklch(0.57 0.13 50) 20px, oklch(0.57 0.13 50) 30px, transparent 30px, transparent 40px)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              {t("news.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              <AnimatedText text={t("news.title")} />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("news.subtitle")}
            </p>
          </FadeInSection>

          {actualites.length > 0 && (
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
              {/* Left: compact list of other news */}
              <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-2">
                {actualites.slice(1, 5).map((actu, i) => (
                  <FadeInSection key={actu.id} delay={i * 0.08}>
                    <Link
                      href={`/${locale}/actualites/${actu.slug}`}
                      className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all duration-300 group"
                    >
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden shrink-0 bg-muted">
                        {actu.image && (
                          <Image
                            src={actu.image}
                            alt={actu.title}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                          <Calendar className="h-3.5 w-3.5 shrink-0" />
                          {new Date(actu.createdAt).toLocaleDateString(
                            dateLocale,
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                          {actu.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    </Link>
                  </FadeInSection>
                ))}

                <FadeInSection delay={0.3} className="mt-3">
                  <Link href={`/${locale}/actualites`}>
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      {t("news.seeAllNews")}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </FadeInSection>
              </div>

              {/* Right: large featured news */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <FadeInSection>
                  <Link
                    href={`/${locale}/actualites/${actualites[0].slug}`}
                    className="block h-full"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-card group">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {actualites[0].image && (
                          <Image
                            src={actualites[0].image}
                            alt={actualites[0].title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300">
                          <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <ArrowUpRight className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-terracotta text-terracotta-foreground border-terracotta">
                            {actualites[0].category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(actualites[0].createdAt).toLocaleDateString(
                            dateLocale,
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </div>
                        <h3 className="font-bold text-foreground mb-3 leading-snug text-xl md:text-2xl font-[family-name:var(--font-playfair)] group-hover:text-primary transition-colors">
                          {actualites[0].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-5 text-justify">
                          {actualites[0].excerpt}
                        </p>
                        <Button
                          variant="ghost"
                          className="text-primary hover:text-primary/80 p-0 h-auto text-sm font-medium"
                        >
                          {t("news.readMore")}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeInSection>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section
        id="contact"
        className="py-20 md:py-28 section-bg-image section-bg-contact geo-pattern-overlay geo-pattern-overlay-3 overflow-hidden"
      >
        <div
          className="geo-shape"
          style={{
            top: "5%",
            left: "10%",
            width: "0",
            height: "0",
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "70px solid oklch(0.35 0.08 250)",
            opacity: "0.06",
          }}
        />
        <div
          className="geo-shape animate-float"
          style={{
            bottom: "20%",
            right: "8%",
            width: "60px",
            height: "60px",
            background: "oklch(0.57 0.13 50)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="geo-shape animate-float-reverse"
          style={{
            top: "30%",
            right: "3%",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "2px solid oklch(0.33 0.08 160)",
            opacity: "0.06",
          }}
        />
        <div
          className="geo-shape"
          style={{
            bottom: "8%",
            left: "4%",
            width: "70px",
            height: "70px",
            background: "oklch(0.35 0.08 250)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            opacity: "0.05",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              {t("contact.badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              <AnimatedText text={t("contact.title")} />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Contact info */}
            <FadeInSection className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-6 font-[family-name:var(--font-playfair)]">
                    {t("contact.info")}
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.address")}
                        </p>
                        <p className="text-primary-foreground/80 text-sm">Lomé, Togo</p>
                        <p className="text-primary-foreground/80 text-sm">Route de Ségbé</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.phone")}
                        </p>
                        <p className="text-primary-foreground/80 text-sm">
                          +228 91 52 26 79
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.email")}
                        </p>
                        <p className="text-primary-foreground/80 text-sm">
                          infokaramonconseilsarlu@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.area")}
                        </p>
                        <p className="text-primary-foreground/80 text-sm">
                          {t("contact.areaValue")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {t("contact.followUs")}
                  </span>
                  <div className="flex gap-2">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Linkedin, label: "LinkedIn" },
                    ].map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        className="h-9 w-9"
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Right: Contact form */}
            <FadeInSection delay={0.2} className="lg:col-span-3">
              <Card className="p-6 md:p-8 min-h-[480px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {/* ── Écran de succès ── */}
                  {formSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92, y: 16 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -16 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center text-center gap-6 py-8"
                    >
                      {/* Icône animée */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.15,
                          type: "spring",
                          stiffness: 200,
                          damping: 14,
                        }}
                        className="w-24 h-24 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center"
                      >
                        <CheckCircle2
                          className="h-12 w-12 text-green-600"
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Texte */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-3 max-w-sm"
                      >
                        <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                          {t("contact.successTitle")}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t("contact.successMessage")}
                        </p>
                      </motion.div>

                      {/* Bouton retour */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                      >
                        <Button
                          variant="outline"
                          onClick={() => setFormSuccess(false)}
                          className="mt-2"
                        >
                          {t("contact.sendAnother")}
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    /* ── Formulaire ── */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {t("contact.name")}{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder={t("contact.namePlaceholder")}
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={
                              formErrors.name ? "border-destructive" : ""
                            }
                          />
                          {formErrors.name && (
                            <p className="text-xs text-destructive">
                              {formErrors.name}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {t("contact.emailLabel")}{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className={
                              formErrors.email ? "border-destructive" : ""
                            }
                          />
                          {formErrors.email && (
                            <p className="text-xs text-destructive">
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("contact.phone")}</Label>
                          <Input
                            id="phone"
                            placeholder={t("contact.phonePlaceholder")}
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            {t("contact.subject")}{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(val) =>
                              setFormData({ ...formData, subject: val })
                            }
                          >
                            <SelectTrigger
                              id="subject"
                              className={
                                formErrors.subject ? "border-destructive" : ""
                              }
                            >
                              <SelectValue
                                placeholder={t("contact.subjectPlaceholder")}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="etudes-impact">
                                {t("contact.subjects.eies")}
                              </SelectItem>
                              <SelectItem value="pges">
                                {t("contact.subjects.pges")}
                              </SelectItem>
                              <SelectItem value="par">
                                {t("contact.subjects.par")}
                              </SelectItem>
                              <SelectItem value="audit">
                                {t("contact.subjects.audit")}
                              </SelectItem>
                              <SelectItem value="biodiversite">
                                {t("contact.subjects.bio")}
                              </SelectItem>
                              <SelectItem value="formation">
                                {t("contact.subjects.formation")}
                              </SelectItem>
                              <SelectItem value="autre">
                                {t("contact.subjects.other")}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          {formErrors.subject && (
                            <p className="text-xs text-destructive">
                              {formErrors.subject}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {t("contact.message")}{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder={t("contact.messagePlaceholder")}
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className={
                            formErrors.message ? "border-destructive" : ""
                          }
                        />
                        {formErrors.message && (
                          <p className="text-xs text-destructive">
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base rounded-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t("contact.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("contact.send")}
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
