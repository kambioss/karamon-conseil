import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHeader } from "@/components/site/page-header";
import { ProjectsGrid } from "@/components/site/projects-grid";
import { getAllProjects } from "@/lib/data";

export default async function ProjetsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  // Only ship the fields the cards need to the client filter.
  const projects = getAllProjects(locale).map(
    ({ id, slug, title, location, client, status, category, image }) => ({
      id, slug, title, location, client, status, category, image,
    }),
  );

  const stats = [
    { value: projects.length, label: t("about.statProjects") },
    { value: projects.filter((p) => p.status === "en-cours").length, label: t("projects.ongoingBadge") },
    { value: 8, label: t("about.statCountries") },
  ];

  return (
    <div className="bg-background pb-8 md:pb-12">
      <PageHeader
        crumbs={[{ label: t("nav.homeCrumb"), href: `/${locale}` }, { label: t("nav.projects") }]}
        eyebrow={t("projects.badge")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        aside={
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-card px-4 py-5">
                <dt className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        }
      />
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-10 lg:px-8">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
