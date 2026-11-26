import type { Highlight, Profile } from "@/types/portfolio";

export const PROFILE: Profile = {
  name: "Ajay Goswami",
  initials: "AG",
  role: "Front-End Developer",
  email: "goswamiajay526@gmail.com",
  phone: "+91 70820 72347",
  linkedin: "https://www.linkedin.com/in/ajay-goswami-7200bb242/",
  github: "ajjjugoswami",
  githubAccounts: ["ajjjugoswami", "daorbit"],
  photo: "https://avatars.githubusercontent.com/u/114179076",
  summary:
    "Front-end developer with three years of experience designing and building fast, responsive, SEO-optimized web applications with React, Next.js and TypeScript.",
};

export const AVAILABILITY = "Open to new roles";

export const HERO_TAGLINE = "Interfaces built with intent & craft.";

export const STACK = ["React", "Next.js", "TypeScript"];

export const HIGHLIGHTS: Highlight[] = [
  { value: 3, label: "Years building production web apps" },
  { value: 12, label: "Products and websites shipped" },
  { value: 2, label: "Open-source React packages on npm" },
];
