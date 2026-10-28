import { PROFILE, STACK } from "@/data/profile";
import FadeIn from "@/components/motion/FadeIn";
import StatusDot from "@/components/ui/StatusDot";

export default function HeroMeta() {
  return (
    <FadeIn className="type-label grid grid-cols-2 gap-6 border-b border-hairline pb-5 text-label-tertiary md:grid-cols-3">
      <p>
        {PROFILE.name}
        <br />
        <span className="text-label">{PROFILE.role}</span>
      </p>
      <p className="hidden self-center text-center md:block">
        <StatusDot />
      </p>
      <p className="text-right">
        {STACK.slice(0, -1).join(" · ")}
        <br />
        <span className="text-label">{STACK.at(-1)}</span>
      </p>
    </FadeIn>
  );
}
