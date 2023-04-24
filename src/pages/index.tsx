import Metadata from '@/components/Metadata';
import { Navbar, Hero, About, Education, Projects, Contact, Footer } from '@/components/sections';
import { navbarContent, heroContent, aboutContent, educationContent, projectContent, contactContent, footerContent } from '../../content/content';

export default function Home() {
  return (
    <>
      {/* Head */}
      <Metadata />
      {/* Hero */}
      <Navbar handle={navbarContent.handle} sections={navbarContent.sections} />
      <Hero heading={heroContent.heading} bio={heroContent.bio} socials={heroContent.socials} />
      {/* Sections */}
      <div className="mx-auto max-w-lg px-[25px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[1089px]">
        <About heading={aboutContent.heading} paragraph1={aboutContent.paragraph1} paragraph2={aboutContent.paragraph2} skillsIntro={aboutContent.skillsIntro} skills1={aboutContent.skills_col_1} skills2={aboutContent.skills_col_2} skills3={aboutContent.skills_col_3} />
        <Education heading={educationContent.heading} universities={educationContent.universities} />
        <Projects heading={projectContent.heading} projects={projectContent.projects} />
        <Contact heading={contactContent.title} description={contactContent.description} buttonText={contactContent.buttonText} />
        <Footer items={footerContent.items} />
      </div>
    </>
  );
}
