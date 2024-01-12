import Section from "@/app/_components/templates/Section";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoWordpress,
} from "react-icons/bi";
import {
  SiSpringboot,
  SiSanity,
  SiOpenstack,
  SiTerraform,
  SiJenkins,
} from "react-icons/si";
import { TbBrandNextjs, TbLayoutKanban } from "react-icons/tb";
import { DiMysql, DiScrum } from "react-icons/di";
import { PiFileSqlFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";

export default function Skills() {
  const skillsData = [
    {
      items: [
        { icon: <BiLogoJavascript />, name: "JavaScript" },
        { icon: <BiLogoTypescript />, name: "TypeScript" },
        { icon: <BiLogoJava />, name: "Java" },
        { icon: <PiFileSqlFill />, name: "SQL" },
        { icon: <BiLogoSpringBoot />, name: "Spring" },
      ],
    },
    {
      items: [
        { icon: <SiSpringboot />, name: "SpringBoot" },
        { icon: <BiLogoReact />, name: "React" },
        { icon: <TbBrandNextjs />, name: "NextJS" },
        { icon: <BiLogoHtml5 />, name: "HTML" },
        { icon: <BiLogoCss3 />, name: "CSS" },
      ],
    },
    {
      items: [
        { icon: <BiLogoTailwindCss />, name: "TailwindCSS" },
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <SiSanity />, name: "Sanity" },
        { icon: <BiLogoWordpress />, name: "Wordpress" },
      ],
    },
    {
      items: [
        { icon: <SiOpenstack />, name: "OpenStack" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <FaGitAlt />, name: "Git" },
      ],
    },
    {
      items: [
        { icon: <AiFillGithub />, name: "GitHub" },
        { icon: <AiFillGitlab />, name: "GitLab" },
        { icon: <DiScrum />, name: "Scrum" },
        { icon: <TbLayoutKanban />, name: "Kanban" },
      ],
    },
  ];

  return (
    <Section heading="Skills">
      <p className="mb-[.8em] text-[1.2em] leading-[1.5] text-paragraphColour">
        Here are some of the tools and technologies I&apos;ve used recently:
      </p>
      <div className="grid grid-cols-3 gap-y-6 sm:grid-cols-5 sm:gap-y-0 text-[.85em] justify-items-start gap leading-[1.5] text-paragraphColour">
        {skillsData.map((category, index) => (
          <ul key={index}>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex flex-row items-center gap-1">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  );
}
