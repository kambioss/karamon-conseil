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

/** Eyebrow + title on the left, lead paragraph and optional action on the
 * right, so the heading row spans the full width instead of hugging the
 * left edge. Everything stacks below the `lg` breakpoint. */
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
  const hasAside = Boolean(subtitle || action);

  return (
    <div
      className={cn(
        "reveal mb-10 grid gap-6 md:mb-14 lg:grid-cols-12 lg:items-end lg:gap-12",
        className,
      )}
    >
      <div className={hasAside ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-[2.75rem]"
        >
          {title}
        </h2>
      </div>
      {hasAside && (
        <div className={cn("lg:col-span-5", !subtitle && "lg:flex lg:justify-end")}>
          {subtitle && (
            <p className="text-base leading-relaxed text-muted-foreground md:text-[1.05rem] hyphens-auto text-justify">
              {subtitle}
            </p>
          )}
          {action && <div className={subtitle ? "mt-6" : ""}>{action}</div>}
        </div>
      )}
    </div>
  );
}
