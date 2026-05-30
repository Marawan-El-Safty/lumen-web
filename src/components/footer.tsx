import Link from "next/link";
import { products } from "@/lib/products";

const cols = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "/support" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--primary)] text-sm font-bold text-white">L</span>
              Lumen
            </Link>
            <p className="mt-3 text-sm text-[var(--muted)]">The financial toolkit for modern businesses.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t pt-6 text-sm text-[var(--muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Lumen Technologies. All rights reserved.</span>
          <span>Built with Next.js by Marawan El-Safty</span>
        </div>
      </div>
    </footer>
  );
}
