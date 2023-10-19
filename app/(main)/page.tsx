"use client";
import ThreeJS from "@/app/_components/sections/ThreeJS";
import Education from "@/app/_components/sections/Education";
import Skills from "@/app/_components/sections/Skills";
import Projects from "@/app/_components/sections/Projects";

export default function Home() {
  return (
    <main>
      <ThreeJS />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
