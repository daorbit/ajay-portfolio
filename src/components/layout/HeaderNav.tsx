"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, isActivePath } from "@/constants/navigation";
import { cn } from "@/lib/cn";

const HEADER_LINKS = NAV_LINKS.filter(({ href }) => href !== "/");

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-6 lg:gap-9">
        {HEADER_LINKS.map(({ label, href }) => {
          const active = isActivePath(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "type-label relative block py-2 whitespace-nowrap transition-colors duration-300",
                  active ? "text-label" : "text-label-secondary hover:text-label",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-1/2 -left-3 size-1.5 -translate-y-1/2 rounded-full bg-accent transition-transform duration-300",
                    !active && "scale-0",
                  )}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
