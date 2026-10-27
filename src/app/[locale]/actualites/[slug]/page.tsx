import { getActualiteBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Breadcrumb } from '@/components/site/page-header'
import { formatDate } from '@/components/site/news-card'

export default async function ActualitePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const actualite = getActualiteBySlug(slug, locale)
  if (!actualite) notFound()

  return (
    <article className="bg-background pb-20 md:pb-28">
      <header className="mx-auto max-w-3xl px-4 pt-28 sm:px-6 md:pt-36">
        <Breadcrumb
          crumbs={[
            { label: t('nav.homeCrumb'), href: `/${locale}` },
            { label: t('nav.news'), href: `/${locale}/actualites` },
            { label: actualite.title },
          ]}
        />
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          {actualite.category && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">
              {actualite.category}
            </span>
          )}
          <time dateTime={actualite.createdAt}>{formatDate(actualite.createdAt, locale)}</time>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {actualite.title}
        </h1>
        {actualite.excerpt && (
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify">{actualite.excerpt}</p>
        )}
      </header>

      {actualite.image && (
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-muted ring-1 ring-border">
            <Image
              src={actualite.image}
              alt={actualite.title}
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6">
        <div className="whitespace-pre-line text-base leading-[1.85] text-foreground/85 md:text-lg hyphens-auto text-justify">
          {actualite.content}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <Link
            href={`/${locale}/actualites`}
            className="inline-flex h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            {t('news.seeAllNews')}
          </Link>
        </div>
      </div>
    </article>
  )
}
