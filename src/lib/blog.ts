import { BLOG_GROUP, BLOG_PATH, RELATED_POST_LIMIT, WORDS_PER_MINUTE } from "@/constants/cms";
import { PROFILE } from "@/data/profile";
import { getCmsPage, listCmsPages } from "@/services/cms";
import type { CmsPage, Post, PostMeta } from "@/types/blog";
import { toPlainText, withHeadingIds } from "@/lib/blogHeadings";

const SUMMARY_FIELDS: (keyof CmsPage)[] = [
  "title",
  "slug",
  "description",
  "tags",
  "author",
  "publishedAt",
  "updatedAt",
  "heroImage",
  "thumbnailImage",
  "seo",
];

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

function toReadingMinutes(html: string) {
  const words = toPlainText(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toMeta(page: CmsPage): PostMeta {
  return {
    slug: page.slug,
    title: page.title,
    description: page.description ?? "",
    date: page.publishedAt ?? page.updatedAt,
    updated: page.updatedAt,
    tags: page.tags ?? [],
    author: page.author?.name || PROFILE.name,
    image: page.thumbnailImage?.url ? page.thumbnailImage : (page.heroImage ?? { url: "", alt: "" }),
    noIndex: page.seo?.noIndex ?? false,
  };
}

export function postHref(slug: string) {
  return `${BLOG_PATH}/${slug}`;
}

export function formatPostDate(iso: string) {
  return DATE_FORMAT.format(new Date(iso));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const pages = await listCmsPages({ group: BLOG_GROUP, fields: SUMMARY_FIELDS });
  return pages.map(toMeta).filter((post) => !post.noIndex);
}

export async function getPost(slug: string): Promise<Post | null> {
  const page = await getCmsPage(slug);
  if (!page || page.group !== BLOG_GROUP) return null;

  const { html, headings } = withHeadingIds(page.content ?? "");
  const meta = toMeta(page);
  return {
    ...meta,
    image: page.heroImage?.url ? page.heroImage : meta.image,
    html,
    headings,
    readingMinutes: page.readingMinutes || toReadingMinutes(html),
  };
}

export async function getRelatedPosts(post: PostMeta): Promise<PostMeta[]> {
  const others = (await getAllPosts()).filter(({ slug }) => slug !== post.slug);
  return others
    .map((other) => ({ other, score: other.tags.filter((tag) => post.tags.includes(tag)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, RELATED_POST_LIMIT)
    .map(({ other }) => other);
}
