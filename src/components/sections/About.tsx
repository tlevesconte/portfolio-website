import React from 'react';
import Image from 'next/image';

// Assets
import ProfilePicture from '../../../public/images/profile-picture.jpg';

const About = ({ heading, paragraph1, paragraph2, skillsIntro, skills1, skills2, skills3 }: any) => {
  return (
    // About section
    <section className="mx-auto max-w-[975px] pt-[100px]">
      {/* About Heading*/}
      <h2 className="mb-9 flex items-center text-2xl font-semibold text-[#b5b5b5]">
        <span className="mr-3 text-xl font-normal text-gray-700">01. </span>
        {heading}
        <div className="ml-5 h-px w-[130px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* About Content */}
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        {/* About Text */}
        <div className="basis-[46rem]">
          <p>{paragraph1}</p>
          <p className="mt-3">
            {paragraph2} {/* Space */}
            <a href="mailto:tomas.levesconte@gmail.com" className="font-bold text-[#b5b5b5] hover:text-[#fff] hover:underline">
              tomas.levesconte@gmail.com
            </a>
          </p>

          {/* Skills */}
          <p className="mt-3">{skillsIntro}</p>
          <ul className="mt-3 flex flex-row text-[#b5b5b5]">
            <div>
              {skills1.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-sm sm:text-base" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
            <div className="ml-7">
              {skills2.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-sm sm:text-base" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
            <div className="ml-7">
              {skills3.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-sm sm:text-base" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

        {/* About Picture */}
        <div className="basis-41 max-h-[225px] max-w-[225px] pl-0 pt-10 grayscale hover:grayscale-0 sm:max-h-[250px] sm:max-w-[250px] sm:pl-10 md:pt-0">
          <Image src={ProfilePicture} className="rounded-md" alt="Picture of Me"></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
