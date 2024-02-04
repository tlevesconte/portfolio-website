import React from "react";

export default function Header() {
  // const sectionNames = ["about", "experience", "education", "projects"];

  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:w-1/2 lg:flex-col lg:justify-between mb-[2.5em] lg:mb-0">
      <div className="flex flex-col justify-center text-[1.2em]">
        <h1 className="text-[2em] font-bold leading-[normal]">
          Tomas Le Vesconte
        </h1>

        <h2 className="text-[1.15em] mb-[2.5em]">Software Engineer</h2>

        <nav className="flex-col hidden lg:flex">
          <ul className="text-white/70">
            <li className="mb-1">
              <a href="#about">About</a>
            </li>
            <li className="mb-1">
              <a href="#experience">Experience</a>
            </li>
            <li className="mb-1">
              <a href="#education">Education</a>
            </li>
            <li className="mb-1">
              <a href="#projects">Projects</a>
            </li>
            {/* {sectionNames.map((sectionName, index) => (
              <li className="mb-1" key={index}>
                <a className="text-paragraphColour" href={`#${sectionName}`}>
                  {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}{" "}
                </a>
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
