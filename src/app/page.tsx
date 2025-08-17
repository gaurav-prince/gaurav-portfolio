// src/app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SkillsTicker from "@/components/SkillsTicker";
import HeroWithSkills from "@/components/HeroWithSkills";

export default function Page() {
  return (
    // <div className="scroll-snap-y snap-mandatory h-screen overflow-y-scroll">
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </div>
    <main className="w-full min-h-screen">
      <Navbar />
      <HeroWithSkills />
      {/* <Hero /> */}
      {/* <Skills /> */}
      {/* <SkillsTicker /> */}
      <About />
      <Projects />
      <Contact />
      {/* Add About / Projects / Contact sections here */}
    </main>
  );
}