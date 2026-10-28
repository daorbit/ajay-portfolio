"use client";

import { PROFILE } from "@/data/profile";
import { useModalDialog } from "@/hooks/useModalDialog";
import MenuLinks from "@/components/layout/MenuLinks";
import MenuToggle from "@/components/layout/MenuToggle";
import SocialLinks from "@/components/layout/SocialLinks";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Wordmark from "@/components/ui/Wordmark";

type SiteMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function SiteMenu({ open, onClose }: SiteMenuProps) {
  const ref = useModalDialog(open);

  return (
    <dialog
      ref={ref}
      aria-label="Menu"
      onClose={onClose}
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-canvas p-0 text-label backdrop:bg-transparent open:animate-menu-in"
    >
      <div className="page-width flex min-h-full flex-col">
        <div className="flex h-nav shrink-0 items-center justify-between">
          <Wordmark onNavigate={onClose} />
          <MenuToggle open onClick={onClose} />
        </div>
        <nav aria-label="Primary" className="flex flex-1 items-center py-10">
          <MenuLinks onNavigate={onClose} />
        </nav>
        <div className="grid gap-8 border-t border-hairline py-8 md:grid-cols-3">
          <div>
            <p className="type-label text-label-tertiary">Elsewhere</p>
            <SocialLinks className="mt-3 flex-col" />
          </div>
          <div>
            <p className="type-label text-label-tertiary">Say hello</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="type-body mt-3 inline-block break-all underline-offset-4 hover:underline"
            >
              {PROFILE.email}
            </a>
          </div>
          <div className="md:text-right">
            <p className="type-label text-label-tertiary">Preferences</p>
            <ThemeToggle className="mt-3" />
          </div>
        </div>
      </div>
    </dialog>
  );
}
