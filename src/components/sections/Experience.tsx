import List from "@/components/templates/List";
import ListItem from "@/components/templates/ListItem";

export default function Experience() {
  return (
    <section className="lg:scroll-mt-24" id="experience">
      <List>
        <ListItem
          date="2022 — Now"
          title="Web Developer @ Freelance"
          description="Remote"
        />
        <ListItem
          date="2022 — 2022"
          title="Software Development Project @ GamEngage"
          description="Cardiff, Wales / Hybrid"
        />
        <ListItem
          date="2021 — 2021"
          title="Software Development Project @ BJSS"
          description="Cardiff, Wales / Hybrid"
        />
      </List>
    </section>
  );
}
