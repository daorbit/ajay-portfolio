"use client";

import Link from "next/link";
import { NAV_LINKS, isActivePath } from "@/constants/navigation";
import { padIndex } from "@/lib/format";
import WithPathname from "@/components/layout/WithPathname";

type MenuLinksProps = {
  onNavigate: () => void;
};

type MenuLinkListProps = MenuLinksProps & {
  pathname: string | null;
};

function MenuLinkList({ pathname, onNavigate }: MenuLinkListProps) {
  return (
    <ul className="w-full">
      {NAV_LINKS.map(({ label, href }, index) => {
        const active = isActivePath(pathname, href);
        return (
          <li key={href} className="border-b border-hairline first:border-t">
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className="flex items-center gap-5 py-3"
            >
              <span className="type-label w-6 shrink-0 text-label-tertiary">{padIndex(index + 1)}</span>
              <span className="type-poster-md">{label}</span>
              {active && <span aria-hidden className="ml-auto size-2.5 rounded-full bg-accent" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function MenuLinks({ onNavigate }: MenuLinksProps) {
  return <WithPathname render={(pathname) => <MenuLinkList pathname={pathname} onNavigate={onNavigate} />} />;
}
