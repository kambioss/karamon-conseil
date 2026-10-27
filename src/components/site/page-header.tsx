import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Eyebrow } from "@/components/site/section-heading";

/** Header for inner listing pages: breadcrumb, eyebrow, title, lead. */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  subtitle,
  aside,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-10 md:pt-36 md:pb-14">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb crumbs={crumbs} />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow className="mt-8">{eyebrow}</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              {title}
            </h1>
            {/* With an aside, the lead stays under the title; without one it
             * moves to the right column so the row is not left-heavy. */}
            {subtitle && aside && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg hyphens-auto text-justify">
                {subtitle}
              </p>
            )}
          </div>
          {(aside || subtitle) && (
            <div className="lg:col-span-5">
              {subtitle && !aside && (
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg hyphens-auto text-justify">
                  {subtitle}
                </p>
              )}
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({
  crumbs,
}: {
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex min-w-0 items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5 shrink-0" />}
            {crumb.href ? (
              <Link href={crumb.href} className="transition-colors hover:text-foreground">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 text-foreground">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
