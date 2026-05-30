import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lumen-web.example.com"),
  title: {
    default: "Lumen — The financial toolkit for modern businesses",
    template: "%s · Lumen",
  },
  description:
    "Payments, accounting, payroll, and corporate cards in one platform. Lumen helps businesses move money and grow with confidence.",
  openGraph: { type: "website", title: "Lumen", description: "The financial toolkit for modern businesses." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
