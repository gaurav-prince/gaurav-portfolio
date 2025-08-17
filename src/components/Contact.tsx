// src/components/Contact.tsx
"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-green-100 overflow-hidden px-4">
      
      <motion.div 
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-green-200/20 via-teal-200/20 blur-3xl top-10 left-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-xl">
        Interested in working together? Reach out via email or connect on LinkedIn.
      </p>
      <a 
        href="mailto:gaurav@example.com"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}