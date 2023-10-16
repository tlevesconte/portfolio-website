"use client";
import { Canvas } from "@react-three/fiber";
import AsciiTorus from "@/app/_components/3D/AsciiTorus";
import IcosahedronDisplacement from "../_components/3D/IcosahedronDisplacement";
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

export default function Home() {
  return (
    <main className="">
      <section className="mb-[2em]">
        <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Three.js</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
              <IcosahedronDisplacement />
            </Canvas>
          </div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <div className="h-full w-full rounded object-cover ">
              <Canvas>
                <color attach="background" args={["white"]} />
                <pointLight position={[5, 3, 3]} intensity={1.0} />
                <pointLight position={[1, 1, 1]} intensity={0.5} />
                <AsciiTorus />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="mb-[2em]">
        <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Education</h2>
        <ul className="text-[1.1em] leading-[1.5] text-paragraphColour">
          <li className="">
            <span className="font-bold text-highlightColour">2021 - 2023</span> | Cardiff
            University, Master of Science - MSc Software Engineering
          </li>
          <li className="">
            <span className="font-bold text-highlightColour">2018 - 2021</span> | Cardiff
            Metropolitan University, Bachelor of Science - BSc (Hons) Computer Science
          </li>
        </ul>
      </section>
      {/* Skills */}
      <section className="mb-[2em]">
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
            <li className="mb-[.2em] text-[1.2em] font-bold text-highlightColour">DB/CMS</li>
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
      {/* Projects */}
      <section className="mb-[2em]">
        <h2 className="mb-[.8em] text-[1.4em] font-bold leading-[normal]">Projects</h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg hover:cursor-pointer">
            <img
              className="h-auto w-full rounded object-cover"
              src="/dan-wallace-drummer-screenshot.png"
            />
          </div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <img
              className="h-auto w-full rounded object-cover"
              src="/minimal-chess-screenshot.png"
            />
          </div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <img className="h-auto w-full rounded object-cover" src="/typer-screenshot.png" />
          </div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <img
              className="h-auto w-full rounded object-cover"
              src="/bjss-desk-booker-screenshot.png"
            />
          </div>
          <div className="h-full min-h-[180px] w-full rounded border shadow-lg">
            <img
              className="h-auto w-full rounded object-cover"
              src="/disaster-dash-screenshot.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
