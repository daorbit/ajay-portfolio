import Link from "next/link";
import { CONTACT_HREF, NAV_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/data/profile";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-nav backdrop-blur-xl backdrop-saturate-[1.8]">
      <nav className="wide-width flex h-nav items-center justify-between" aria-label="Primary">
        <Link href="/" className="type-body font-semibold">
          {PROFILE.name}
        </Link>
        <div className="flex items-center gap-1 md:gap-6">
          <ul className="flex items-center gap-1 md:gap-6">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="type-micro flex items-center gap-1.5 rounded-full p-2 text-label/80 transition-colors duration-300 ease-apple hover:text-label md:p-0"
                >
                  <Icon className="size-4 md:hidden" aria-hidden />
                  <span className="sr-only md:not-sr-only">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href={CONTACT_HREF} size="sm">
            Contact
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
