import { getTranslations, setRequestLocale } from "next-intl/server";

import { NewsCard } from "@/components/site/news-card";
import { PageHeader } from "@/components/site/page-header";
import { getPublishedActualites } from "@/lib/data";

export default async function ActualitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const [featured, ...rest] = getPublishedActualites(locale);

  return (
    <div className="bg-background pb-8 md:pb-12">
      <PageHeader
        crumbs={[{ label: t("nav.homeCrumb"), href: `/${locale}` }, { label: t("nav.news") }]}
        eyebrow={t("news.badge")}
        title={t("news.title")}
        subtitle={t("news.subtitle")}
      />
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-10 lg:px-8">
        {featured ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="sm:col-span-2 lg:col-span-3">
              <NewsCard actu={featured} featured />
            </div>
            {rest.map((actu) => (
              <div key={actu.id} className="reveal">
                <NewsCard actu={actu} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted-foreground">{t("news.empty")}</p>
        )}
      </div>
    </div>
  );
}
