import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchArticles, fetchCategories } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps<"/support/[category]">): Promise<Metadata> {
  const { category } = await params;
  const cats = await fetchCategories();
  const cat = cats.find((c) => c.slug === category);
  return cat ? { title: `${cat.name} · Support`, description: cat.description } : { title: "Support" };
}

export default async function CategoryPage({ params }: PageProps<"/support/[category]">) {
  const { category } = await params;
  const [cats, articles] = await Promise.all([fetchCategories(), fetchArticles({ category })]);
  const cat = cats.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/support" className="text-sm text-[var(--primary)] hover:underline">← All topics</Link>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-3xl">{cat.icon}</span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{cat.name}</h1>
          <p className="text-[var(--muted)]">{cat.description}</p>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="card mt-10 p-12 text-center">
          <p className="font-medium">No articles here yet</p>
          <p className="mt-1 text-sm text-[var(--muted)]">We’re working on it — check back soon.</p>
        </div>
      ) : (
        <div className="mt-8 divide-y rounded-2xl border">
          {articles.map((a) => (
            <Link key={a.slug} href={`/support/articles/${a.slug}`} className="block p-5 transition-colors hover:bg-[var(--surface)]">
              <span className="block font-medium">{a.title}</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">{a.excerpt}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
