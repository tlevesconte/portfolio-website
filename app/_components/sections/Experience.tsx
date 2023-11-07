import Section from "@/app/_components/templates/Section";
import List from "@/app/_components/templates/List";
import ListItem from "@/app/_components/templates/ListItem";

export default function Experience() {
  return (
    <Section heading="Experience">
      <List>
        <ListItem
          date="2021 — Now"
          title="Web Developer @ Freelance"
          description="Remote"
        />
      </List>
    </Section>
  );
}
