"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production this POSTs to the backend contact endpoint.
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card grid place-items-center p-12 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--primary)]/10 text-2xl">✓</div>
        <h2 className="mt-3 font-semibold">Message sent</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">Thanks for reaching out — we’ll reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Full name" className="rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
        <input required type="email" placeholder="Work email" className="rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
      </div>
      <input placeholder="Company" className="w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
      <textarea required rows={5} placeholder="How can we help?" className="w-full resize-none rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:border-[var(--primary)]" />
      <button type="submit" className="w-full rounded-lg bg-[var(--primary)] px-4 py-2.5 font-medium text-white transition-transform hover:-translate-y-0.5">Send message</button>
    </form>
  );
}
