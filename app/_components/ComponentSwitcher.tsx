"use client";

import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ComponentSwitcher() {
  const [activeComponent, setActiveComponent] = useState<string>("projects");
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(
    <Projects />
  );
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash !== "#about") {
        toggleComponent(
          window.location.hash.slice(1, window.location.hash.length)
        );
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleComponent = (component: string) => {
    switch (component) {
      case "experience":
        router.push("/#experience");
        setSelectedComponent(<Experience />);
        break;
      case "education":
        router.push("/#education");
        setSelectedComponent(<Education />);
        break;
      case "projects":
        router.push("/#projects");
        setSelectedComponent(<Projects />);
        break;
      default:
        break;
    }

    setActiveComponent(component);
  };

  return (
    <div className="mb-[5em]">
      <div className="mb-[1.2em] text-[1.4em] font-bold leading-[normal] flex flex-row gap-5">
        <button
          onClick={() => {
            if (activeComponent !== "experience") {
              toggleComponent("experience");
            }
          }}
        >
          <h2
            className={
              activeComponent !== "experience"
                ? "text-paragraphColour border-b border-dotted border-black hover:bg-[#EBEBEB]"
                : ""
            }
          >
            Experience
          </h2>
        </button>
        <button
          onClick={() => {
            if (activeComponent !== "education") {
              toggleComponent("education");
            }
          }}
        >
          <h2
            className={
              activeComponent !== "education"
                ? "text-paragraphColour border-b border-dotted border-black hover:bg-[#EBEBEB]"
                : ""
            }
          >
            Education
          </h2>
        </button>
        <button
          onClick={() => {
            if (activeComponent !== "projects") {
              toggleComponent("projects");
            }
          }}
        >
          <h2
            className={
              activeComponent !== "projects"
                ? "text-paragraphColour border-b border-dotted border-black hover:bg-[#EBEBEB]"
                : ""
            }
          >
            Projects
          </h2>
        </button>
      </div>
      {selectedComponent}
    </div>
  );
}
