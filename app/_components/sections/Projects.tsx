export default function Projects() {
  return (
    <section className="mb-[2.5em]">
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Projects</h2>
      <div className="grid grid-cols-2 gap-2 object-cover md:grid-cols-3">
        <div className="h-full min-h-[180px] w-full rounded border shadow-lg hover:cursor-pointer">
          <img
            className="h-full w-full rounded object-cover"
            src="/dan-wallace-drummer-screenshot.png"
          />
        </div>
        <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
          <img className="h-full w-full rounded object-cover" src="/minimal-chess-screenshot.png" />
        </div>
        <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
          <img className="h-full w-full rounded object-cover" src="/typer-screenshot.png" />
        </div>
        <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
          <img
            className="h-full w-full rounded object-cover"
            src="/bjss-desk-booker-screenshot.png"
          />
        </div>
        <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
          <img className="h-full w-full rounded object-cover" src="/disaster-dash-screenshot.png" />
        </div>
      </div>
    </section>
  );
}
