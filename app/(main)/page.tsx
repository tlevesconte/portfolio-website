export default function Home() {
  return (
    <main className="">
      <section className="mb-[.8em]">
        <h2 className="mb-[.8em] text-[1.5em] font-bold leading-[normal]">Education</h2>
        <ul className="text-paragraphColour">
          <li className="text-[1.1em] leading-[1.5]">
            <span className="text-highlightColour font-bold">2021 - 2023</span> | Master of Science
            - MSc Software Engineering, Cardiff University
          </li>
          <li className="text-[1.1em] leading-[1.5]">
            <span className="text-highlightColour font-bold">2018 - 2021</span> | Bachelor of
            Science - BSc (Hons) Computer Science, Cardiff Metropolitan University
          </li>
        </ul>
      </section>
      <section>
        <h2 className="mb-[.8em] text-[1.5em] font-bold leading-[normal]">Projects</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg hover:cursor-pointer"></div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg"></div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg"></div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg"></div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg"></div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg"></div>
        </div>
      </section>
    </main>
  );
}
