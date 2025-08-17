// src/components/FloatingShape.tsx
"use client";
import { motion } from "framer-motion";

interface FloatingShapeProps {
  size?: string; // e.g., "w-40 h-40"
  colorFrom?: string;
  colorTo?: string;
  top?: string;
  left?: string;
  duration?: number;
  delay?: number;
}

export default function FloatingShape({
  size = "w-32 h-32",
  colorFrom = "from-pink-400",
  colorTo = "to-purple-500",
  top = "top-0",
  left = "left-0",
  duration = 10,
  delay = 0,
}: FloatingShapeProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: ["0%", "20%", "0%"] }}
      transition={{ repeat: Infinity, duration, delay }}
      className={`absolute ${top} ${left} ${size} bg-gradient-to-br ${colorFrom} ${colorTo} rounded-full blur-3xl opacity-60 pointer-events-none`}
    />
  );
}