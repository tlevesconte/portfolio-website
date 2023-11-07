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
        <ListItem
          date="2022"
          title="Software Engineer @ GamEngage (via. Cardiff University)"
          description="Remote"
        />
        <ListItem
          date="2021"
          title="Software Engineer @ BJSS (via. Cardiff University)"
          description="Remote"
        />
      </List>
    </Section>
  );
}
