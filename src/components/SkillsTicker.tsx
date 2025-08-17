"use client";

import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiTailwindcss,} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
//   { name: "Node.js", icon: SiNodeDotJs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind CSS", icon: SiTailwindcss },
//   { name: "Azure", icon: SiAzure },
//   { name: "AWS", icon: SiAmazonaws },
];

export default function SkillsTicker() {
  return (
    <div className="w-full overflow-hidden py-6 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-b border-gray-300 dark:border-gray-700">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {skills.concat(skills).map((skill, index) => (
          <div key={index} className="flex items-center gap-2 text-xl font-semibold text-gray-700 dark:text-gray-200">
            <skill.icon size={28} />
            {skill.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}