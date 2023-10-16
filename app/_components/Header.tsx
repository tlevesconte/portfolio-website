"use client";
import { Canvas } from "@react-three/fiber";
import AsciiTorus from "./3D/AsciiTorus";

export default function Header() {
  return (
    <header className="mb-[2em]">
      {/* <div className="flex flex-row flex-wrap lg:flex-nowrap"> */}
        <div className="flex flex-col justify-center text-[1.2em]">
          <h1 className="mb-[.8em] text-[1.6em] font-bold leading-[normal]">Hi! I'm Tomas.</h1>
          <p className="leading-[1.5] text-paragraphColour">
            I'm a Software Engineer with dual British and Swedish nationality, currently residing in
            Sweden. If you'd like to reach out, feel free to contact me via email at {" "}
            <a
              className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]"
              href="mailto:tomas.levesconte@gmail.com">
              tomas.levesconte@gmail.com
            </a>
            . You can also connect with me on{" "}
            <a className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]">
              GitHub
            </a>{" "}
            and{" "}
            <a className="border-b border-dotted border-black text-highlightColour hover:bg-[#EBEBEB]">
              LinkedIn
            </a>
            .
          </p>
        </div>
      {/* </div> */}
    </header>
  );
}
