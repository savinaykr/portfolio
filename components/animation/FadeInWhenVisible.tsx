"use client";

import { MotionStyle, motion, useReducedMotion } from "framer-motion";
import * as React from "react";

export interface IFadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  /** Optional delay in seconds for stagger effects (capped at 0.15s) */
  delay?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  ...others
}: IFadeInWhenVisibleProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={others.className} style={others.style as React.CSSProperties}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.2, delay: Math.min(delay, 0.1), ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 6 },
      }}
      {...others}
    >
      {children}
    </motion.div>
  );
}
