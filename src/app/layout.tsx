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
  metadataBase: new URL("https://ollcf-abm.vercel.app"),
  title: {
    default: "ABM Strand — Our Lady of Lourdes College Foundation",
    template: "%s | OLLCF ABM Strand",
  },
  description:
    "Explore Accountancy, Business, and Management (ABM) at Our Lady of Lourdes College Foundation (OLLCF) Senior High School in Daet, Camarines Norte. Discover subjects, college pathways, AYBL leadership, events, and your career match.",
  icons: {
    icon: "/images/Ourladyoflourdes/logo.png",
    apple: "/images/Ourladyoflourdes/logo.png",
  },
  openGraph: {
    title: "ABM Strand — Our Lady of Lourdes College Foundation",
    description:
      "Here at OLLCF, Your Future is our Concern. Discover the Senior High School ABM Strand and the Association of Young Business Leaders (AYBL) in Daet, Camarines Norte.",
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
