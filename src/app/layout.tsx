import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://westbridgeshs.edu.ph"),
  title: {
    default: "ABM Strand — Westbridge Senior High",
    template: "%s | ABM Strand",
  },
  description:
    "Explore Accountancy, Business, and Management at Westbridge Senior High. Discover subjects, college pathways, free learning resources, and your career match.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "ABM Strand — Westbridge Senior High",
    description:
      "Big ideas. Real-world skills. Discover your pathway in Accountancy, Business, and Management.",
    images: [{ url: "/images/hero.webp", width: 1536, height: 1024 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
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
