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

  return (
    <div className="bg-background pb-20 md:pb-28">
      <PageHeader
        crumbs={[{ label: t("nav.homeCrumb"), href: `/${locale}` }, { label: t("nav.projects") }]}
        eyebrow={t("projects.badge")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
