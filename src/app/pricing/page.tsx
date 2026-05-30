import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for businesses of every size.",
};

const plans = [
  { name: "Starter", price: "$0", period: "/mo", desc: "For new businesses finding their feet.", features: ["Up to $10k/mo volume", "Lumen Pay & Books", "Email support", "1 team member"], cta: "Start free", highlight: false },
  { name: "Growth", price: "$49", period: "/mo", desc: "For growing teams that need more.", features: ["Up to $250k/mo volume", "All products included", "Priority support", "Up to 10 team members", "Advanced analytics"], cta: "Start 14-day trial", highlight: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For organizations at scale.", features: ["Unlimited volume", "Dedicated manager", "Custom contracts & SLA", "SSO & audit logs", "Premium onboarding"], cta: "Contact sales", highlight: false },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Pricing" title="Simple, transparent pricing" subtitle="No setup fees. No hidden costs. Switch or cancel anytime." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`card flex flex-col p-8 ${plan.highlight ? "ring-2 ring-[var(--primary)]" : ""}`}>
            {plan.highlight && <span className="mb-3 inline-block w-fit rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white">Most popular</span>}
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{plan.desc}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-semibold">{plan.price}</span>
              <span className="pb-1 text-[var(--muted)]">{plan.period}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-[var(--primary)]">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`mt-8 rounded-xl px-5 py-3 text-center font-medium transition-transform hover:-translate-y-0.5 ${plan.highlight ? "bg-[var(--primary)] text-white" : "border bg-white"}`}>{plan.cta}</Link>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-[var(--muted)]">All plans include bank-grade security, 99.99% uptime, and access to our help center.</p>
    </div>
  );
}
