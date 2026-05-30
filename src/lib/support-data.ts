// Stand-in for the client's "provided backend". The route handlers in
// src/app/api/support/* serve this data so the frontend integrates against a
// real HTTP API exactly as it will in production.

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string; // category slug
  updatedAt: string;
}

export const categories: Category[] = [
  { slug: "getting-started", name: "Getting Started", description: "Set up your account and make your first transaction.", icon: "🚀" },
  { slug: "payments", name: "Payments", description: "Accepting, refunding, and reconciling payments.", icon: "💳" },
  { slug: "billing", name: "Account & Billing", description: "Plans, invoices, and managing your subscription.", icon: "🧾" },
  { slug: "security", name: "Security", description: "Keep your account and customers safe.", icon: "🔒" },
  { slug: "integrations", name: "Integrations", description: "Connect Lumen with the tools you already use.", icon: "🔌" },
];

export const articles: Article[] = [
  { slug: "create-your-account", title: "Create your Lumen account", category: "getting-started", updatedAt: "2026-05-20", excerpt: "Sign up, verify your business, and invite your team in under five minutes.", body: "Head to the sign-up page and enter your business email. After verifying your email, you'll be asked for basic business details used for compliance checks. Once verified, invite teammates from Settings → Team and assign roles. Most accounts are fully activated within minutes." },
  { slug: "first-payment", title: "Take your first payment", category: "getting-started", updatedAt: "2026-05-18", excerpt: "Create a payment link or embed checkout to start collecting money today.", body: "The fastest way to get paid is a Payment Link: open Payments → Links, set an amount, and share the URL. For your website, install the checkout SDK and call createCheckout() with your public key. Test mode lets you simulate every card outcome before going live." },
  { slug: "refund-a-payment", title: "How to refund a payment", category: "payments", updatedAt: "2026-05-22", excerpt: "Issue full or partial refunds and track their status.", body: "Open the transaction in Payments, click Refund, and choose full or partial. Refunds typically reach the customer in 5–10 business days depending on their bank. You can also automate refunds via the API using the /refunds endpoint." },
  { slug: "failed-payments", title: "Understanding failed payments", category: "payments", updatedAt: "2026-05-15", excerpt: "Common decline reasons and how to recover them.", body: "Declines fall into three buckets: insufficient funds, fraud blocks, and expired or invalid cards. Lumen automatically retries soft declines on an optimized schedule. For hard declines, prompt the customer to update their payment method via the Customer Portal." },
  { slug: "change-your-plan", title: "Change or cancel your plan", category: "billing", updatedAt: "2026-05-10", excerpt: "Upgrade, downgrade, or cancel anytime from billing settings.", body: "Go to Settings → Billing → Plan. Upgrades take effect immediately and are prorated. Downgrades apply at the end of the current cycle. Cancelling keeps your account active until the period ends; your data is retained for 90 days afterward." },
  { slug: "download-invoices", title: "Download your invoices", category: "billing", updatedAt: "2026-05-08", excerpt: "Find, download, and forward your Lumen invoices.", body: "All invoices live under Settings → Billing → Invoices. Each can be downloaded as a PDF or forwarded to your accounting inbox. Add a billing email under Billing Contacts to receive every invoice automatically." },
  { slug: "enable-2fa", title: "Enable two-factor authentication", category: "security", updatedAt: "2026-05-25", excerpt: "Add an extra layer of protection with 2FA.", body: "Open Settings → Security and choose Authenticator app or SMS. We strongly recommend an authenticator app. Admins can enforce 2FA for the whole organization under Security → Policies, blocking sign-ins until members enroll." },
  { slug: "data-security", title: "How Lumen protects your data", category: "security", updatedAt: "2026-05-12", excerpt: "Encryption, compliance, and our security posture.", body: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Lumen is PCI-DSS Level 1 and SOC 2 Type II certified. Card data never touches your servers — it is tokenized by our vault, dramatically reducing your compliance scope." },
  { slug: "connect-quickbooks", title: "Connect QuickBooks", category: "integrations", updatedAt: "2026-05-19", excerpt: "Sync payouts and fees to your accounting software.", body: "From Integrations, select QuickBooks and authorize the connection. Choose how payouts, fees, and refunds map to your chart of accounts. Once connected, every settlement syncs automatically each morning." },
  { slug: "webhooks-setup", title: "Set up webhooks", category: "integrations", updatedAt: "2026-05-21", excerpt: "Receive real-time events in your own systems.", body: "Create an endpoint under Developers → Webhooks and subscribe to the events you care about, such as payment.succeeded or payout.paid. Verify the signature header on every request using your signing secret to ensure authenticity." },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesByCategory = (slug: string) => articles.filter((a) => a.category === slug);
