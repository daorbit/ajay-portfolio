import { FolderKanban, House, LayoutDashboard, Mail, User, type LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: House },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];
