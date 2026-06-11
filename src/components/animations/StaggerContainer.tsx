"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export const StaggerContainer = ({ children, delayOffset = 0.1, className = "" }: { children: ReactNode; delayOffset?: number; className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delayOffset,
          },
        },
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
