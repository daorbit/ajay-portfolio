import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Instrument_Serif, Inter } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import QuantalogTracker from "@/components/analytics/QuantalogTracker";
import { SITE_KEYWORDS, SITE_URL } from "@/constants/site";
import { PROFILE } from "@/data/profile";
import { FEED_ALTERNATES, OPEN_GRAPH_BASE, TWITTER_BASE, socialTitle } from "@/lib/seo";
import { THEME_SCRIPT } from "@/lib/theme";
import "da-frame-set/styles.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const DEFAULT_TITLE = socialTitle();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${PROFILE.name}`,
  },
  description: PROFILE.summary,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  keywords: SITE_KEYWORDS,
  category: "technology",
  alternates: { types: FEED_ALTERNATES },
  openGraph: {
    ...OPEN_GRAPH_BASE,
    title: DEFAULT_TITLE,
    description: PROFILE.summary,
    url: "/",
  },
  twitter: {
    ...TWITTER_BASE,
    title: DEFAULT_TITLE,
    description: PROFILE.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2eee5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f140f" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${bebas.variable} ${instrument.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full">
        <SiteNav />
        <div className="flex min-h-dvh flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <QuantalogTracker />
      </body>
    </html>
  );
}
