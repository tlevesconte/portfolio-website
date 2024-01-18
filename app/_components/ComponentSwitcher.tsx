"use client";

import React, { useState } from "react";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

export default function ComponentSwitcher() {
  const [activeComponent, setActiveComponent] = useState<string>("projects");
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(
    <Projects />
  );

  const toggleComponent = (component: string) => {
    switch (component) {
      case "experience":
        setSelectedComponent(<Experience />);
        break;
      case "education":
        setSelectedComponent(<Education />);
        break;
      case "projects":
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
