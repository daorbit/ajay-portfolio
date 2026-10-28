"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type RenderPathname = (pathname: string | null) => ReactNode;

type WithPathnameProps = {
  render: RenderPathname;
};

function PathnameReader({ render }: WithPathnameProps) {
  return render(usePathname());
}

export default function WithPathname({ render }: WithPathnameProps) {
  return (
    <Suspense fallback={render(null)}>
      <PathnameReader render={render} />
    </Suspense>
  );
}
