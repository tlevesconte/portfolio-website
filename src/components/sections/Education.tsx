import List from "@/components/templates/List";
import ListItem from "@/components/templates/ListItem";

export default function Education() {
  return (
    <section className="lg:scroll-mt-24" id="education">
      <List>
        <ListItem
          date="2021 — 2023"
          title="Cardiff University"
          description="Master of Science - MSc Software Engineering"
        />
        <ListItem
          date="2018 — 2021"
          title="Cardiff Metropolitan University"
          description="Bachelor of Science - BSc (Hons) Computer Science"
        />
      </List>
    </section>
  );
}
