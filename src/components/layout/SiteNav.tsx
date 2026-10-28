"use client";

import { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteMenu from "@/components/layout/SiteMenu";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SiteHeader onOpenMenu={() => setOpen(true)} />
      <SiteMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
