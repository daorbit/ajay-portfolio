import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/data/profile";
import SocialLinks from "@/components/layout/SocialLinks";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Wordmark from "@/components/ui/Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="page-width py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Wordmark className="type-poster-md" />
            <p className="type-caption mt-5 max-w-xs text-label-secondary">
              {PROFILE.role} building fast, accessible products with React and Next.js.
            </p>
          </div>
          <div>
            <p className="type-label text-label-tertiary">Pages</p>
            <ul className="mt-3 flex flex-col">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="type-label inline-block py-1 transition-opacity duration-300 hover:opacity-60">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="type-label text-label-tertiary">Elsewhere</p>
            <SocialLinks className="mt-3 flex-col" />
            <a
              href={`mailto:${PROFILE.email}`}
              className="type-label inline-block py-1 break-all transition-opacity duration-300 hover:opacity-60"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>
        <div className="type-label mt-16 flex flex-col gap-4 border-t border-hairline pt-6 text-label-tertiary md:flex-row md:items-center md:justify-between">
          <p>Designed &amp; built by {PROFILE.name}</p>
          <ThemeToggle />
          <a href="#" className="inline-flex items-center gap-1.5 text-label transition-opacity duration-300 hover:opacity-60">
            Back to top
            <ArrowUp className="size-3" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
