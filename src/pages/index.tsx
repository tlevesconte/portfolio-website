import Metadata from '@/components/Metadata';
import { Navbar, Hero, About, Education, Projects, Contact, Footer } from '@/components/sections';
import { navbarContent, heroContent, aboutContent, educationContent, projectContent, contactContent, footerContent } from '../../content/content';

export default function Home() {
  return (
    <>
      {/* Head */}
      <Metadata />
      {/* Hero */}
      <Navbar data={navbarContent} />
      <Hero data={heroContent} />
      {/* Sections */}
      <div className="mx-auto max-w-lg px-[25px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[1089px]">
        <About data={aboutContent} />
        <Education data={educationContent} />
        <Projects data={projectContent} />
        <Contact data={contactContent} />
        <Footer data={footerContent} />
      </div>
    </>
  );
}
