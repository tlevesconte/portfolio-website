"use client";

import { Canvas } from "@react-three/fiber";

import AsciiTorus from "@/components/threejs/AsciiTorus";
import IcosahedronDisplacement from "@/components/threejs/IcosahedronDisplacement";

export default function Projects() {
  return (
    <section className="lg:scroll-mt-24" id="projects">
      <div className="mt-[.8em]">
        {/* TODO: make a template for these grid items (remove code duplication) */}
        <div className="grid grid-cols-3 gap-2">
          {/* Icosahedron Displacment (Grid Item 1) */}
          <figure>
            <div className="h-full max-h-[160px] min-h-[160px] w-full rounded border object-cover shadow-lg">
              <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <IcosahedronDisplacement />
              </Canvas>
            </div>
            <figcaption className="mt-2 text-[.8em] italic text-white/50">
              Icosahedron Displacment, created with{" "}
              <a
                className="border-b border-dotted border-white text-white hover:bg-white/10"
                href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                R3F
              </a>{" "}
              & vertex/fragment shaders
            </figcaption>
          </figure>

          {/* Ascii Torus (Grid Item 2) */}
          <figure>
            <div className="h-full max-h-[160px] min-h-[160px] w-full rounded border bg-[#111111] object-cover shadow-lg">
              <Canvas>
                <pointLight position={[4, 3, 3]} intensity={20.0} />
                <AsciiTorus />
              </Canvas>
            </div>
            <figcaption className="mt-2 text-[.8em] italic text-white/50">
              Ascii Torus, created with{" "}
              <a
                className="border-b border-dotted border-white text-white hover:bg-white/10"
                href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                target="_blank"
                rel="noopener noreferrer"
              >
                R3F
              </a>{" "}
              &{" "}
              <a
                className="border-b border-dotted border-white text-white hover:bg-white/10"
                href="https://github.com/pmndrs/three-stdlib"
                target="_blank"
                rel="noopener noreferrer"
              >
                three-stdlib
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
