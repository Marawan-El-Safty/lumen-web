import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the Lumen team." };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Contact" title="Talk to us" subtitle="Questions about products, pricing, or your account? We’re here to help." />
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            ["Sales", "sales@lumen.example.com", "For pricing and enterprise plans."],
            ["Support", "support@lumen.example.com", "Account and product help."],
            ["Press", "press@lumen.example.com", "Media and partnership inquiries."],
          ].map(([title, email, desc]) => (
            <div key={title} className="card p-5">
              <h2 className="font-semibold">{title}</h2>
              <a href={`mailto:${email}`} className="text-sm text-[var(--primary)] hover:underline">{email}</a>
              <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
