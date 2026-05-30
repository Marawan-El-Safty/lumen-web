import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Security", description: "How Lumen keeps your money and data safe." };

const measures = [
  { title: "Encryption everywhere", body: "TLS 1.3 in transit and AES-256 at rest protect your data end to end." },
  { title: "PCI-DSS Level 1", body: "The highest level of payment card security certification." },
  { title: "SOC 2 Type II", body: "Independently audited controls for security and availability." },
  { title: "Tokenized card data", body: "Sensitive card data is vaulted and never touches your servers." },
  { title: "2FA & SSO", body: "Multi-factor authentication and enterprise single sign-on." },
  { title: "24/7 monitoring", body: "Continuous threat detection and an on-call security team." },
];

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Security" title="Security is our foundation" subtitle="We protect your business with bank-grade controls — so you can focus on growth." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {measures.map((m) => (
          <div key={m.title} className="card p-6">
            <h2 className="font-semibold">{m.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{m.body}</p>
          </div>
        ))}
      </div>
      <div className="card mt-10 p-8 text-center">
        <h2 className="text-lg font-semibold">Report a vulnerability</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--muted)]">Found a security issue? We appreciate responsible disclosure. Email security@lumen.example.com and our team will respond promptly.</p>
      </div>
    </div>
  );
}
