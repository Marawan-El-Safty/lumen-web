import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions", description: "The terms governing your use of Lumen." };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="May 1, 2026"
      sections={[
        { heading: "1. Acceptance of terms", body: "By accessing or using Lumen, you agree to be bound by these Terms. If you do not agree, you may not use the service. These terms apply to all visitors, users, and others who access the platform." },
        { heading: "2. Use of the service", body: "You agree to use Lumen only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account." },
        { heading: "3. Payments and fees", body: "Fees for paid plans are billed in advance and are non-refundable except as described in our Refund Policy. We may change fees with at least 30 days’ notice." },
        { heading: "4. Termination", body: "We may suspend or terminate your access if you breach these Terms. You may cancel at any time from your billing settings." },
        { heading: "5. Limitation of liability", body: "To the maximum extent permitted by law, Lumen shall not be liable for indirect, incidental, or consequential damages arising from your use of the service." },
      ]}
    />
  );
}
