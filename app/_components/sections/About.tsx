import Section from "@/app/_components/templates/Section";

export default function About() {
  return (
    <Section heading="About">
      <p className="text-[1.2em] leading-[1.5] text-paragraphColour">
        I&apos;m a Software Engineer with dual British and Swedish nationality,
        now living in Sweden. If you&apos;d like to get in touch, you can reach
        me at{" "}
        <a
          className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
          href="mailto:tomas.levesconte@gmail.com"
        >
          tomas.levesconte@gmail.com
        </a>
        . You can also find me on{" "}
        <a
          className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
          href="https://github.com/tlevesconte"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
          href="https://www.linkedin.com/in/tomas-levesconte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </Section>
  );
}
