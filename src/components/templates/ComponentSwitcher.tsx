"use client";

import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";

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
      <div className="mb-[1.2em] flex flex-row gap-5 text-[1.4em] font-bold leading-[normal]">
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
                ? "border-b border-dotted border-white text-white/70 hover:bg-white/10"
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
                ? "border-b border-dotted border-white text-white/70 hover:bg-white/10"
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
                ? "border-b border-dotted border-white text-white/70 hover:bg-white/10"
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
