import Experience from "@/app/_components/sections/Experience";
import Education from "@/app/_components/sections/Education";
import Projects from "@/app/_components/sections/Projects";
import Skills from "@/app/_components/sections/Skills";
import ThreeJS from "@/app/_components/sections/ThreeJS";
import About from "@/app/_components/sections/About";
import GrainyBackground from "../_components/GrainyBackground";
import Footer from "@/app/_components/sections/globals/Footer";
import ComponentSwitcher from "../_components/ComponentSwitcher";

export default function Home() {
  return (
    <>
      <main className="lg:py-24 lg:w-1/2">
        <About />
        {/* <ThreeJS /> */}
        <ComponentSwitcher />
        {/* <Experience /> */}
        {/* <Education /> */}
        {/* <Skills /> */}
        <Projects />
        <Footer />
      </main>
    </>
  );
}
