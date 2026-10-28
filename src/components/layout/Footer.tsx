import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="wide-width type-micro flex flex-col gap-2 py-6 text-label-tertiary md:flex-row md:justify-between">
        <p>Designed and built by {PROFILE.name}.</p>
        <p>Next.js · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}
