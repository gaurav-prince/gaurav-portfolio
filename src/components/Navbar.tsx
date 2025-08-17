// src/components/Navbar.tsx
"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const tabs = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold z-50">Gaurav Prince</div>
        <div className="hidden md:flex gap-6 items-center">
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(tab.toLowerCase());
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {tab}
            </a>
          ))}
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <button className="md:hidden z-50" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-white dark:bg-gray-900 z-50">
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const el = document.getElementById(tab.toLowerCase());
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {tab}
            </a>
          ))}
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  );
}