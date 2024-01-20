import ThreeJS from "./ThreeJS";

export default function Projects() {
  return (
    <section className="lg:scroll-mt-24" id="projects">
      {/* <div className="grid sm:grid-cols-2 gap-4">
        <ProjectTile
          link="https://github.com/tlevesconte/minimal-chess"
          title="minimal-chess"
          description={
            <>
              {" "}
              A minimalistic chess application, built with{" "}
              <span className="text-highlightColour">Java</span> and{" "}
              <span className="text-highlightColour">JavaFx</span>. Includes
              unique movement for each piece, legal move highlighting, en
              passant, castling and stalemate/checkmate detection.
            </>
          }
        />
        <ProjectTile
          link="https://danwallacedrummer.com"
          title="danwallacedrummer.com"
          description={
            <>
              A portfolio website I made for a client using NextJS, Sanity &
              TailwindCSS. All site content is served using a headless CMS
              (Sanity.io). Also features a custom built justified image grid
              similar to Flickr & Unsplash.
            </>
          }
        />
        <ProjectTile
          link="https://github.com/tlevesconte/group-8-bjss-desk-booker"
          title="group-8-bjss-desk-booker"
          description={
            <>
              Collaborated with other postgraduate students on a desk booking
              application for BJSS, allowing their employees to reserve desks at
              their Cardiff and Bristol offices.{" "}
              <span className="text-highlightColour">
                Click tile to see more.
              </span>
            </>
          }
        />
        <ProjectTile
          link="https://github.com/tlevesconte/team-a-gamengage-disaster-dash"
          title="team-a-gamengage-disaster-dash"
          description={
            <>
              Collaborated with fellow postgraduate students on a serious games
              development project aimed at enabling GamEngage members to teach
              serious topics through gamification.{" "}
              <span className="text-highlightColour">
                Click tile to see more.
              </span>
            </>
          }
        />
      </div> */}
      <ThreeJS />
    </section>
  );
}
