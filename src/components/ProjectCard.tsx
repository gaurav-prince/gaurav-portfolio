// src/components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export default function ProjectCard({ title, description, techStack, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 hover:underline">
          View Project
        </a>
      )}
    </motion.div>
  );
}