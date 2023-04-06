import React, { useRef } from 'react'

// Framer motion
import { useInView } from "framer-motion"

const Projects = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    // Projects section
    <section id='projects' className='flex flex-col pt-[100px] mx-auto' style={{
      transform: isInView ? "none" : "translatey(5%)",
      opacity: isInView ? 1 : 0,  
      transition: "all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
    }}>
      
      {/* Projects Header */}
      <h2 ref={ref} id='projects-heading' className='flex items-center text-2xl font-semibold mb-9 text-[#b5b5b5]'>
        <span id='number-prefix' className='mr-3 text-xl font-normal text-gray-700'>03. </span> 
        Projects
        <div id='after-line' className='h-px w-[180px] sm:w-[130px] md:w-[220px] lg:w-[290px] bg-gray-700/30 ml-5'></div>
      </h2>
      
      {/* Add projects here */}
      <div id='project-figures' className='flex flex-row flex-wrap xl:flex-nowrap'>

        <div className='w-full lg:max-w-[315px] px-4 py-4 bg-[#15161B] rounded-md mx-3 my-3'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-lg font-semibold text-[#b5b5b5] mb-2'>Java Chess</h3>
            <div className='text-gray-700'>
              <p>2023</p>
            </div>
          </div>
            <p className='mb-2 italic font-medium text-[#b5b5b5]'>Desktop Application</p>
            <p>A lightweight Chess GUI that I'm currently working on.</p>
            <div className='flex flex-row flex-wrap text-[#b5b5b5] mt-2 mb-2'>
              <span className='py-1 pr-1 mr-1 font-semibold'>Java</span>
              <span className='px-1 py-1 mr-1 font-semibold'>JavaFX</span>
            </div>
            <div className='text-md'>
              <a className='pr-3 text-[#b5b5b5] hover:text-[#fff]' href='https://github.com/tom-lv/java-chess'>GitHub</a>
            </div>
        </div>

        <div className='w-full lg:max-w-[315px] px-4 py-4 bg-[#15161B] rounded-md mx-3 my-3'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-lg font-semibold text-[#b5b5b5] mb-2'>Personal Website</h3>
            <div className='text-gray-700'>
              <p>2023</p>
            </div>
          </div>
            <p className='mb-2 italic font-medium text-[#b5b5b5]'>Web Application</p>
            <p>My personal website. Features some of the projects that I have worked on.</p>
            <div className='flex flex-row flex-wrap text-[#b5b5b5] mt-2 mb-2'>
              <span className='py-1 pr-1 mr-1 font-semibold'>ReactJS</span>
              <span className='px-1 py-1 mr-1 font-semibold'>RTF</span>
              <span className='px-1 py-1 mr-1 font-semibold'>TailwindCSS</span>
            </div>
            <div className='text-md'>
              <a className='pr-3 text-[#b5b5b5] hover:text-[#fff]' href='https://github.com/tom-lv/my-portfolio-website'>GitHub</a>
              <a className=' text-[#b5b5b5] hover:text-[#fff]' href='https://tomaslevesconte.com'>Link</a>
            </div>
        </div>
        
        <div className='w-full lg:max-w-[315px] px-4 py-4 bg-[#15161B] rounded-md mx-3 my-3'>
          <div className='flex flex-row justify-between'>
            <h3 className='text-lg font-semibold text-[#b5b5b5] mb-2'>Typer</h3>
            <div className='text-gray-700'>
              <p>2022</p>
            </div>
          </div>
            <p className='mb-2 italic font-medium text-[#b5b5b5]'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap text-[#b5b5b5] mt-2 mb-2'>
              <span className='py-1 pr-1 mr-1 font-semibold rounded-sm'>HTML</span>
              <span className='px-1 py-1 mr-1 font-semibold'>CSS</span>
              <span className='px-1 py-1 mr-1 font-semibold'>JavaScript</span>
            </div>
            <div className='text-md'>
              <a className='pr-3 text-[#b5b5b5] hover:text-[#fff]' href='https://github.com/tom-lv/typer'>GitHub</a>
              <a className=' text-[#b5b5b5] hover:text-[#fff]' href='https://tom-lv.github.io/typer/'>Link</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects