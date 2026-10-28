import { BLOG_DESCRIPTION, BLOG_PATH } from "@/constants/cms";
import { SITE_URL } from "@/constants/site";
import { PROFILE, STACK } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social";
import { absoluteUrl } from "@/lib/seo";
import { postHref } from "@/lib/blog";
import type { Post, PostMeta } from "@/types/blog";

type Crumb = {
  name: string;
  path: string;
};

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    description: PROFILE.summary,
    url: SITE_URL,
    image: PROFILE.photo,
    email: `mailto:${PROFILE.email}`,
    sameAs: SOCIAL_LINKS.map(({ href }) => href),
    knowsAbout: [...STACK, "Front-end development", "Web performance", "Accessibility", "SEO"],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: PROFILE.name,
    description: PROFILE.summary,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export function profilePageSchema() {
  return {
    "@type": "ProfilePage",
    url: absoluteUrl("/about"),
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function projectListSchema() {
  return {
    "@type": "ItemList",
    name: `Projects by ${PROFILE.name}`,
    itemListElement: PROJECTS.map(({ name, description, url, image }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name,
        description,
        url,
        image: absoluteUrl(image),
        creator: { "@id": PERSON_ID },
      },
    })),
  };
}

export function blogSchema(posts: PostMeta[]) {
  return {
    "@type": "Blog",
    "@id": `${absoluteUrl(BLOG_PATH)}#blog`,
    url: absoluteUrl(BLOG_PATH),
    name: `${PROFILE.name} · Blogs`,
    description: BLOG_DESCRIPTION,
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: absoluteUrl(postHref(post.slug)),
      datePublished: post.date,
      dateModified: post.updated,
      image: post.image.url || undefined,
    })),
  };
}

export function blogPostingSchema(post: Post) {
  const url = absoluteUrl(postHref(post.slug));
  return {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.updated,
    image: post.image.url || undefined,
    keywords: post.tags.join(", ") || undefined,
    timeRequired: `PT${post.readingMinutes}M`,
    inLanguage: "en",
    author: post.author === PROFILE.name ? { "@id": PERSON_ID } : { "@type": "Person", name: post.author },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": `${absoluteUrl(BLOG_PATH)}#blog` },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
