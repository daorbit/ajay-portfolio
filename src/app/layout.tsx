import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CommandMenu from "@/components/command/CommandMenu";
import CommandMenuProvider from "@/components/command/CommandMenuProvider";
import QuantalogTracker from "@/components/analytics/QuantalogTracker";
import { PROFILE } from "@/data/profile";
import "da-frame-set/styles.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} · ${PROFILE.role}`,
    template: `%s · ${PROFILE.name}`,
  },
  description: PROFILE.summary,
};

export const viewport: Viewport = {
  themeColor: "#030407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full`}>
      <body className="min-h-full">
        <CommandMenuProvider>
          <ScrollProgress />
          <Sidebar />
          <MobileNav />
          <div className="flex min-h-dvh flex-col lg:pl-72">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CommandMenu />
        </CommandMenuProvider>
        <QuantalogTracker />
      </body>
    </html>
  );
}
