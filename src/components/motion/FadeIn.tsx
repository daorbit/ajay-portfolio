"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EXPO_EASE } from "@/constants/motion";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: EXPO_EASE }}
    >
      {children}
    </motion.div>
  );
}
