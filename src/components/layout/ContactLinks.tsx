import { ArrowUpRight } from "lucide-react";
import { CONTACT_LINKS, type ContactLink } from "@/data/social";
import { cn } from "@/lib/cn";

type ContactLinksProps = {
  links?: ContactLink[];
  inline?: boolean;
  className?: string;
};

export default function ContactLinks({ links = CONTACT_LINKS, inline = false, className }: ContactLinksProps) {
  return (
    <ul className={cn("flex", inline ? "flex-wrap gap-x-6 gap-y-1" : "flex-col", className)}>
      {links.map(({ label, href, external }) => (
        <li key={href}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="type-label inline-flex items-center gap-1 py-1 break-all transition-opacity duration-300 hover:opacity-60"
          >
            {label}
            {external && (
              <>
                <ArrowUpRight className="size-3 shrink-0" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
