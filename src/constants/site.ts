export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajy-portfolio.vercel.app").replace(/\/$/, "");

export const SITE_LOCALE = "en_US";

export const SITE_KEYWORDS = [
  "Ajay Goswami",
  "Front-End Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript",
  "UI Engineer",
  "Web Performance",
  "SEO",
  "Portfolio",
];

export const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/dashboard", priority: 0.5, changeFrequency: "daily" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
] as const;
