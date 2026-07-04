import { getProjectBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ProjetPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const project = getProjectBySlug(slug, locale)
  if (!project) notFound()

  const dateLocale = locale === 'fr' ? 'fr-FR' : 'en-US'

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return t('projects.inProgress')
    return new Date(dateStr).toLocaleDateString(dateLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  let actions: string[] = []
  let results: string[] = []
  try { actions = project.actions ? JSON.parse(project.actions) : [] } catch { /* empty */ }
  try { results = project.results ? JSON.parse(project.results) : [] } catch { /* empty */ }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96 lg:h-[28rem]">
        {project.image && (
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href={`/${locale}/#projets`}>
            <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white backdrop-blur-sm gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('projects.backToProjects')}
            </Button>
          </Link>
        </div>

        {/* Content over image */}
        <div className="absolute bottom-8 left-8 right-8 z-10 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge
              className={
                project.status === 'en-cours'
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-institutional text-white border-institutional'
              }
            >
              {project.status === 'en-cours' ? (
                <><CheckCircle2 className="mr-1 h-3 w-3" /> {t('projects.ongoingBadge')}</>
              ) : (
                <><CheckCircle2 className="mr-1 h-3 w-3" /> {t('projects.completedBadge')}</>
              )}
            </Badge>
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              {t(`categories.${project.category}` as any) || project.category}
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('projects.location')}</p>
              <p className="text-sm font-medium">{project.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('projects.client')}</p>
              <p className="text-sm font-medium">{project.client}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('projects.startDate')}</p>
              <p className="text-sm font-medium">{formatDate(project.startDate)}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">{t('projects.endDate')}</p>
              <p className="text-sm font-medium">{formatDate(project.endDate)}</p>
            </div>
          </div>
        </div>

        <Separator className="mb-10" />

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
            {t('projects.description')}
          </h2>
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify">
            {project.fullDescription}
          </div>
        </div>

        {/* Actions */}
        {actions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              {t('projects.actions')}
            </h2>
            <ul className="space-y-3">
              {actions.map((action: string, i: number) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)] mb-4">
              {t('projects.results')}
            </h2>
            <ul className="space-y-3">
              {results.map((result: string, i: number) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <ArrowRight className="h-5 w-5 text-terracotta mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Separator className="my-10" />

        <div className="text-center">
          <Link href={`/${locale}/#projets`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('projects.seeAllProjects')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
