import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ajay
        </Link>
        <ul className="flex items-center gap-1 sm:gap-4">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
