"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

type SidebarNavProps = {
  layoutId: string;
  onNavigate?: () => void;
};

export default function SidebarNav({ layoutId, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "type-body relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 ease-apple",
                  active ? "text-label" : "text-label-secondary hover:text-label",
                )}
              >
                {active && (
                  <motion.span
                    layoutId={layoutId}
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 -z-10 rounded-xl border border-hairline bg-surface"
                  />
                )}
                <Icon className={cn("size-4", active && "text-link")} aria-hidden />
                <span className="flex-1">{label}</span>
                {active && <ChevronRight className="size-4 text-label-tertiary" aria-hidden />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
