import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Careers", description: "Join Lumen and help build the future of business finance." };

const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer (Payments)", team: "Engineering", location: "Berlin / Remote", type: "Full-time" },
  { title: "Customer Success Manager", team: "Operations", location: "Remote", type: "Full-time" },
  { title: "Compliance Analyst", team: "Risk", location: "London", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Careers" title="Build the future of business finance" subtitle="We’re a remote-first team that ships fast and cares deeply about our customers." />
      <div className="mt-12 divide-y rounded-2xl border">
        {roles.map((r) => (
          <div key={r.title} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-medium">{r.title}</h2>
              <p className="text-sm text-[var(--muted)]">{r.team} · {r.location} · {r.type}</p>
            </div>
            <a href="mailto:careers@lumen.example.com" className="rounded-lg border px-4 py-2 text-center text-sm hover:border-[var(--primary)]/40">Apply</a>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-[var(--muted)]">Don’t see your role? Email careers@lumen.example.com — we’re always meeting great people.</p>
    </div>
  );
}
