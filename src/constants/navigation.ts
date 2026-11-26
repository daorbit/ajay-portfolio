export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HEADER_LINKS = NAV_LINKS.filter(({ href }) => href !== "/");

export const HEADER_LINKS_START = HEADER_LINKS.slice(0, 3);

export const HEADER_LINKS_END = HEADER_LINKS.slice(3);

export function isActivePath(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
