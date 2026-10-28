import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex gap-x-6", className)}>
      {SOCIAL_LINKS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label inline-flex items-center gap-1 py-1 transition-opacity duration-300 hover:opacity-60"
          >
            {label}
            <ArrowUpRight className="size-3" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
