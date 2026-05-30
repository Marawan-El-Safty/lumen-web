export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="animate-fade-up mx-auto max-w-3xl text-center">
      {eyebrow && <span className="text-sm font-medium text-[var(--primary)]">{eyebrow}</span>}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>}
    </div>
  );
}
