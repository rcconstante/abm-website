import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://abm-strand-discover-2026.merrymars67.chatgpt.site",
  ),
  title: {
    default: "ABM Strand — Your future starts here",
    template: "%s | ABM Strand",
  },
  description:
    "Explore Accountancy, Business, and Management. Discover subjects, college pathways, free learning resources, and your career match.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "ABM Strand — Your future starts here",
    description:
      "Big ideas. Real-world skills. Discover your future in business.",
    images: [{ url: "/images/hero.webp", width: 1536, height: 1024 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
