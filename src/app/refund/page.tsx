import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Refund & Cancellation Policy", description: "Our refund and cancellation terms." };

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      updated="May 1, 2026"
      sections={[
        { heading: "1. Subscription cancellations", body: "You can cancel your subscription at any time from Settings → Billing. Cancellation takes effect at the end of your current billing cycle, and you retain access until then." },
        { heading: "2. Refund eligibility", body: "We offer a 14-day money-back guarantee on first-time paid plan purchases. Contact support within 14 days of your initial charge to request a full refund." },
        { heading: "3. Processing time", body: "Approved refunds are processed to your original payment method within 5–10 business days, depending on your bank or card issuer." },
        { heading: "4. Non-refundable items", body: "Transaction processing fees and custom enterprise services are non-refundable once rendered." },
        { heading: "5. How to request", body: "Email billing@lumen.example.com or use the contact form with your account email and reason for the request." },
      ]}
    />
  );
}
