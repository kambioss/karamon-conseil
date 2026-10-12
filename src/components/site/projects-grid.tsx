"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { ProjectCard, type ProjectSummary } from "@/components/site/project-card";
import { cn } from "@/lib/utils";

const FILTERS = [
  { value: "tous", key: "all" },
  { value: "en-cours", key: "ongoing" },
  { value: "termine", key: "completed" },
] as const;

export function ProjectsGrid({ projects }: { projects: ProjectSummary[] }) {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["value"]>("tous");

  const visible =
    filter === "tous" ? projects : projects.filter((p) => p.status === filter);
  const count = (value: string) =>
    value === "tous" ? projects.length : projects.filter((p) => p.status === value).length;

  return (
    <>
      <div
        role="group"
        aria-label={t("filterLabel")}
        className="mb-10 inline-flex flex-wrap gap-1 rounded-xl border border-border bg-card p-1"
      >
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {t(f.key)}
              <span
                className={cn(
                  "rounded-full px-1.5 text-xs tabular-nums",
                  active ? "bg-primary-foreground/20" : "bg-muted",
                )}
              >
                {count(f.value)}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <li key={project.id} className="animate-in fade-in duration-500">
              <ProjectCard project={project} priority={i < 3} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-center text-muted-foreground">{t("noResults")}</p>
      )}
    </>
  );
}
