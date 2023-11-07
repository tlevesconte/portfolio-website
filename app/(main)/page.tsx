import Experience from "@/app/_components/sections/Experience";
import Education from "@/app/_components/sections/Education";
import Projects from "@/app/_components/sections/Projects";
import Skills from "@/app/_components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Experience />
      <Education />
      <Projects />
      {/* <Skills /> */}
    </main>
  );
}
