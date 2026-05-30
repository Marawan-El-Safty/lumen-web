import { headers } from "next/headers";
import type { Article, Category } from "./support-data";

/**
 * Support API client. Points at the backend the client provides via
 * SUPPORT_API_URL. In this demo it defaults to the bundled mock route handlers
 * (/api/support/*) on the same origin, derived from the request host so it
 * works on any port and on Vercel. Swapping to the real backend is a one-line
 * env change — no code edits.
 */
async function baseUrl() {
  if (process.env.SUPPORT_API_URL) return process.env.SUPPORT_API_URL.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const proto = host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https";
  return `${proto}://${host}/api/support`;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${await baseUrl()}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(process.env.SUPPORT_API_KEY ? { Authorization: `Bearer ${process.env.SUPPORT_API_KEY}` } : {}),
    },
    next: { revalidate: 300 }, // ISR: cache 5 min, good for SEO + freshness
    ...init,
  });
  if (!res.ok) throw new Error(`Support API ${res.status}: ${path}`);
  return res.json();
}

export async function fetchCategories(): Promise<Category[]> {
  const { data } = await request<{ data: Category[] }>("/categories");
  return data;
}

export async function fetchArticles(params?: { category?: string; q?: string }): Promise<Article[]> {
  const qs = new URLSearchParams();
  if (params?.category) qs.set("category", params.category);
  if (params?.q) qs.set("q", params.q);
  const suffix = qs.toString() ? `?${qs}` : "";
  const { data } = await request<{ data: Article[] }>(`/articles${suffix}`);
  return data;
}

export async function fetchArticle(slug: string): Promise<Article | null> {
  try {
    const { data } = await request<{ data: Article }>(`/articles/${slug}`);
    return data;
  } catch {
    return null;
  }
}
