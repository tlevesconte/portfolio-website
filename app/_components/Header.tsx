export default function Header() {
  return (
    <header className="mb-[3em]">
      <h1 className="mb-[.8em] text-[2em] font-bold leading-[normal]">
        Hi! I'm Tomas Le Vesconte.
      </h1>
      <p className="text-paragraphColour text-[1.2em] leading-[1.5]">
        I'm a Software Engineer based in Sweden. If you'd like to get in touch, you can drop me a
        line at{" "}
        <a
          className="text-highlightColour border-b border-dotted border-black hover:bg-[#EBEBEB]"
          href="mailto:tomas.levesconte@gmail.com">
          tomas.levesconte@gmail.com
        </a>
        . You can also find me on{" "}
        <a className="text-highlightColour border-b border-dotted border-black hover:bg-[#EBEBEB]">
          GitHub
        </a>{" "}
        and{" "}
        <a className="text-highlightColour border-b border-dotted border-black hover:bg-[#EBEBEB]">
          LinkedIn
        </a>
        .
      </p>
    </header>
  );
}
