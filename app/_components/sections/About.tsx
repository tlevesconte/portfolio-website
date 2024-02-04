import Skills from "./Skills";

export default function About() {
  return (
    <section className="mb-[5em] lg:scroll-mt-24" id="about">
      <div className="text-[1.2em] leading-[1.5] text-white/60">
        <p className="mb-[.8em]">
          Hi! I&apos;m Tomas, an aspiring Software Engineer living in Sweden.
          Passionate about web development, I thrive on challenging projects and
          love embracing new technologies.
        </p>
        {/* Possible replace keeping physically fit for running */}
        <p className="mb-[.8em]">
          In my spare time, I like to keep physically fit and set personal
          challenges for myself, which at the moment involves a lot of
          long-distance running.
          {/* P.S.: I have both British and Swedish citizenship. */}
        </p>
        <p className="mb-[.8em]">
          If you&apos;d like to get in touch, you can reach me at{" "}
          <a
            className="border-b border-dotted border-white text-white hover:bg-white/10"
            href="mailto:tomas.levesconte@gmail.com"
          >
            tomas.levesconte@gmail.com
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
