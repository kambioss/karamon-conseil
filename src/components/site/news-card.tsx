import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import type { Actualite } from "@/lib/data";
import { cn } from "@/lib/utils";

export function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** `featured` lays the card out horizontally on large screens. */
export function NewsCard({
  actu,
  featured = false,
}: {
  actu: Actualite;
  featured?: boolean;
}) {
  const t = useTranslations("news");
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/actualites/${actu.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_oklch(0.33_0.08_160/0.45)]",
        featured && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-muted",
          featured && "lg:aspect-auto lg:w-[55%] lg:shrink-0",
        )}
      >
        {actu.image && (
          <Image
            src={actu.image}
            alt=""
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className={cn("flex flex-1 flex-col p-5 md:p-6", featured && "lg:p-10")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {actu.category && (
            <span className="font-semibold uppercase tracking-[0.12em] text-terracotta">
              {actu.category}
            </span>
          )}
          <time dateTime={actu.createdAt}>{formatDate(actu.createdAt, locale)}</time>
        </div>
        <h3
          className={cn(
            "mt-3 font-semibold leading-snug text-foreground transition-colors group-hover:text-primary",
            featured ? "font-serif text-2xl md:text-3xl" : "line-clamp-3 text-base",
          )}
        >
          {actu.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted-foreground hyphens-auto lg:text-justify",
            featured ? "line-clamp-4 md:text-base" : "line-clamp-3",
          )}
        >
          {actu.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary">
          {t("readMore")}
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
