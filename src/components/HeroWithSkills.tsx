"use client";

import { motion } from "framer-motion";
import SkillsTicker from "./SkillsTicker";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiTailwindcss} from "react-icons/si";

export default function HeroWithSkills() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      {/* Floating Hero Cutout */}
      <motion.div
        className="absolute -top-20 md:-top-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-30"
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-0">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">
          Gaurav Prince
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Fullstack Developer | Cloud Enthusiast | UI/UX Lover
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Call to action buttons */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Floating Gradient Shapes */}
      <motion.div
        className="absolute -bottom-24 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-400 opacity-20"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 right-1/4 w-36 h-36 rounded-full bg-gradient-to-tr from-purple-400 via-indigo-500 to-blue-500 opacity-20"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Skills Ticker */}
      <div className="absolute bottom-0 w-full">
        <SkillsTicker />
      </div>
    </section>
  );
}