import React from 'react';
import Image from 'next/image';

const Education = ({ heading, universities }: any) => {
  return (
    // Education section
    <section id="education" className="mx-auto flex max-w-[625px] flex-col pt-[100px]">
      {/* Education Header */}
      <h2 id="education-heading" className="mb-9 flex items-center text-2xl font-semibold text-[#b5b5b5]">
        <span id="number-prefix" className="mr-3 text-xl font-normal text-gray-700">
          02.{' '}
        </span>
        {heading}
        <div id="after-line" className="ml-5 h-px w-[180px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* Education Content */}
      <div id="education-content">
        {universities.map((university: any, index: number) => {
          return (
            <div key={index} className="mb-6 flex flex-row">
              <div className="mr-3 max-w-[79px]">
                <Image src={university.img} alt={university.alt}></Image>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#b5b5b5]">{university.title}</h3>
                <p className="text-[#777]">{university.date}</p>
                <p className="font-medium italic">{university.qualification}</p>
                <ul className={'mt-3 text-sm'}>
                  <li className="mb-2">
                    <span className="font-semibold">• </span>
                    {university.info}
                  </li>
                  <li className="text-[#d4d4d4]">
                    <span className="font-semibold">• </span>
                    {university.grade}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
