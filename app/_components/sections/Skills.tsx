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
import { SiSpringboot, SiSanity, SiOpenstack, SiTerraform, SiJenkins } from "react-icons/si";
import { TbBrandNextjs, TbLayoutKanban } from "react-icons/tb";
import { DiMysql, DiScrum } from "react-icons/di";
import { PiFileSqlFill } from "react-icons/pi";

export default function Skills() {
  return (
    <section className="mb-[2.5em]">
      <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Skills</h2>
      <p className="mb-[.8em] text-[1.2em] leading-[1.5] text-paragraphColour">
        Here are some of the tools and technologies I've used recently:
      </p>
      <div className="grid grid-cols-2 gap-y-2 text-[1em] leading-[1.5] text-paragraphColour sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-y-0">
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">Languages</li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoJavascript />
            JavaScript
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoTypescript /> TypeScript
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoJava /> Java
          </li>
          <li className="flex flex-row items-center gap-1">
            <PiFileSqlFill /> SQL
          </li>
        </ul>
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">Backend</li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoSpringBoot /> Spring
          </li>
          <li className="flex flex-row items-center gap-1">
            <SiSpringboot /> SpringBoot
          </li>
        </ul>
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">Frontend</li>
          <li className="flex flex-row items-center">
            <BiLogoReact /> React/
            <TbBrandNextjs /> NextJS
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoHtml5 />
            HTML
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoCss3 /> CSS
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoTailwindCss /> TailwindCSS
          </li>
        </ul>
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">DM</li>
          <li className="flex flex-row items-center gap-1">
            <DiMysql /> MySQL
          </li>
          <li className="flex flex-row items-center gap-1">
            <SiSanity /> Sanity
          </li>
          <li className="flex flex-row items-center gap-1">
            <BiLogoWordpress /> Wordpress
          </li>
        </ul>
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">DevOps</li>
          <li className="flex flex-row items-center gap-1">
            <SiOpenstack /> OpenStack
          </li>
          <li className="flex flex-row items-center gap-1">
            <SiTerraform /> Terraform
          </li>
          <li className="flex flex-row items-center gap-1">
            <SiJenkins /> Jenkins
          </li>
        </ul>
        <ul>
          <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">Agile</li>
          <li className="flex flex-row items-center gap-1">
            <DiScrum /> Scrum
          </li>
          <li className="flex flex-row items-center gap-1">
            <TbLayoutKanban /> Kanban
          </li>
        </ul>
      </div>
    </section>
  );
}
