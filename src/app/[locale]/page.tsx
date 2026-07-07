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
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  X,
  FileSearch,
  Shield,
  Home,
  ClipboardCheck,
  Leaf,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
  Calendar,
  User,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Loader2,
  Send,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

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

/* ─── Animation helpers ─── */
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
}: {
  target: number;
  suffix: string;
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
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-playfair)]"
    >
      {count}
      {suffix}
    </span>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [projectFilter, setProjectFilter] = useState("tous");
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

  // Nav links built from translations
  const NAV_LINKS = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.projects"), href: "#projets" },
    { label: t("nav.news"), href: "#actualites" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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

  // Language switcher
  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  // Scroll listener — detect when past hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("accueil");
      if (hero) {
        setScrolled(window.scrollY > hero.offsetHeight - 80);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Filter projects
  const filteredProjects =
    projectFilter === "tous"
      ? projects
      : projects.filter((p) => p.status === projectFilter);

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
    <div className="min-h-screen flex flex-col">
      {/* ═══════════ NAVBAR ═══════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#accueil")}
            className="flex items-center group"
          >
            <Image
              src="/images/logo.png"
              alt="KARAMON CONSEIL"
              width={296}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </button>

          {/* Desktop links + language switcher */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </button>
            ))}
            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-3 border-l border-white/20 pl-3">
              <button
                onClick={() => switchLocale("fr")}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  locale === "fr"
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => switchLocale("en")}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  locale === "en"
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
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
        </nav>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="African landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge className="bg-terracotta text-terracotta-foreground border-terracotta mb-6 px-4 py-1.5 text-sm">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)] mb-6">
              {t("hero.title1")}
              <br />
              <span className="text-terracotta">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollTo("#services")}
                className="bg-terracotta hover:bg-terracotta/90 text-white text-base px-8 py-6 rounded-xl shadow-lg"
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-white/40 text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl bg-transparent"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={() => scrollTo("#apropos")}
            className="text-white/60 hover:text-white/90 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
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
                {t("about.title")}
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services.png"
                  alt="KARAMON CONSEIL team"
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-20">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-card/95 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section
        id="services"
        className="py-20 md:py-28 bg-muted/40 geo-accent-dots relative"
      >
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
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.1}>
                <Card className="h-full border-l-4 border-l-terracotta hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/95 backdrop-blur-sm group">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
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
              {t("projects.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </FadeInSection>

          <FadeInSection>
            <Tabs
              value={projectFilter}
              onValueChange={setProjectFilter}
              className="mb-8"
            >
              <TabsList className="mx-auto flex w-fit">
                <TabsTrigger value="tous">{t("projects.all")}</TabsTrigger>
                <TabsTrigger value="en-cours">
                  {t("projects.ongoing")}
                </TabsTrigger>
                <TabsTrigger value="termine">
                  {t("projects.completed")}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/${locale}/projets/${project.slug}`}
                    className="block h-full"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group">
                      <div className="relative h-48 overflow-hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                                <Clock className="mr-1 h-3 w-3" />{" "}
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

          {filteredProjects.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              {t("projects.noResults")}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ ACTUALITÉS ═══════════ */}
      <section
        id="actualites"
        className="py-20 md:py-28 bg-muted/40 geo-accent-lines relative"
      >
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
              {t("news.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("news.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actualites.map((actu, i) => (
              <FadeInSection key={actu.id} delay={i * 0.1}>
                <Link
                  href={`/${locale}/actualites/${actu.slug}`}
                  className="block h-full"
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group">
                    <div className="relative h-48 overflow-hidden">
                      {actu.image && (
                        <Image
                          src={actu.image}
                          alt={actu.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-terracotta text-terracotta-foreground border-terracotta">
                          {actu.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(actu.createdAt).toLocaleDateString(
                          dateLocale,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 leading-snug line-clamp-2 text-sm">
                        {actu.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 text-justify">
                        {actu.excerpt}
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
            ))}
          </div>
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
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Contact info */}
            <FadeInSection className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-6 font-[family-name:var(--font-playfair)]">
                    {t("contact.info")}
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.address")}
                        </p>
                        <p className="text-white/80 text-sm">Lomé, Togo</p>
                        <p className="text-white/80 text-sm">Route de Ségbé</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.phone")}
                        </p>
                        <p className="text-white/80 text-sm">
                          +228 91 52 26 79
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.email")}
                        </p>
                        <p className="text-white/80 text-sm">
                          infokaramonconseilsarlu@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {t("contact.area")}
                        </p>
                        <p className="text-white/80 text-sm">
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

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-primary text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.png"
                  alt="KARAMON CONSEIL"
                  width={296}
                  height={72}
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed text-justify">
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
                      onClick={() => scrollTo(link.href)}
                      className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
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
              <div className="space-y-3 text-white/70 text-sm">
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
                    className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-white/20 my-8" />

          <div className="text-center text-white/50 text-xs">
            <p>
              Copyright &copy; 2026 KARAMON CONSEIL SARL. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
