import { getAllProjects, getProjectBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Calendar, CheckCircle2, Layers, MapPin } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/site/page-header'
import { ProjectCard, StatusPill, hasPhoto } from '@/components/site/project-card'
import { SectionHeading } from '@/components/site/section-heading'

const SERVICE_BY_CATEGORY: Record<string, string> = {
  eies: 'eies',
  pges: 'pges',
  par: 'par',
  audit: 'audit',
}

export default async function ProjetPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const project = getProjectBySlug(slug, locale)
  if (!project) notFound()

  let actions: string[] = []
  let results: string[] = []
  try { actions = project.actions ? JSON.parse(project.actions) : [] } catch { /* empty */ }
  try { results = project.results ? JSON.parse(project.results) : [] } catch { /* empty */ }

  const category = t.has(`categories.${project.category}`)
    ? t(`categories.${project.category}`)
    : project.category
  const service = SERVICE_BY_CATEGORY[project.category]
  const missionType = service ? t(`services.${service}.title`) : category

  // Dates in the data are approximate (often the 1st of the month), so show month + year.
  const monthYear = (date: string) =>
    new Date(date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', year: 'numeric' })

  const facts = [
    { icon: MapPin, label: t('projects.location'), value: project.location },
    { icon: Building2, label: t('projects.client'), value: project.client },
    { icon: Layers, label: t('projects.missionType'), value: missionType },
    ...(project.startDate
      ? [{ icon: Calendar, label: t('projects.started'), value: monthYear(project.startDate) }]
      : []),
    ...(project.endDate
      ? [{ icon: CheckCircle2, label: t('projects.endDate'), value: monthYear(project.endDate) }]
      : []),
  ]

  // Same mission type first, then the most recent others.
  const others = getAllProjects(locale).filter((p) => p.id !== project.id)
  const related = [
    ...others.filter((p) => p.category === project.category),
    ...others.filter((p) => p.category !== project.category),
  ].slice(0, 3)

  const sectionTitle = 'font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl'

  return (
    <>
      <article className="bg-background pb-16 md:pb-24">
        <header className="relative overflow-hidden border-b border-border pt-28 md:pt-36">
          <div aria-hidden className="bg-grid absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              crumbs={[
                { label: t('nav.homeCrumb'), href: `/${locale}` },
                { label: t('nav.projects'), href: `/${locale}/projets` },
              ]}
            />
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border">
                <StatusPill status={project.status} />
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">{category}</span>
            </div>
            <h1 className="mt-5 max-w-4xl font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {/* Key facts, visible before the long description on every screen size */}
            <dl className="mt-10 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 border-b border-border py-5 last:border-b-0 sm:pr-6 sm:nth-last-2:border-b-0 lg:border-b-0">
                  <Icon aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm font-medium leading-snug text-foreground">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {hasPhoto(project.image) && (
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-muted ring-1 ring-border lg:aspect-[21/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                quality={90}
                sizes="(max-width: 1280px) 100vw, 1216px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-4 sm:px-6 md:mt-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-14 lg:col-span-8">
            <section aria-labelledby="desc">
              <h2 id="desc" className={sectionTitle}>{t('projects.description')}</h2>
              <div className="mt-5 max-w-[68ch] whitespace-pre-line text-base leading-[1.8] text-muted-foreground md:text-[1.05rem] hyphens-auto text-justify">
                {project.fullDescription}
              </div>
            </section>

            {actions.length > 0 && (
              <section aria-labelledby="actions">
                <h2 id="actions" className={sectionTitle}>{t('projects.actions')}</h2>
                <ol className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                  {actions.map((action, i) => (
                    <li key={i} className="flex gap-4 p-5">
                      <span aria-hidden className="font-mono text-xs leading-6 tracking-widest text-terracotta">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85 md:text-base hyphens-auto text-justify">{action}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {results.length > 0 && (
              <section aria-labelledby="results">
                <h2 id="results" className={sectionTitle}>{t('projects.results')}</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {results.map((result, i) => (
                    <li key={i} className="flex gap-3 rounded-2xl bg-primary/5 p-5 ring-1 ring-primary/10">
                      <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-foreground/85 hyphens-auto text-justify">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground md:p-7">
                <p className="font-serif text-2xl font-semibold">{t('projects.similarTitle')}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 hyphens-auto text-justify">{t('projects.similarText')}</p>
                <Button asChild className="mt-6 h-11 w-full rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href={`/${locale}#contact`}>
                    {t('hero.cta2')}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
              <Link
                href={`/${locale}/projets`}
                className="inline-flex h-11 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft aria-hidden className="h-4 w-4" />
                {t('projects.backToProjects')}
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-border bg-muted/50 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              id="related-title"
              eyebrow={t('projects.badge')}
              title={t('projects.related')}
              action={
                <Button asChild variant="outline" className="h-11 rounded-xl px-5">
                  <Link href={`/${locale}/projets`}>
                    {t('projects.seeAllProjects')}
                    <ArrowUpRight aria-hidden />
                  </Link>
                </Button>
              }
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.id} className="reveal">
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
