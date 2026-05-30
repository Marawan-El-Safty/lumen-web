import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6">
        <div className="animate-fade-up mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-[var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> Trusted by 20,000+ businesses
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            The financial toolkit for <span className="text-[var(--primary)]">modern businesses</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--muted)]">
            Payments, accounting, payroll, and corporate cards — unified in one platform, built to scale with you.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/pricing" className="rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5">Get started free</Link>
            <Link href="/support" className="rounded-xl border bg-white px-6 py-3 font-medium hover:border-[var(--primary)]/40">Visit support</Link>
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[["$8B+", "Processed"], ["20k+", "Businesses"], ["99.99%", "Uptime"], ["135+", "Currencies"]].map(([v, l]) => (
            <div key={l} className="card p-5">
              <dt className="text-2xl font-semibold">{v}</dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight">One platform, four products</h2>
          <p className="mt-2 text-[var(--muted)]">Use them together, or pick exactly what you need.</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="card group p-6 transition-all hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-lg">
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.tagline}</p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--primary)]">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="card flex flex-col items-center gap-4 bg-[var(--primary)] px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to move money smarter?</h2>
          <p className="max-w-md text-white/80">Start free in minutes. No setup fees, no lock-in.</p>
          <Link href="/pricing" className="rounded-xl bg-white px-6 py-3 font-medium text-[var(--primary)] transition-transform hover:-translate-y-0.5">View pricing</Link>
        </div>
      </section>
    </div>
  );
}
