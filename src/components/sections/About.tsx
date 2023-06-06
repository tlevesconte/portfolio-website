import React from 'react';
import Image from 'next/image';

const About = ({ data }: any) => {
  return (
    // About section
    <section id="about" className="mx-auto max-w-[975px] pt-[100px]">
      {/* About Heading*/}
      <h2 className="mb-9 flex items-center text-2xl font-semibold text-secondary-grey">
        <span className="mr-3 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-xl font-normal text-transparent">01. </span>
        {data.sectionHeading}
        <div className="ml-5 h-px w-[130px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* About Content */}
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        {/* About Text */}
        <div className="basis-[46rem]">
          <p>{data.firstParagraph}</p>
          <p className="mt-3">
            {data.secondParagraph}
            <a href={data.email} className="font-bold text-secondary-grey hover:text-white hover:underline">
              email
            </a>
          </p>

          {/* Skills */}
          <p className="mt-3">{data.technologiesIntroduction}</p>
          <ul className="mt-10 flex flex-row justify-center text-secondary-grey sm:mt-3 sm:justify-normal">
            <div>
              {data.firstTechnologiesCol.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-xs sm:text-sm" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
            <div className="ml-3 sm:ml-7">
              {data.secondTechnologiesCol.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-xs sm:text-sm" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
            <div className="ml-3 sm:ml-7">
              {data.thirdTechnologiesCol.map((skill: any, index: number) => {
                return (
                  <li className="flex flex-row items-center text-xs sm:text-sm" key={index}>
                    {<skill.icon className="mr-1" />}
                    {skill.title}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

        {/* About Picture */}
        <div className="basis-41 max-h-[225px] max-w-[225px] pl-0 pt-10 sm:max-h-[250px] sm:max-w-[250px] sm:pl-10 md:pt-0">
          <Image src={data.profilePicture} className="rounded-md" alt={data.alt} placeholder="blur"></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
