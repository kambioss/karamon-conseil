import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Building2, CheckCircle2, MapPin } from "lucide-react";

import type { Project } from "@/lib/data";

export type ProjectSummary = Pick<
  Project,
  "id" | "slug" | "title" | "location" | "client" | "status" | "category" | "image"
>;

/** Projects without a real photo use a shared placeholder image. */
export function hasPhoto(image: string | null): image is string {
  return !!image && !image.includes("default-project");
}

/** Typographic stand-in for projects without a photo. */
function ProjectVisual({ category, location }: { category: string; location: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end overflow-hidden bg-primary p-6 text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-current opacity-20" />
      <div aria-hidden className="absolute -right-2 -top-2 h-24 w-24 rounded-full border border-current opacity-20" />
      <p className="relative font-serif text-4xl font-semibold tracking-tight">{category}</p>
      <p className="relative mt-1 line-clamp-1 text-sm text-primary-foreground/75">{location}</p>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const t = useTranslations("projects");
  const ongoing = status === "en-cours";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
      {ongoing ? (
        <span aria-hidden className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
      ) : (
        <CheckCircle2 aria-hidden className="h-3.5 w-3.5 text-primary" />
      )}
      {ongoing ? t("ongoingBadge") : t("completedBadge")}
    </span>
  );
}

export function ProjectCard({
  project,
  priority = false,
}: {
  project: ProjectSummary;
  priority?: boolean;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const category = t.has(`categories.${project.category}`)
    ? t(`categories.${project.category}`)
    : project.category;

  return (
    <Link
      href={`/${locale}/projets/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_oklch(0.33_0.08_160/0.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {hasPhoto(project.image) ? (
          <Image
            src={project.image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectVisual category={category} location={project.location} />
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <StatusPill status={project.status} />
          {hasPhoto(project.image) && (
            <span className="rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background backdrop-blur">
              {category}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="line-clamp-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <dt className="sr-only">{t("projects.location")}</dt>
            <MapPin aria-hidden className="h-4 w-4 shrink-0" />
            <dd className="line-clamp-1">{project.location}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">{t("projects.client")}</dt>
            <Building2 aria-hidden className="h-4 w-4 shrink-0" />
            <dd className="line-clamp-1">{project.client}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary">
          {t("projects.viewDetails")}
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
