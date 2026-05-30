"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Article } from "@/lib/support-data";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | { status: "done"; results: Article[] };

export function SupportSearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setState({ status: "idle" });
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setState({ status: "loading" });
      try {
        const res = await fetch(`/api/support/articles?q=${encodeURIComponent(q)}`, { signal: controller.signal });
        if (!res.ok) throw new Error("request failed");
        const { data } = await res.json();
        setState({ status: "done", results: data });
      } catch (err) {
        if ((err as Error).name !== "AbortError") setState({ status: "error" });
      }
    }, 300); // debounce

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="relative mx-auto max-w-xl">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the help center…"
        className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
        aria-label="Search support articles"
      />

      {state.status !== "idle" && (
        <div className="absolute z-10 mt-2 w-full rounded-xl border bg-white p-2 shadow-lg">
          {state.status === "loading" && (
            <div className="space-y-2 p-2">
              <div className="skeleton h-5 w-3/4" />
              <div className="skeleton h-5 w-1/2" />
            </div>
          )}
          {state.status === "error" && (
            <p className="p-3 text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
          {state.status === "done" && state.results.length === 0 && (
            <p className="p-3 text-sm text-[var(--muted)]">No articles match “{query}”.</p>
          )}
          {state.status === "done" &&
            state.results.map((a) => (
              <Link key={a.slug} href={`/support/articles/${a.slug}`} className="block rounded-lg p-3 hover:bg-[var(--surface)]">
                <span className="block text-sm font-medium">{a.title}</span>
                <span className="block text-xs text-[var(--muted)]">{a.excerpt}</span>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
