import React from 'react';
import Link from 'next/link';

const Projects = ({ heading, projects }: any) => {
  return (
    // Projects section
    <section id="projects" className="mx-auto flex flex-col pt-[100px]">
      {/* Projects Header */}
      <h2 id="projects-heading" className="mb-9 flex items-center text-2xl font-semibold text-[#b5b5b5]">
        <span id="number-prefix" className="mr-3 text-xl font-normal text-gray-700">
          03.{' '}
        </span>
        {heading}
        <div id="after-line" className="ml-5 h-px w-[180px] bg-gray-700/30 sm:w-[130px] md:w-[220px] lg:w-[290px]"></div>
      </h2>

      {/* Add projects here */}
      <div id="project-figures" className="flex flex-row flex-wrap xl:flex-nowrap">
        {projects.map((project: any, index: number) => {
          return (
            <div key={index} className="mx-3 my-3 w-full rounded-md bg-[#15161B] px-4 py-4 lg:max-w-[315px]">
              <div className="flex flex-row justify-between">
                <h3 className="mb-2 text-lg font-semibold text-[#b5b5b5]">{project.title}</h3>
                <div className="text-gray-700">
                  <p>{project.date}</p>
                </div>
              </div>
              <p className="mb-2 font-medium italic text-[#b5b5b5]">{project.type}</p>
              <p>{project.description}</p>
              <div className="mb-2 mt-2 flex flex-row flex-wrap text-[#b5b5b5]">
                {project.technologies.map((technology: any, index: number) => {
                  return (
                    <span key={index} className="mr-1 py-1 pr-1 font-semibold">
                      {technology.title}
                    </span>
                  );
                })}
              </div>
              <div className="text-md">
                {project.github.map((github: any, index: number) => {
                  return (
                    <Link key={index} className="pr-3 text-[#b5b5b5] hover:text-[#fff]" href={github.link}>
                      {github.title}
                    </Link>
                  );
                })}
                <Link className=" text-[#b5b5b5] hover:text-[#fff]" href={project.link}>
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
