export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: { title: string; body: string }[];
  highlights: string[];
}

export const products: Product[] = [
  {
    slug: "pay",
    name: "Lumen Pay",
    tagline: "Accept payments anywhere",
    description:
      "A unified payments platform for cards, wallets, and bank transfers — with instant settlement and developer-first APIs.",
    icon: "💳",
    features: [
      { title: "Global methods", body: "Cards, Apple Pay, Google Pay, and local bank rails in one integration." },
      { title: "Instant settlement", body: "Funds in your account same day, with transparent fees." },
      { title: "Fraud protection", body: "Adaptive risk scoring blocks fraud without hurting conversion." },
    ],
    highlights: ["99.99% uptime", "PCI-DSS Level 1", "135+ currencies"],
  },
  {
    slug: "books",
    name: "Lumen Books",
    tagline: "Accounting on autopilot",
    description:
      "Automated bookkeeping that reconciles transactions, tracks expenses, and produces audit-ready reports in real time.",
    icon: "📊",
    features: [
      { title: "Auto-reconcile", body: "Bank feeds matched to invoices automatically every night." },
      { title: "Live reports", body: "P&L, balance sheet, and cash flow updated to the minute." },
      { title: "Tax-ready", body: "Export filings your accountant will actually thank you for." },
    ],
    highlights: ["Real-time ledger", "Multi-entity", "Accountant access"],
  },
  {
    slug: "payroll",
    name: "Lumen Payroll",
    tagline: "Pay your team, effortlessly",
    description:
      "Run compliant payroll in minutes across regions, with automatic tax calculations and self-serve employee profiles.",
    icon: "🧾",
    features: [
      { title: "One-click runs", body: "Approve and pay the whole team in a single click." },
      { title: "Compliance built-in", body: "Local tax and contribution rules kept up to date for you." },
      { title: "Employee portal", body: "Payslips, leave, and documents in a self-serve hub." },
    ],
    highlights: ["Same-day pay", "Auto tax filing", "Contractor support"],
  },
  {
    slug: "cards",
    name: "Lumen Cards",
    tagline: "Corporate cards with controls",
    description:
      "Issue physical and virtual cards with per-card limits, real-time spend tracking, and automatic receipt capture.",
    icon: "🪪",
    features: [
      { title: "Smart limits", body: "Set budgets per team, project, or merchant category." },
      { title: "Real-time spend", body: "See every transaction the second it happens." },
      { title: "Receipt capture", body: "Receipts matched to transactions automatically." },
    ],
    highlights: ["Unlimited virtual cards", "Cashback", "Spend analytics"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
