// src/components/About.tsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden px-4">
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute w-60 h-60 rounded-full bg-gradient-to-br from-indigo-200/20 via-purple-200/20 blur-3xl top-10 left-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-pink-200/20 via-yellow-200/20 blur-3xl bottom-20 right-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg">
        I am a full-stack web developer with a passion for building scalable and visually appealing web applications. I love combining clean code with beautiful UI design to create seamless user experiences.
      </p>
    </section>
  );
}