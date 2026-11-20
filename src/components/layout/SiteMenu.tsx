"use client";

import { useModalDialog } from "@/hooks/useModalDialog";
import ContactLinks from "@/components/layout/ContactLinks";
import MenuLinks from "@/components/layout/MenuLinks";
import MenuToggle from "@/components/layout/MenuToggle";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LogoMark from "@/components/ui/LogoMark";

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
          <LogoMark onNavigate={onClose} />
          <MenuToggle open onClick={onClose} />
        </div>
        <nav aria-label="Primary" className="flex flex-1 items-center py-10">
          <MenuLinks onNavigate={onClose} />
        </nav>
        <div className="grid grid-cols-1 gap-8 border-t border-hairline py-8 md:grid-cols-2">
          <div>
            <p className="type-label text-label-tertiary">Say hello</p>
            <ContactLinks className="mt-3" />
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
