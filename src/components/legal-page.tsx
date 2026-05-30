export interface LegalSection {
  heading: string;
  body: string;
}

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {updated}</p>
      <div className="prose-body mt-8">
        {sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)]">{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
