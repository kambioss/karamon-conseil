import { getActualiteBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ActualitePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const actualite = getActualiteBySlug(slug, locale)
  if (!actualite) notFound()

  const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <div className="min-h-screen bg-background">
      {/* Hero image */}
      {actualite.image && (
        <div className="relative h-72 sm:h-96 lg:h-[28rem]">
          <Image src={actualite.image} alt={actualite.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute top-6 left-6 z-10">
            <Link href={`/${locale}/#actualites`}>
              <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white backdrop-blur-sm gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!actualite.image && (
          <div className="mb-6">
            <Link href={`/${locale}/#actualites`}>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          {actualite.category && (
            <Badge className="bg-terracotta text-terracotta-foreground border-terracotta">
              {actualite.category}
            </Badge>
          )}
          <span className="text-sm text-muted-foreground flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(actualite.createdAt).toLocaleDateString(dateLocale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] leading-tight mb-8">
          {actualite.title}
        </h1>

        <Separator className="mb-8" />

        <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line text-justify">
          {actualite.content}
        </div>

        <Separator className="my-10" />

        <div className="text-center">
          <Link href={`/${locale}/#actualites`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('news.seeAllNews')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
