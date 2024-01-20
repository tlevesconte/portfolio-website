// "use client";

import React from "react";

export default function Header() {
  const sectionNames = ["about", "experience", "education", "projects"];

  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:w-1/2 lg:flex-col lg:justify-between mb-[2.5em] lg:mb-0">
      <div className="flex flex-col justify-center text-[1.2em]">
        <h1 className="text-[2em] font-bold leading-[normal]">
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
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
