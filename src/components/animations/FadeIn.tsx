"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
