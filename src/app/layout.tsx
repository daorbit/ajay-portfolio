import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import QuantalogTracker from "@/components/analytics/QuantalogTracker";
import { PROFILE } from "@/data/profile";
import "da-frame-set/styles.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PROFILE.name} · ${PROFILE.role}`,
  description: PROFILE.summary,
};

export const viewport: Viewport = {
  themeColor: "#030407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <QuantalogTracker />
      </body>
    </html>
  );
}
