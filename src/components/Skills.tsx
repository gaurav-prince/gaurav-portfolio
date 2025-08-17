"use client";
import FloatingSkill from "./FloatingSkill";
import { FaJs, FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";

const skills = [
  { icon: FaJs, x: 50, y: 80 },
  { icon: SiTypescript, x: 300, y: 150 },
  { icon: FaReact, x: 600, y: 100 },
  { icon: SiNextdotjs, x: 900, y: 200 },
  { icon: FaNodeJs, x: 1200, y: 50 },
  { icon: FaAws, x: 400, y: 400 },
  { icon: SiNodedotjs, x: 1500, y: 1400 },
//   { icon: SiMicrosoftazure, x: 700, y: 350 },
  { icon: SiTailwindcss, x: 1100, y: 300 },
  { icon: FaPython, x: 1300, y: 150 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 pt-20">
        My Skills
      </h2>

      {skills.map((skill, index) => (
        <FloatingSkill key={index} {...skill} />
      ))}
    </section>
  );
}