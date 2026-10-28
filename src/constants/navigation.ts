import { FolderCode, House, Mail, User, type LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/#about", icon: User },
  { label: "Projects", href: "/#projects", icon: FolderCode },
  { label: "Contact", href: "/#contact", icon: Mail },
];
