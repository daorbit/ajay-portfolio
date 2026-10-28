"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { useCommandMenu } from "@/hooks/useCommandMenu";
import { useModalDialog } from "@/hooks/useModalDialog";
import Avatar from "@/components/layout/Avatar";
import SidebarContent from "@/components/layout/SidebarContent";

const ICON_BUTTON =
  "flex size-10 items-center justify-center rounded-full text-label-secondary transition-colors duration-300 ease-apple hover:bg-surface hover:text-label";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const ref = useModalDialog(open);
  const { setOpen: setSearchOpen } = useCommandMenu();

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) setOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-nav backdrop-blur-xl backdrop-saturate-[1.8] lg:hidden">
        <div className="flex h-nav items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <Avatar size="sm" />
            <span className="type-body font-semibold">{PROFILE.name}</span>
          </Link>
          <div className="flex items-center">
            <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)} className={ICON_BUTTON}>
              <Search className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={ICON_BUTTON}
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={ref}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        onClick={handleBackdropClick}
        className="m-0 h-dvh max-h-dvh w-80 max-w-[85vw] border-r border-hairline bg-canvas-raised p-0 text-label backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-sheet-in"
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute top-4 right-4 z-10 ${ICON_BUTTON}`}
        >
          <X className="size-5" aria-hidden />
        </button>
        <SidebarContent layoutId="drawer-active" onNavigate={() => setOpen(false)} />
      </dialog>
    </>
  );
}
