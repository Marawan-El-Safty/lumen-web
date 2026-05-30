"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

const platforms = [
  { label: "iOS — App Store", href: "https://apps.apple.com" },
  { label: "Android — Google Play", href: "https://play.google.com" },
  { label: "Web Login", href: "https://app.lumen.example.com" },
];

export function Navbar() {
  const [open, setOpen] = useState<"products" | "platforms" | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--primary)] text-sm font-bold text-white">L</span>
          Lumen
        </Link>

        <div className="hidden items-center gap-1 md:flex" onMouseLeave={() => setOpen(null)}>
          <Link href="/" className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Home</Link>

          <div className="relative" onMouseEnter={() => setOpen("products")}>
            <button className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Products</button>
            {open === "products" && (
              <div className="absolute left-0 top-full w-64 rounded-xl border bg-white p-2 shadow-lg">
                {products.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="flex items-start gap-3 rounded-lg p-2 hover:bg-[var(--surface)]">
                    <span>{p.icon}</span>
                    <span>
                      <span className="block text-sm font-medium">{p.name}</span>
                      <span className="block text-xs text-[var(--muted)]">{p.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setOpen("platforms")}>
            <button className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Platforms</button>
            {open === "platforms" && (
              <div className="absolute left-0 top-full w-56 rounded-xl border bg-white p-2 shadow-lg">
                {platforms.map((p) => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="block rounded-lg p-2 text-sm hover:bg-[var(--surface)]">
                    {p.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">About</Link>
          <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Pricing</Link>
          <Link href="/support" className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">Support</Link>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://app.lumen.example.com" target="_blank" rel="noopener noreferrer" className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] sm:block">Log in</a>
          <Link href="/pricing" className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">Get started</Link>
          <button onClick={() => setMobile((m) => !m)} className="rounded-lg border px-3 py-2 text-sm md:hidden" aria-label="Menu">☰</button>
        </div>
      </nav>

      {mobile && (
        <div className="border-t bg-white px-4 py-3 md:hidden">
          {["/", ...products.map((p) => `/products/${p.slug}`), "/about", "/pricing", "/support"].map((href) => (
            <Link key={href} href={href} onClick={() => setMobile(false)} className="block rounded-lg px-2 py-2 text-sm capitalize hover:bg-[var(--surface)]">
              {href === "/" ? "Home" : href.split("/").pop()!.replace("-", " ")}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
