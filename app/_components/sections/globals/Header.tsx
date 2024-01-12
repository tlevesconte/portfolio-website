export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:w-1/2 lg:flex-col lg:justify-between mb-[2.5em] lg:mb-0">
      <div className="flex flex-col justify-center text-[1.2em]">
        <h1 className="mb-[.8em] text-[2em] font-bold leading-[normal]">
          {/* Hi! I&apos;m Tomas. */}
          Tomas Le Vesconte
        </h1>
        {/* <p className="leading-[1.5] text-paragraphColour">
          I&apos;m a Software Engineer with dual British and Swedish
          nationality, now living in Sweden. If you&apos;d like to get in touch,
          you can reach me at{" "}
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
        </p> */}
      </div>
    </header>
  );
}
