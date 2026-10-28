import { ArrowUpRight, Mail } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { GITHUB_URL } from "@/constants/github";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import type { CommandItem } from "@/types/command";

export const COMMAND_ITEMS: CommandItem[] = [
  ...NAV_LINKS.map(({ label, href, icon }) => ({
    id: `page-${href}`,
    label,
    group: "Pages" as const,
    href,
    icon,
  })),
  ...PROJECTS.flatMap(({ name, category, url }) =>
    url
      ? [{ id: `project-${name}`, label: name, hint: category, group: "Projects" as const, href: url, icon: ArrowUpRight, external: true }]
      : [],
  ),
  {
    id: "contact-email",
    label: "Send an email",
    hint: PROFILE.email,
    group: "Contact",
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    external: true,
  },
  {
    id: "contact-github",
    label: "GitHub",
    hint: `@${PROFILE.github}`,
    group: "Contact",
    href: `${GITHUB_URL}/${PROFILE.github}`,
    icon: ArrowUpRight,
    external: true,
  },
];

export function filterCommandItems(query: string) {
  const term = query.trim().toLowerCase();
  if (!term) return COMMAND_ITEMS;
  return COMMAND_ITEMS.filter((item) => `${item.label} ${item.hint ?? ""} ${item.group}`.toLowerCase().includes(term));
}
