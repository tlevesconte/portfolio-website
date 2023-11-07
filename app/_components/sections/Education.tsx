import Section from "@/app/_components/templates/Section";
import List from "@/app/_components/templates/List";
import ListItem from "@/app/_components/templates/ListItem";

export default function Education() {
  return (
    <Section heading="Education">
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
    </Section>
  );
}
