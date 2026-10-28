import { BriefcaseBusiness, Layers, User, type LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work", icon: BriefcaseBusiness },
  { label: "Expertise", href: "/#expertise", icon: Layers },
  { label: "About", href: "/#about", icon: User },
];

export const CONTACT_HREF = "/#contact";
