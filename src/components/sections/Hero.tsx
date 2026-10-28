import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-32">
      <p className="text-sm font-medium text-foreground/60">Hi, I&apos;m Ajay</p>
      <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        I build fast, thoughtful web experiences.
      </h1>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/#projects"
          className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowRight className="size-4" aria-hidden />
        </Link>
        <Link
          href="/#contact"
          className="flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          <Mail className="size-4" aria-hidden />
          Get in touch
        </Link>
      </div>
    </section>
  );
}
