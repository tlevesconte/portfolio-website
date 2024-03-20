import Skills from "./Skills";

export default function About() {
  return (
    <section className="mb-[5em] lg:scroll-mt-24" id="about">
      <div className="text-[1.2em] leading-[1.5] text-white/60">
        <p className="mb-[.8em]">
          Hi! I&apos;m Tomas, an aspiring Software Engineer living in Sweden. In my spare time, I like listening to music, reading and running. Aside from that, I&apos;m actively learning C#/.Net and Swedish. If you&apos;d like to get in touch, you can reach me
          at{" "}
          {/* TODO: change to copy-to-clipboard (instead of mailto:) */}
          <a
            className="border-b border-dotted border-white text-white hover:bg-white/10"
            href="mailto:tomas.levesconte@proton.me"
          >
            tomas.levesconte@proton.me
          </a>
          . You can also find me on{" "}
          <a
            className="border-b border-dotted border-white text-white hover:bg-white/10"
            href="https://github.com/tlevesconte"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            className="border-b border-dotted border-white text-white hover:bg-white/30"
            href="https://www.linkedin.com/in/tomas-levesconte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <Skills />
    </section>
  );
}
