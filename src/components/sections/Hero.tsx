import Link from 'next/link'
import { Canvas } from '@react-three/fiber';
import IcosahedronDisplacement from '../3D/IcosahedronDisplacement';
import { FaFileDownload } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

export const Hero = () => {
  return (
    // Header section
    <header className="h-screen w-full bg-[#15161B] sm:h-[55vh]">
      <div className="absolute z-[100] flex h-screen w-full flex-col items-center justify-center px-2 text-center text-[#ffffff] sm:h-[55vh] ">
        {/* Heading */}
        <h1 className="mb-3 text-4xl font-semibold sm:text-5xl md:text-6xl">Tomas Le Vesconte</h1>

        {/* Bio */}
        <p className="max-w-md mb-6">
          <strong>Web Developer</strong> & aspiring <strong>Software Engineer</strong> based in the United Kingdom.
        </p>

        {/* Icons */}
        <div className="flex flex-row justify-between text-xl">
          <Link title="GitHub" href="https://github.com/tom-lv">
            <SiGithub className="mx-4" />
          </Link>
          <Link title="LinkedIn" href="https://www.linkedin.com/in/tomas-l-853701195/">
            <SiLinkedin className="mx-4" />
          </Link>
          <a title="Sorry, not available right now">
            <FaFileDownload className="mx-4" />
          </a>
          <Link title="Email" href="mailto:tomas.levesconte@gmail.com">
            <SiGmail className="mx-4" />
          </Link>
        </div>
      </div>

      {/* Icosahedron Displacement Object */}
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <IcosahedronDisplacement />
      </Canvas>
    </header>
  );
};

export default Hero;
