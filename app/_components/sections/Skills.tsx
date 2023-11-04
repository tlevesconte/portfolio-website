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
      category: "Languages",
      items: [
        { icon: <BiLogoJavascript />, name: "JavaScript" },
        { icon: <BiLogoTypescript />, name: "TypeScript" },
        { icon: <BiLogoJava />, name: "Java" },
        { icon: <PiFileSqlFill />, name: "SQL" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: <BiLogoSpringBoot />, name: "Spring" },
        { icon: <SiSpringboot />, name: "SpringBoot" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { icon: <BiLogoReact />, name: "React" },
        { icon: <TbBrandNextjs />, name: "NextJS" },
        { icon: <BiLogoHtml5 />, name: "HTML" },
        { icon: <BiLogoCss3 />, name: "CSS" },
        { icon: <BiLogoTailwindCss />, name: "TailwindCSS" },
      ],
    },
    {
      category: "DM",
      items: [
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <SiSanity />, name: "Sanity" },
        { icon: <BiLogoWordpress />, name: "Wordpress" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { icon: <SiOpenstack />, name: "OpenStack" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <AiFillGithub />, name: "GitHub" },
        { icon: <AiFillGitlab />, name: "GitLab" },
      ],
    },
    {
      category: "Agile",
      items: [
        { icon: <DiScrum />, name: "Scrum" },
        { icon: <TbLayoutKanban />, name: "Kanban" },
      ],
    },
  ];

  return (
    <section className="mb-[2.5em]">
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">
        Skills
      </h2>
      <p className="mb-[.8em] text-[1.2em] leading-[1.5] text-paragraphColour">
        Here are some of the tools and technologies I&apos;ve used recently:
      </p>
      <div className="grid grid-cols-2 gap-y-2 text-[1em] justify-items-center sm:justify-items-start leading-[1.5] text-paragraphColour sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-y-0">
        {skillsData.map((category, index) => (
          <ul key={index}>
            <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">
              {category.category}
            </li>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex flex-row items-center gap-1">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
