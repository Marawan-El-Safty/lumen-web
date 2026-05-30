import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Lumen collects, uses, and protects your data." };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="May 1, 2026"
      sections={[
        { heading: "1. Information we collect", body: "We collect information you provide directly (such as account and business details), data generated through your use of the service, and information from third parties used for compliance and fraud prevention." },
        { heading: "2. How we use information", body: "We use your information to provide and improve the service, process transactions, comply with legal obligations, and communicate with you about your account." },
        { heading: "3. Data sharing", body: "We do not sell your personal data. We share information only with service providers under contract, and where required by law or to protect our users." },
        { heading: "4. Data security", body: "We protect your data with encryption in transit and at rest, strict access controls, and regular security audits. See our Security page for details." },
        { heading: "5. Your rights", body: "You may access, correct, export, or delete your personal data by contacting us. We respond to verified requests within 30 days." },
      ]}
    />
  );
}
