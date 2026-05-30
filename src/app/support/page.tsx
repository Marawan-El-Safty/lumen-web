import type { Metadata } from "next";
import Link from "next/link";
import { fetchArticles, fetchCategories } from "@/lib/api";
import { PageHeader } from "@/components/page-header";
import { SupportSearch } from "@/components/support-search";

export const metadata: Metadata = {
  title: "Support",
  description: "Browse the Lumen help center: guides, FAQs, and answers from our team.",
};

// Rendered on each request (SSR) so content stays in sync with the backend.
export const dynamic = "force-dynamic";

export default async function SupportPage() {
  let categories;
  let popular;
  try {
    [categories, popular] = await Promise.all([fetchCategories(), fetchArticles()]);
  } catch {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-2xl font-semibold">We couldn’t load the help center</h1>
        <p className="mt-2 text-[var(--muted)]">Please refresh the page or try again shortly.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Help Center" title="How can we help?" subtitle="Search our guides or browse by category." />
      <div className="mt-8">
        <SupportSearch />
      </div>

      {categories.length === 0 ? (
        <p className="mt-16 text-center text-[var(--muted)]">No help topics are available yet.</p>
      ) : (
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} href={`/support/${c.slug}`} className="card group p-6 transition-all hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-lg">
              <span className="text-3xl">{c.icon}</span>
              <h2 className="mt-4 font-semibold">{c.name}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{c.description}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-lg font-semibold">Popular articles</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {popular.slice(0, 6).map((a) => (
            <Link key={a.slug} href={`/support/articles/${a.slug}`} className="card p-4 hover:border-[var(--primary)]/40">
              <span className="block font-medium">{a.title}</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">{a.excerpt}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
