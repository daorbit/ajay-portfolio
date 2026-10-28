"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { HERO_LAPTOP, HERO_PHONES } from "@/data/showcase";
import { SCROLL_SPRING } from "@/constants/motion";
import DeviceShot from "@/components/media/DeviceShot";

export default function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, SCROLL_SPRING);

  const rotateX = useTransform(progress, [0, 1], [reduce ? 0 : 22, 0]);
  const scale = useTransform(progress, [0, 1], [reduce ? 1 : 0.86, 1]);
  const leftY = useTransform(progress, [0, 1], [reduce ? 0 : 160, 0]);
  const rightY = useTransform(progress, [0, 1], [reduce ? 0 : 240, 0]);
  const phoneOpacity = useTransform(progress, [0.25, 0.9], [reduce ? 1 : 0, 1]);
  const [leftPhone, rightPhone] = HERO_PHONES;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-5xl perspective-[1800px]">
      <motion.div style={{ rotateX, scale }} className="relative aspect-[1224/765] origin-bottom">
        <DeviceShot
          device="macbook-pro-16"
          src={HERO_LAPTOP.src}
          alt={HERO_LAPTOP.alt}
          sizes="(min-width: 1069px) 1024px, 90vw"
          preload
        />
      </motion.div>
      <motion.div
        style={{ y: leftY, opacity: phoneOpacity }}
        className="absolute -bottom-[10%] -left-[5%] hidden aspect-[422/894] w-[19%] md:block"
      >
        <DeviceShot device="iphone-pro" src={leftPhone.src} alt={leftPhone.alt} sizes="200px" />
      </motion.div>
      <motion.div
        style={{ y: rightY, opacity: phoneOpacity }}
        className="absolute -right-[5%] -bottom-[14%] hidden aspect-[422/894] w-[19%] md:block"
      >
        <DeviceShot device="iphone-pro" src={rightPhone.src} alt={rightPhone.alt} sizes="200px" />
      </motion.div>
    </div>
  );
}
