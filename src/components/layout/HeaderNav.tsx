"use client";

import Link from "next/link";
import { isActivePath, type NavLink } from "@/constants/navigation";
import { cn } from "@/lib/cn";
import WithPathname from "@/components/layout/WithPathname";

type HeaderNavProps = {
  links: NavLink[];
  label: string;
};

function HeaderNavList({ links, pathname }: { links: NavLink[]; pathname: string | null }) {
  return (
    <ul className="flex items-center gap-6 lg:gap-9">
      {links.map(({ label, href }) => {
        const active = isActivePath(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group type-label relative block py-2 whitespace-nowrap transition-colors duration-300",
                active ? "text-label" : "text-label-secondary hover:text-label",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent transition-transform duration-300",
                  !active && "scale-x-0 group-hover:scale-x-100",
                )}
              />
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function HeaderNav({ links, label }: HeaderNavProps) {
  return (
    <nav aria-label={label}>
      <WithPathname render={(pathname) => <HeaderNavList links={links} pathname={pathname} />} />
    </nav>
  );
}
