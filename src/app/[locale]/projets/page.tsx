"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  MapPin,
  Building2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ChevronRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  client: string;
  status: string;
  category: string;
  image: string | null;
}

export default function ProjetsPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("tous");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/projects?locale=${locale}`);
        if (res.ok) setProjects(await res.json());
      } catch {
        // data will stay empty, that's ok
      }
    }
    fetchData();
  }, [locale]);

  const filteredProjects =
    filter === "tous"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-80 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pattern-african-2.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover animate-ken-burns"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="hero-gradient-bottom absolute inset-0" />
        </div>
        <div
          className="geo-shape geo-shape-diamond animate-float"
          style={{ top: "15%", right: "8%" }}
        />
        <div
          className="geo-shape geo-shape-circle animate-rotate-slow"
          style={{ bottom: "10%", left: "5%" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10 w-full">
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-4 animate-in fade-in duration-700">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">{t("nav.projects")}</span>
          </nav>
          <Badge className="bg-terracotta text-terracotta-foreground border-terracotta mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {t("projects.badge")}
          </Badge>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-3 leading-tight drop-shadow-md animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: "80ms", animationFillMode: "backwards" }}
          >
            {t("projects.title")}
          </h1>
          <p
            className="text-white/85 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: "150ms", animationFillMode: "backwards" }}
          >
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        {/* Filter */}
        <div className="flex justify-center mb-10">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="flex w-fit">
              <TabsTrigger value="tous">{t("projects.all")}</TabsTrigger>
              <TabsTrigger value="en-cours">{t("projects.ongoing")}</TabsTrigger>
              <TabsTrigger value="termine">{t("projects.completed")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Grid */}
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
                <Link href={`/${locale}/projets/${project.slug}`} className="block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group">
                    <div className="relative h-48 overflow-hidden">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <ArrowUpRight className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge
                          variant={project.status === "en-cours" ? "default" : "secondary"}
                          className={
                            project.status === "en-cours"
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-institutional text-white border-institutional"
                          }
                        >
                          {project.status === "en-cours" ? (
                            <>
                              <Clock className="mr-1 h-3 w-3" /> {t("projects.ongoingBadge")}
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="mr-1 h-3 w-3" /> {t("projects.completedBadge")}
                            </>
                          )}
                        </Badge>
                        <Badge variant="outline" className="bg-white/90 text-foreground border-white/50">
                          {t(`categories.${project.category}` as any) || project.category}
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
                          <span className="line-clamp-1">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Building2 className="h-3.5 w-3.5 shrink-0" />
                          <span className="line-clamp-1">{project.client}</span>
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
    </div>
  );
}
