import type { Project, ProjectGroup } from "@/types/portfolio";

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: "products",
    title: "Products",
    description: "SaaS products used in production.",
  },
  {
    id: "tools",
    title: "Developer tools",
    description: "Open-source React packages on npm.",
  },
  {
    id: "websites",
    title: "Websites",
    description: "Fast, search-friendly sites for businesses and brands.",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Quantalog",
    category: "AI SaaS platform",
    description:
      "Built the form-builder experience and maintain the shared UI component library behind the platform.",
    tech: ["React", "TypeScript", "Redux"],
    group: "products",
    layout: "featured",
    url: "https://quantalog.daorbit.in",
    image: "/projects/quantalog.webp",
  },
  {
    name: "QR Studio",
    category: "SaaS",
    description:
      "Branded QR codes with custom colors and logos, redirectable after printing, with scan analytics, passwords, expiry and scan limits.",
    group: "products",
    layout: "featured",
    url: "https://qr.daorbit.in",
    image: "/projects/qr-studio.webp",
  },
  {
    name: "Da Text Editor",
    category: "npm package",
    description: "A rich-text editor component for React, published on npm as da-text-editor.",
    tech: ["React", "TypeScript"],
    group: "tools",
    layout: "standard",
    url: "https://da-text-editor.daorbit.in",
    image: "/projects/da-text-editor.webp",
  },
  {
    name: "Da Frame Set",
    category: "npm package",
    description: "Device frames for React: laptops, phones, tablets, monitors and browser chrome, drawn in CSS.",
    tech: ["React", "TypeScript"],
    group: "tools",
    layout: "standard",
    url: "https://da-frame-set.daorbit.in",
    image: "/projects/da-frame-set.webp",
  },
  {
    name: "Lots of Trips",
    category: "Travel",
    description:
      "Trip planning for 13 Himalayan destinations, with signature journeys, a live temperature map and a seasonal when-to-go picker.",
    tech: ["Next.js"],
    group: "websites",
    layout: "standard",
    url: "https://www.lotsoftrips.in",
    image: "/projects/lots-of-trips.webp",
  },
  {
    name: "Future Music Academy",
    category: "Education",
    description:
      "A music school site with trial-class booking, a course-finder quiz and in-browser practice tools: tanpura, metronome and sargam keyboard.",
    tech: ["Next.js"],
    group: "websites",
    layout: "standard",
    url: "https://chika-music.vercel.app",
    image: "/projects/future-music.webp",
  },
];

export const COMPANY_PROJECTS: string[] = [
  "CME Revamp",
  "FAB Builder",
  "FAB Analytics",
  "Page Pilot",
  "FAB Website",
  "Code Rower",
  "Dream It",
  "Inventory Lite",
];
