"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { ProjectCard, type ProjectSummary } from "@/components/site/project-card";
import { cn } from "@/lib/utils";

const ALL = "tous";
const STATUSES = [
  { value: "en-cours", key: "ongoing" },
  { value: "termine", key: "completed" },
] as const;

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string; count: number }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            disabled={o.count === 0 && !active}
            onClick={() => onChange(o.value)}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors disabled:opacity-40",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {o.label}
            <span
              className={cn(
                "rounded-full px-1.5 text-xs tabular-nums",
                active ? "bg-primary-foreground/20" : "bg-muted",
              )}
            >
              {o.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function ProjectsGrid({ projects }: { projects: ProjectSummary[] }) {
  const t = useTranslations();
  const [type, setType] = useState(ALL);
  const [status, setStatus] = useState(ALL);

  const byType = (p: ProjectSummary) => type === ALL || p.category === type;
  const byStatus = (p: ProjectSummary) => status === ALL || p.status === status;
  const visible = projects.filter((p) => byType(p) && byStatus(p));

  // Counts reflect the other active filter, so every number is reachable.
  const types = [...new Set(projects.map((p) => p.category))];
  const typeOptions = [
    { value: ALL, label: t("projects.allTypes"), count: projects.filter(byStatus).length },
    ...types.map((c) => ({
      value: c,
      label: t.has(`categories.${c}`) ? t(`categories.${c}`) : c,
      count: projects.filter((p) => p.category === c && byStatus(p)).length,
    })),
  ];
  const statusOptions = [
    { value: ALL, label: t("projects.all"), count: projects.filter(byType).length },
    ...STATUSES.map((s) => ({
      value: s.value,
      label: t(`projects.${s.key}`),
      count: projects.filter((p) => p.status === s.value && byType(p)).length,
    })),
  ];

  const filtered = type !== ALL || status !== ALL;

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <FilterGroup label={t("projects.typeFilterLabel")} options={typeOptions} value={type} onChange={setType} />
          <span aria-hidden className="hidden h-6 w-px bg-border sm:block" />
          <FilterGroup label={t("projects.statusFilterLabel")} options={statusOptions} value={status} onChange={setStatus} />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p aria-live="polite" className="font-medium text-foreground">
            {t("projects.resultsCount", { count: visible.length })}
          </p>
          {filtered && (
            <button
              type="button"
              onClick={() => {
                setType(ALL);
                setStatus(ALL);
              }}
              className="h-10 text-primary underline-offset-4 hover:underline"
            >
              {t("projects.reset")}
            </button>
          )}
        </div>
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
        <p className="py-12 text-center text-muted-foreground">{t("projects.noResults")}</p>
      )}
    </>
  );
}
