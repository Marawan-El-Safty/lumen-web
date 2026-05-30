import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description: "Lumen builds the financial toolkit modern businesses run on.",
};

const values = [
  { title: "Customer-obsessed", body: "Every decision starts with the businesses we serve." },
  { title: "Secure by default", body: "Bank-grade security is the baseline, not a feature." },
  { title: "Built to scale", body: "From first sale to global operations on the same platform." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="About" title="We help businesses move money with confidence" subtitle="Lumen started with a simple belief: financial tooling should be powerful, transparent, and a joy to use." />

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[["2019", "Founded"], ["280+", "Team members"], ["14", "Countries"]].map(([v, l]) => (
          <div key={l} className="card p-6 text-center">
            <div className="text-2xl font-semibold">{v}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{l}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl prose-body">
        <h2 className="mb-3 text-2xl font-semibold">Our story</h2>
        <p>Lumen was born out of frustration with the patchwork of tools businesses had to stitch together just to get paid and stay compliant. We set out to unify payments, accounting, payroll, and cards into one coherent platform.</p>
        <p>Today, tens of thousands of businesses trust Lumen to run their financial operations — from solo founders to teams operating across continents.</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="card p-6">
            <h3 className="font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
