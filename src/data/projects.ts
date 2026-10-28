import type { Project, ProjectGroup } from "@/types/portfolio";

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: "products",
    title: "Products",
    description: "SaaS platforms and real-time applications used in production.",
  },
  {
    id: "tools",
    title: "Developer tools",
    description: "Open-source React packages and embeddable plugins.",
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
  },
  {
    name: "CME Revamp",
    category: "Trading simulator",
    description:
      "A real-time replica of CME Group's trading environment, with live pricing, order placement and market data.",
    tech: ["React", "TypeScript", "WebSockets"],
    group: "products",
    layout: "featured",
    url: "https://www.cmegroup.com/trading_tools/simulator",
  },
  {
    name: "QR Studio",
    category: "SaaS",
    description:
      "Branded QR codes with custom colors and logos, redirectable after printing, with scan analytics, passwords, expiry and scan limits.",
    group: "products",
    layout: "standard",
    url: "https://qr.daorbit.in",
  },
  {
    name: "FAB Builder",
    category: "Low-code platform",
    description: "Generates full-stack apps through a guided, step-by-step workflow.",
    tech: ["React", "TypeScript", "Ant Design"],
    group: "products",
    layout: "standard",
  },
  {
    name: "FAB Analytics",
    category: "Reporting",
    description: "Create, schedule and share custom analytics reports.",
    tech: ["React", "TypeScript", "Ant Design"],
    group: "products",
    layout: "standard",
    url: "https://analytics.fabbuilder.com",
  },
  {
    name: "Da Text Editor",
    category: "npm package",
    description: "A rich-text editor component for React, published on npm as da-text-editor.",
    tech: ["React", "TypeScript"],
    group: "tools",
    layout: "standard",
    url: "https://da-text-editor.daorbit.in",
  },
  {
    name: "Da Frame Set",
    category: "npm package",
    description: "Device frames for React: laptops, phones, tablets, monitors and browser chrome, drawn in CSS.",
    tech: ["React", "TypeScript"],
    group: "tools",
    layout: "standard",
    url: "https://da-frame-set.daorbit.in",
  },
  {
    name: "Page Pilot",
    category: "Plugin",
    description: "FAQs, product tours and dynamic pages through a single integration.",
    tech: ["React", "TypeScript", "Ant Design"],
    group: "tools",
    layout: "standard",
    url: "https://pagepilot.fabbuilder.com",
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
  },
  {
    name: "FAB Website, Code Rower, Dream It, Inventory Lite",
    category: "Marketing sites",
    description: "Product and marketing websites built for performance, responsive design and search visibility.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    group: "websites",
    layout: "standard",
  },
];
