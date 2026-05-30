import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchArticle, fetchCategories } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps<"/support/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  return article ? { title: `${article.title} · Support`, description: article.excerpt } : { title: "Article not found" };
}

export default async function ArticlePage({ params }: PageProps<"/support/articles/[slug]">) {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) notFound();

  const cats = await fetchCategories();
  const cat = cats.find((c) => c.slug === article.category);

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-[var(--muted)]">
        <Link href="/support" className="hover:text-[var(--foreground)]">Support</Link>
        {cat && <> / <Link href={`/support/${cat.slug}`} className="hover:text-[var(--foreground)]">{cat.name}</Link></>}
      </nav>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{article.title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <div className="prose-body mt-8 text-[var(--foreground)]">
        <p className="text-lg">{article.excerpt}</p>
        <p>{article.body}</p>
      </div>
      <div className="mt-12 card flex items-center justify-between p-5">
        <span className="text-sm text-[var(--muted)]">Was this helpful?</span>
        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 text-sm hover:border-[var(--primary)]/40">👍 Yes</button>
          <button className="rounded-lg border px-4 py-2 text-sm hover:border-[var(--primary)]/40">👎 No</button>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/contact" className="text-sm text-[var(--primary)] hover:underline">Still need help? Contact us →</Link>
      </div>
    </article>
  );
}
