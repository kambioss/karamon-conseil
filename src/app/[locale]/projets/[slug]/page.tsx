import { getProjectBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, Calendar, CheckCircle2, MapPin } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/site/page-header'
import { StatusPill } from '@/components/site/project-card'
import { formatDate } from '@/components/site/news-card'

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

  const meta = [
    { icon: MapPin, label: t('projects.location'), value: project.location },
    { icon: Building2, label: t('projects.client'), value: project.client },
    {
      icon: Calendar,
      label: t('projects.startDate'),
      value: project.startDate ? formatDate(project.startDate, locale) : t('projects.inProgress'),
    },
    {
      icon: CheckCircle2,
      label: t('projects.endDate'),
      value: project.endDate ? formatDate(project.endDate, locale) : t('projects.inProgress'),
    },
  ]

  const sectionTitle = 'font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl'

  return (
    <article className="bg-background pb-20 md:pb-28">
      <header className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 md:pt-36 lg:px-8">
        <Breadcrumb
          crumbs={[
            { label: t('nav.homeCrumb'), href: `/${locale}` },
            { label: t('nav.projects'), href: `/${locale}/projets` },
            { label: project.title },
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
      </header>

      {project.image && (
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
            <div className="mt-5 max-w-[68ch] whitespace-pre-line text-base leading-[1.8] text-muted-foreground md:text-[1.05rem] hyphens-auto sm:text-justify">
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
                    <span className="text-sm leading-relaxed text-foreground/85 md:text-base hyphens-auto sm:text-justify">{action}</span>
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
                    <span className="text-sm leading-relaxed text-foreground/85 hyphens-auto lg:text-justify">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 p-5">
                  <Icon aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="font-serif text-xl font-semibold">{t('footer.ctaTitle')}</p>
              <p className="mt-2 text-sm text-primary-foreground/80">{t('footer.ctaSubtitle')}</p>
              <Button asChild className="mt-5 h-11 w-full rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
  )
}
