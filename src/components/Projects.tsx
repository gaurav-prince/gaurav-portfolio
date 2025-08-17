// src/components/Projects.tsx
"use client";
import { motion } from "framer-motion";

const projects = [
  { name: "Project One", desc: "Web App using React & Node" },
  { name: "Project Two", desc: "Next.js Portfolio" },
  { name: "Project Three", desc: "E-commerce Platform" },
];

export default function Projects() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-indigo-100 overflow-hidden px-4">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-gray-100">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between text-gray-700 dark:text-gray-200 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}