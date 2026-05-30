import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Lumen's products: Pay, Books, Payroll, and Cards.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Products" title="Everything you need to run the money side" subtitle="Four products that work beautifully on their own — and even better together." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="card group p-8 transition-all hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-lg">
            <span className="text-4xl">{p.icon}</span>
            <h2 className="mt-4 text-xl font-semibold">{p.name}</h2>
            <p className="mt-1 text-[var(--muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.highlights.map((h) => (
                <span key={h} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs">{h}</span>
              ))}
            </div>
            <span className="mt-5 inline-block text-sm font-medium text-[var(--primary)]">Explore {p.name} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
