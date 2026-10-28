import type { Highlight, Profile } from "@/types/portfolio";

export const PROFILE: Profile = {
  name: "Ajay Goswami",
  initials: "AG",
  role: "Front-End Developer",
  email: "goswamiajay526@gmail.com",
  github: "ajjjugoswami",
  githubAccounts: ["ajjjugoswami", "daorbit"],
  summary:
    "Front-end developer with three years of experience designing and building fast, responsive, SEO-optimized web applications with React, Next.js and TypeScript.",
};

export const HIGHLIGHTS: Highlight[] = [
  { value: 3, label: "Years building production web apps" },
  { value: 12, label: "Products and websites shipped" },
  { value: 2, label: "Open-source React packages on npm" },
];
