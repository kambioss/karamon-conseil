import { getPublishedActualites } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ActualitesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const actualites = getPublishedActualites(locale)
  const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-80 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pattern-african-3.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover animate-ken-burns"
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="hero-gradient-bottom absolute inset-0" />
        </div>
        <div
          className="geo-shape geo-shape-triangle animate-float"
          style={{ top: "12%", left: "6%" }}
        />
        <div
          className="geo-shape geo-shape-diamond animate-float-reverse"
          style={{ bottom: "18%", right: "6%" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-10 w-full">
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-4 animate-in fade-in duration-700">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">
              {t('nav.home')}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">{t('nav.news')}</span>
          </nav>
          <Badge className="bg-terracotta text-terracotta-foreground border-terracotta mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {t('news.badge')}
          </Badge>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-3 leading-tight drop-shadow-md animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: '80ms', animationFillMode: 'backwards' }}
          >
            {t('news.title')}
          </h1>
          <p
            className="text-white/85 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700"
            style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}
          >
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        {/* Grid */}
        {actualites.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actualites.map((actu, i) => (
              <div
                key={actu.id}
                className="animate-in fade-in slide-in-from-bottom-2 duration-700"
                style={{
                  animationDelay: `${150 + i * 60}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <Link href={`/${locale}/actualites/${actu.slug}`} className="block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group">
                    <div className="relative h-48 overflow-hidden">
                      {actu.image && (
                        <Image
                          src={actu.image}
                          alt={actu.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <ArrowUpRight className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-terracotta text-terracotta-foreground border-terracotta">
                          {actu.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(actu.createdAt).toLocaleDateString(dateLocale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 leading-snug line-clamp-2 text-sm">
                        {actu.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 text-justify">
                        {actu.excerpt}
                      </p>
                      <span className="inline-flex items-center text-primary text-sm font-medium">
                        {t('news.readMore')}
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            {locale === 'fr' ? 'Aucune actualité pour le moment.' : 'No news yet.'}
          </p>
        )}
      </div>
    </div>
  )
}
