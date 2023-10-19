export default function Projects() {
  return (
    <section className="mb-[2.5em]">
      {/* Heading */}
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Projects</h2>
      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-2 object-cover md:grid-cols-3">
        {/* Project 1 */}
        <figure>
          <div className="h-full max-h-[180px] min-h-[180px] w-full">
            <a href="https://danwallacedrummer.com" target="_blank" rel="noopener noreferrer">
              <img
                className="h-full w-full rounded object-cover shadow-lg hover:border"
                src="/dan-wallace-drummer-screenshot.png"
                alt="A screenshot of the danwallacedrummer.com website"
              />
            </a>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://danwallacedrummer.com"
              target="_blank"
              rel="noopener noreferrer">
              danwallacedrummer.com
            </a>
            , created with <span className="text-highlightColour">NextJS</span>,{" "}
            <span className="text-highlightColour">Sanity</span> &{" "}
            <span className="text-highlightColour">TailwindCSS</span>
          </figcaption>
        </figure>

        {/* Project 2 */}
        <figure>
          <div className="h-full max-h-[180px] min-h-[180px] w-full">
            <a
              href="https://github.com/tlevesconte/minimal-chess"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="h-full w-full rounded object-cover shadow-lg hover:border"
                src="/minimal-chess-screenshot.png"
                alt="A screenshot of my minimalistic chess application"
              />
            </a>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://github.com/tlevesconte/minimal-chess"
              target="_blank"
              rel="noopener noreferrer">
              minimal-chess
            </a>
            , created with <span className="text-highlightColour">Java</span> &{" "}
            <span className="text-highlightColour">JavaFX</span>
          </figcaption>
        </figure>

        {/* Project 3 */}
        <figure>
          <div className="h-full max-h-[180px] min-h-[180px] w-full">
            <a
              href="https://github.com/tlevesconte/typer"
              target="_blank"
              rel="noopener noreferrer">
              <img className="h-full w-full rounded object-cover shadow-lg hover:border" src="/typer-screenshot.png" alt="A screenshot of my typing test project" />
            </a>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://github.com/tlevesconte/typer"
              target="_blank"
              rel="noopener noreferrer">
              typer
            </a>
            , created with <span className="text-highlightColour">JavaScript</span>,{" "}
            <span className="text-highlightColour">HTML</span> &{" "}
            <span className="text-highlightColour">CSS</span>
          </figcaption>
        </figure>

        <figure>
          <div className="h-full max-h-[180px] min-h-[180px] w-full">
            <a
              href="https://github.com/tlevesconte/group-8-bjss-desk-booker"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="h-full w-full rounded object-cover shadow-lg hover:border"
                src="/bjss-desk-booker-screenshot.png"
                alt="A screenshot of BJSS desk booker project"
              />
            </a>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://github.com/tlevesconte/group-8-bjss-desk-booker"
              target="_blank"
              rel="noopener noreferrer">
              group-8-bjss-desk-booker
            </a>
            , see stack on GitHub
          </figcaption>
        </figure>

        <figure>
          <div className="h-full max-h-[180px] min-h-[180px] w-full">
            <a
              href="https://github.com/tlevesconte/team-a-gamengage-disaster-dash"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="h-full w-full rounded object-cover shadow-lg hover:border"
                src="/disaster-dash-screenshot.png"
                alt="A screenshot of the Disaster Dash project"
              />
            </a>
          </div>
          <figcaption className="mt-2 text-[.8em] italic text-captionColour">
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="https://github.com/tlevesconte/team-a-gamengage-disaster-dash"
              target="_blank"
              rel="noopener noreferrer">
              team-a-gamengage-disaster-dash
            </a>
            , see stack on GitHub
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
