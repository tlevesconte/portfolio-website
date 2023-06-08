import React from 'react';
import Image from 'next/image';

const Education = ({ data }: any) => {
  return (
    // Education section
    <section id="education" className="mx-auto flex max-w-[625px] flex-col pt-[100px]">
      {/* Education Header */}
      <h2 className="flex items-center text-2xl font-semibold mb-9 text-secondary-grey">
        <span className="mr-3 text-xl font-normal text-gray-700">02. </span>
        {data.sectionHeading}
        <div className="ml-5 h-px w-[180px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* Education Content */}
      <div>
        {data.universities.map((university: any, index: number) => {
          return (
            <div key={index} className="flex flex-row mb-6">
              <div className="mr-3 max-w-[79px]">
                <Image src={university.logo} alt={university.alt} placeholder="blur"></Image>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-grey">{university.title}</h3>
                <p className="text-dark-grey">{university.date}</p>
                <p className="italic font-medium">{university.qualification}</p>
                <ul className={'mt-3 text-sm'}>
                  <li className="mb-2">
                    <span className="font-semibold">• </span>
                    {university.information}
                  </li>
                  <li className="text-off-white">
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
