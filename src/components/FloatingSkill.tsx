"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";

interface FloatingSkillProps {
  icon: IconType;
  size?: number;
  x: number;
  y: number;
}

export default function FloatingSkill({ icon: Icon, size = 50, x, y }: FloatingSkillProps) {
  const [clientValues, setClientValues] = useState<{ randomX: number; randomY: number; randomDuration: number } | null>(null);

  useEffect(() => {
    // Only calculate after client hydration
    setClientValues({
      randomX: x + Math.random() * 60 - 30,
      randomY: y + Math.random() * 60 - 30,
      randomDuration: 5 + Math.random() * 5,
    });
  }, [x, y]);

  if (!clientValues) return null; // Don't render until client values exist

  return (
    <motion.div
      className="absolute text-gray-700 dark:text-gray-200"
      style={{ top: y, left: x }}
      animate={{ y: [y, clientValues.randomY, y], x: [x, clientValues.randomX, x] }}
      transition={{ duration: clientValues.randomDuration, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
    >
      <Icon size={size} />
    </motion.div>
  );
}