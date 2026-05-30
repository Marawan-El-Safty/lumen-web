import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6">
        <div className="animate-fade-up max-w-2xl">
          <span className="text-4xl">{product.icon}</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-xl text-[var(--primary)]">{product.tagline}</p>
          <p className="mt-4 text-lg text-[var(--muted)]">{product.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pricing" className="rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5">Get started</Link>
            <Link href="/support" className="rounded-xl border bg-white px-6 py-3 font-medium hover:border-[var(--primary)]/40">Read the docs</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {product.features.map((f) => (
            <div key={f.title} className="card p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="card flex flex-wrap items-center justify-center gap-8 px-8 py-10 text-center">
          {product.highlights.map((h) => (
            <div key={h} className="text-lg font-semibold">{h}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="text-lg font-semibold">Other products</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {products.filter((p) => p.slug !== product.slug).map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="card flex items-center gap-3 p-4 hover:border-[var(--primary)]/40">
              <span className="text-2xl">{p.icon}</span>
              <span>
                <span className="block font-medium">{p.name}</span>
                <span className="block text-xs text-[var(--muted)]">{p.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
