import React from 'react';
import Link from 'next/link';

const Projects = ({ data }: any) => {
  return (
    // Projects section
    <section id="projects" className="mx-auto flex flex-col pt-[100px]">
      {/* Projects Header */}
      <h2 className="flex items-center text-2xl font-semibold mb-9 text-secondary-grey">
        <span className="mr-3 text-xl font-normal bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">03. </span>
        {data.sectionHeading}
        <div className="ml-5 h-px w-[180px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* Add projects here */}
      <div className="flex flex-row flex-wrap xl:flex-nowrap">
        {data.projects.map((project: any, index: number) => {
          return (
            <div key={index} className="mx-3 my-3 w-full rounded-md bg-primary-dark px-4 py-4 lg:max-w-[315px]">
              <div className="flex flex-row justify-between">
                <h3 className="mb-2 text-lg font-semibold text-secondary-grey">{project.title}</h3>
                <div className="text-gray-700">
                  <p>{project.date}</p>
                </div>
              </div>
              <p className="mb-2 italic font-medium text-secondary-grey">{project.type}</p>
              <p>{project.description}</p>
              <div className="flex flex-row flex-wrap mt-2 mb-2 text-secondary-grey">
                {project.technologies.map((technology: any, index: number) => {
                  return (
                    <span key={index} className="py-1 pr-1 mr-1 font-semibold">
                      {technology.title}
                    </span>
                  );
                })}
              </div>
              <div className="text-md">
                {project.github.map((github: any, index: number) => {
                  return (
                    <Link key={index} className="pr-3 text-secondary-grey hover:text-white" href={github.link}>
                      {github.title}
                    </Link>
                  );
                })}
                <Link className=" text-secondary-grey hover:text-white" href={project.link}>
                  Link
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
