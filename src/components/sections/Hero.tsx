import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import IcosahedronDisplacement from '../3D/IcosahedronDisplacement';
import DOMPurify from 'isomorphic-dompurify'; // Stop Cross Site Scripting (XSS)

/**
 * Make certain words bold from a given input
 * @param input
 * @returns
 */
function makeWordsBold(input: any) {
  const keywords = ['Web Developer', 'Software Engineer'];
  return input.replace(new RegExp('(\\b)(' + keywords.join('|') + ')(\\b)', 'ig'), '$1<strong>$2</strong>$3');
}

export const Hero = ({ heading, bio, socials }: any) => {
  return (
    // Header section
    <header className="h-screen w-full bg-[#15161B] sm:h-[55vh]">
      <div className="absolute z-[100] flex h-screen w-full flex-col items-center justify-center px-2 text-center text-[#ffffff] sm:h-[55vh] ">
        {/* Heading */}
        <h1 className="mb-3 text-4xl font-semibold sm:text-5xl md:text-6xl">{heading}</h1>

        {/* Bio */}
        <p className="mb-6 max-w-md" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(makeWordsBold(bio)) }}></p>

        {/* Icons */}
        <div className="flex flex-row justify-between text-xl">
          {socials.map((social: any, index: number) => {
            if (social.title == 'cv') {
              return (
                <Link className="mx-4" key={index} title={social.title} href={social.url}>
                  {<social.icon />}
                </Link>
              );
            } else {
              return (
                <Link className="mx-4" key={index} title={social.title} href={social.url}>
                  {<social.icon />}
                </Link>
              );
            }
          })}
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
