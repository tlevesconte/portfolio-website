export default function Header() {
  return (
    <header className="mb-[2.5em]">
      <div className="flex flex-col justify-center text-[1.2em]">
        <h1 className="mb-[.8em] text-[1.6em] font-bold leading-[normal]">Hi! I'm Tomas.</h1>
        <p className="leading-[1.5] text-paragraphColour">
          I'm a Software Engineer with dual British and Swedish nationality, now living in Sweden.
          If you'd like to get in touch, you can reach me at{" "}
          <a
            className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
            href="mailto:tomas.levesconte@gmail.com">
            tomas.levesconte@gmail.com
          </a>
          . You can also find me on{" "}
          <a className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]">
            GitHub
          </a>{" "}
          and{" "}
          <a className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </header>
  );
}
