import List from "@/app/_components/templates/List";
import ListItem from "@/app/_components/templates/ListItem";

export default function Experience() {
  return (
    <section className="lg:scroll-mt-24" id="experience">
      <List>
        <ListItem
          date="2021 — Now"
          title="Web Developer @ Freelance"
          description="Remote"
        />
        <ListItem
          date="2022 — 2022"
          title="Software Engineer Intern @ GamEngage"
          description="Cardiff, Wales / Hybrid"
        />
        <ListItem
          date="2021 — 2021"
          title="Software Engineer Intern @ BJSS"
          description="Cardiff, Wales / Hybrid"
        />
      </List>
    </section>
  );
}
