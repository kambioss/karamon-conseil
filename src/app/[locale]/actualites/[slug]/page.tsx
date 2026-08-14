import { getActualiteBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, ChevronRight } from 'lucide-react'
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
      {/* Ambient backdrop */}
      {actualite.image && (
        <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-primary">
          <Image
            src={actualite.image}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover scale-110 blur-2xl opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
          <div className="absolute top-20 md:top-24 left-6 z-10 animate-in fade-in slide-in-from-left-4 duration-700">
            <Link href={`/${locale}/actualites`}>
              <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white backdrop-blur-sm gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 ${
          actualite.image ? "" : "pt-28 md:pt-32"
        }`}
      >
        {/* Framed, correctly-sized image */}
        {actualite.image && (
          <div className="relative -mt-28 sm:-mt-32 lg:-mt-36 mb-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <Image
                src={actualite.image}
                alt={actualite.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                quality={90}
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {!actualite.image && (
          <div className="mb-6">
            <Link href={`/${locale}/actualites`}>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        )}

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 animate-in fade-in duration-700"
          style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
        >
          <Link href={`/${locale}`} className="hover:text-foreground transition-colors">
            {t('nav.home')}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/${locale}/actualites`} className="hover:text-foreground transition-colors">
            {t('nav.news')}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/70 line-clamp-1">{actualite.title}</span>
        </nav>

        <div
          className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}
        >
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

        <h1
          className="text-3xl sm:text-4xl font-bold text-primary font-[family-name:var(--font-playfair)] leading-tight mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          {actualite.title}
        </h1>

        <Separator className="mb-8" />

        <div className="text-muted-foreground leading-relaxed text-base whitespace-pre-line text-justify">
          {actualite.content}
        </div>

        <Separator className="my-10" />

        <div className="text-center">
          <Link href={`/${locale}/actualites`}>
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
