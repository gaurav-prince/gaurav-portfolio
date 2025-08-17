"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden"
    >
      {/* Hero Content */}
      <div className="z-10 text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I’m Gaurav Prince
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Full-stack Developer | Cloud Enthusiast | UI/UX Lover
        </p>
      </div>

      {/* Floating Hero Cutout */}
      <motion.div
        className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-40 blur-3xl"
        animate={{
          y: [0, 40, -20, 0],
          x: [0, -40, 20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
      />

      <motion.div
        className="absolute w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-30 blur-2xl"
        animate={{ y: [0, -50, 20, 0], x: [0, 50, -30, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      />
    </section>
  );
}