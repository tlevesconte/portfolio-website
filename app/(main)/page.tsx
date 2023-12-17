import Experience from "@/app/_components/sections/Experience";
import Education from "@/app/_components/sections/Education";
import Projects from "@/app/_components/sections/Projects";
import Skills from "@/app/_components/sections/Skills";

export default function Home() {
  return (
    <main className="lg:py-24 lg:w-1/2">
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
