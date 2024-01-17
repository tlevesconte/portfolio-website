"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Header() {

  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionNames = ["about", "experience", "education", "projects"];
  const sectionRefs = useRef<any>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view based on the scroll position
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const sectionRef = sectionRefs.current[i];
        const elementTop = sectionRef.current.offsetTop;
        const elementBottom = elementTop + sectionRef.current.offsetHeight;

        if (window.scrollY >= elementTop && window.scrollY < elementBottom) {
          setActiveSection(i);
          break; // Stop checking once we find the active section
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:w-1/2 lg:flex-col lg:justify-between mb-[2.5em] lg:mb-0">
      <div className="flex flex-col justify-center text-[1.2em]">
        <h1 className="text-[2em] font-bold leading-[normal]">
          {/* Hi! I&apos;m Tomas. */}
          Tomas Le Vesconte
        </h1>

        <h2 className="text-[1.15em] mb-[2.5em]">Software Engineer</h2>

        {/* Navigation links */}
        <nav className="flex flex-col">
          {sectionNames.map((sectionName, index) => (
            <a
              className="text-paragraphColour"
              key={index}
              href={`#${sectionName}`}
            >
              {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}{" "}
              {/* Capitalize first letter */}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
