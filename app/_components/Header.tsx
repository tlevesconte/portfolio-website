export default function Header() {
  return (
    <header className="mb-[2em]">
      <h1 className="mb-[.8em] text-[1.6em] font-bold leading-[normal]">
        Hi! I'm Tomas.
      </h1>
      <div className="flex flex-col gap-y-4 text-[1.2em]">
        <p className="leading-[1.5] text-paragraphColour">
          I'm a Software Engineer from Wales, currently residing in Sweden. I'm passionate about
          continuously improving my skills as a software engineer and dedicated to the ongoing
          journey of learning Swedish to better connect with the local community and culture.
        </p>
        <p className="leading-[1.5] text-paragraphColour">
          In my free time, I enjoy running, which not only keeps me physically active but also
          provides a refreshing break from the digital world.
        </p>
        <p className="leading-[1.5] text-paragraphColour">
          If you'd like to get in touch, whether to discuss software development, language learning,
          or share running tips, you can reach me at{" "}
          <a
            className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
            href="mailto:tomas.levesconte@gmail.com">
            tomas.levesconte@gmail.com
          </a>
          . Alternatively, you can find me on{" "}
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
