# Lumen — Company Website (Next.js Demo)

A complete, production-style company website built for an Upwork proposal. It
mirrors the brief exactly: ~12 pages, header navigation with dropdowns,
external Platforms menu, footer information pages, SEO optimization, and a
**dynamic Support section that fetches from a backend API** with loading,
empty, and error states.

> The Support backend is stubbed with mock API route handlers
> (`/api/support/*`) so the site runs with zero config. Pointing it at the
> client's real API is a **one-line `.env` change** — no code edits. See
> [Backend integration](#backend-integration).

## Pages (12)

| Page | Route | Rendering |
|------|-------|-----------|
| Home | `/` | Static |
| Products overview | `/products` | Static |
| Product detail ×4 | `/products/[slug]` | SSG (`pay`, `books`, `payroll`, `cards`) |
| About | `/about` | Static |
| Pricing | `/pricing` | Static |
| **Support home** | `/support` | SSR + client search |
| **Support category** | `/support/[category]` | SSR |
| **Support article** | `/support/articles/[slug]` | SSR (by slug) |
| Terms, Privacy, Refund, Security, Careers, Contact | `/terms` … | Static |

Platforms is a header dropdown of external links (App Store / Google Play /
Web Login), per the brief.

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Server Components + SSG/ISR/SSR · native `fetch`.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — works without it
npm run dev                  # http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

Deploy to Vercel: import the GitHub repo, or run `vercel --prod`.

## Backend integration

The Support section consumes a small REST contract:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/categories` | List support categories |
| GET | `/articles?category=&q=` | List / filter / search articles |
| GET | `/articles/{slug}` | Single article by slug |

All calls go through `src/lib/api.ts`, which reads:

- `SUPPORT_API_URL` — base URL of the provided backend
- `SUPPORT_API_KEY` — optional bearer token (sent as `Authorization`)

When `SUPPORT_API_URL` is unset, the app uses the bundled mock handlers in
`src/app/api/support/*` (backed by `src/lib/support-data.ts`). To switch to the
real backend, set `SUPPORT_API_URL` in `.env.local` / Vercel env — done.

Server pages fetch with `next: { revalidate: 300 }` (ISR) for SEO + freshness;
the search box (`src/components/support-search.tsx`) fetches client-side with
debounce and full loading / empty / error handling.

## Structure

```
src/
├─ app/
│  ├─ page.tsx                       # home
│  ├─ products/ , about/ , pricing/  # marketing pages
│  ├─ support/                       # dynamic: home, [category], articles/[slug]
│  ├─ terms|privacy|refund|security|careers|contact/
│  └─ api/support/                   # mock backend (stand-in for provided API)
├─ components/                       # navbar, footer, search, legal, etc.
└─ lib/                              # api client, products, support data, types
```
