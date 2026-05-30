# Upwork Proposal — Company Website in Next.js

> Paste the cover letter into Upwork. Replace the two bracketed links first.

---

Hi there,

You need a Next.js company site (~12 pages) with clean routing, strong SEO, and
a **dynamic Support section wired to your backend** — so rather than just
describe it, I built a working version of exactly that and deployed it.

**▶ Live demo:** [ADD-VERCEL-LINK]
**▶ Code:** [ADD-GITHUB-LINK]

What's in it, mapped to your brief:

- **Header nav** — Home, **Products** (dropdown → 4 detail pages), **Platforms**
  (dropdown of external links: App Store / Google Play / Web Login), About,
  Pricing, Support.
- **Footer pages** — Terms, Privacy, Refund/Cancellation, Security, Careers,
  Contact.
- **Dynamic Support section** — categories, article lists, article-by-slug, and
  live search, all fetched from a REST API. It handles **loading, empty, and
  error states** gracefully (try the search box and an unknown article URL).
- **SEO + rendering** — static pages and SSG product pages for speed, SSR for
  Support so content stays in sync, per-page metadata and Open Graph.

On **backend integration**: all Support data flows through one typed API client
(`src/lib/api.ts`) reading `SUPPORT_API_URL` and `SUPPORT_API_KEY` from env. The
demo ships with mock API routes so it runs anywhere; pointing it at *your*
provided API (REST or GraphQL) is a one-line env change — no rewrite. I've
documented the exact endpoint contract in the README.

**Stack:** Next.js (latest) · React · TypeScript · Tailwind CSS · native
fetch/SWR-style client data · Git. Exactly your preferred stack.

A bit about me: I build corporate and SaaS-style sites and integrate provided
APIs cleanly. Recent work:
- **FreightDesk CRM** (full-stack, dashboards): https://github.com/Marawan-El-Safty/FreightDesk-CRM
- **EstateHub** (real-estate SaaS demo): https://estatehub-demo.vercel.app

I communicate clearly and ship in reviewable increments with regular updates.
Share your brand colors/references and the API docs, and I'll map this to a
concrete page-by-page plan. Happy to walk through the demo live anytime.

Best,
Marawan El-Safty

---

### Sender checklist
- [ ] Deploy to Vercel, paste URL above.
- [ ] Push repo to GitHub (public), paste URL.
- [ ] Optional: skim and trim to fit if Upwork truncates — keep the demo link
      and the Support/backend paragraphs.
