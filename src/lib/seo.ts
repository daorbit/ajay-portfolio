import type { Metadata } from "next";
import { BLOG_FEED_PATH } from "@/constants/cms";
import { OG_IMAGE_PATH, OG_IMAGE_SIZE } from "@/constants/og";
import { SITE_LOCALE, SITE_URL } from "@/constants/site";
import { PROFILE } from "@/data/profile";

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
};

const DEFAULT_SHARE_IMAGE = {
  url: OG_IMAGE_PATH,
  ...OG_IMAGE_SIZE,
  alt: `${PROFILE.name}, ${PROFILE.role}`,
};

export const OPEN_GRAPH_BASE = {
  siteName: PROFILE.name,
  locale: SITE_LOCALE,
  type: "website",
  images: [DEFAULT_SHARE_IMAGE],
} satisfies Metadata["openGraph"];

export const TWITTER_BASE = {
  card: "summary_large_image",
  images: [DEFAULT_SHARE_IMAGE],
} satisfies Metadata["twitter"];

export const FEED_ALTERNATES = {
  "application/rss+xml": [{ url: BLOG_FEED_PATH, title: `${PROFILE.name} · Blogs` }],
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function socialTitle(title?: string) {
  return title ? `${title} · ${PROFILE.name}` : `${PROFILE.name} · ${PROFILE.role}`;
}

export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const shareTitle = socialTitle(title);
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path, types: FEED_ALTERNATES },
    openGraph: { ...OPEN_GRAPH_BASE, title: shareTitle, description, url: path },
    twitter: { ...TWITTER_BASE, title: shareTitle, description },
  };
}
