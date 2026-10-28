import { siGithub } from "simple-icons";
import { PROFILE } from "@/data/profile";
import { GITHUB_URL } from "@/constants/github";
import Avatar from "@/components/layout/Avatar";
import SidebarNav from "@/components/layout/SidebarNav";
import SearchTrigger from "@/components/command/SearchTrigger";
import BrandLogo from "@/components/ui/BrandLogo";

type SidebarContentProps = {
  layoutId: string;
  onNavigate?: () => void;
};

export default function SidebarContent({ layoutId, onNavigate }: SidebarContentProps) {
  return (
    <div className="isolate flex h-full flex-col gap-8 overflow-y-auto p-6">
      <div>
        <Avatar />
        <p className="type-subhead mt-5">{PROFILE.name}</p>
        <p className="type-caption mt-1 text-label-secondary">{PROFILE.role}</p>
        <a
          href={`${GITHUB_URL}/${PROFILE.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="type-caption mt-3 inline-flex items-center gap-2 text-label-tertiary transition-colors duration-300 ease-apple hover:text-label"
        >
          <BrandLogo logo={siGithub} className="size-3.5" />@{PROFILE.github}
        </a>
      </div>
      <SearchTrigger onOpen={onNavigate} />
      <SidebarNav layoutId={layoutId} onNavigate={onNavigate} />
      <div className="mt-auto border-t border-hairline pt-6">
        <p className="type-micro text-label-tertiary">Say hello</p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="type-caption mt-1 block break-all text-link underline-offset-4 hover:underline"
        >
          {PROFILE.email}
        </a>
      </div>
    </div>
  );
}
