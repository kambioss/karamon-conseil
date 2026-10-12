import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
    </p>
  );
}

/** Eyebrow + title + optional lead paragraph, with an optional action
 * (e.g. a "see all" link) aligned to the right on wide screens. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
  id,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-[2.75rem]"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg hyphens-auto sm:text-justify">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
