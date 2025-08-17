// src/components/AnimatedSection.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}