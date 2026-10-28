"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { APPLE_EASE } from "@/constants/motion";

type CountUpProps = {
  value: number;
  className?: string;
};

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduce) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: APPLE_EASE,
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
