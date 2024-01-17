"use client";

import { useState } from "react";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

export default function ComponentSwitcher() {
  const [isExperienceActive, setIsExperienceActive] = useState<boolean>(false);

  const toggleComponent = () => {
    setIsExperienceActive((prevIsExperienceActive) => !prevIsExperienceActive);
  };

  return (
    <div>
      <div className="mb-[.8em] text-[1.4em] font-bold leading-[normal] flex flex-row gap-3">
        <button onClick={isExperienceActive ? toggleComponent : undefined}>
          <h2
            className={isExperienceActive ? "text-red-900" : "text-green-700"}
          >
            Experience
          </h2>
        </button>
        <button onClick={isExperienceActive ? undefined : toggleComponent}>
          <h2
            className={isExperienceActive ? "text-green-700" : "text-red-900"}
          >
            Education
          </h2>
        </button>
      </div>
      {isExperienceActive ? <Education /> : <Experience />}
    </div>
  );
}
