"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { SCROLL_SPRING } from "@/constants/motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SCROLL_SPRING);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-accent to-link"
    />
  );
}
