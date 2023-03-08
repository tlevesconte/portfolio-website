import React, { useRef } from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// Framer motion
import { useInView } from "framer-motion"

// Assets
import Typer from '../../assets/typer-screenshot-in-browser.jpg'
import Portfolio from '../../assets/my-portfolio-website-in-browser.png'

const Projects = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    // Projects section
    <section id='projects' className='flex flex-col max-w-[800px] pt-[200px] mx-auto' style={{
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
      <div id='project-figures' className='flex flex-row flex-wrap justify-center md:flex-nowrap'>
        <figure className='flex flex-col md:max-w-[375px] shadow-2xl mb-10 md:mb-0 md:mr-[55px]'>
            <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
            <figcaption className='px-3 py-3'>
              <div className='flex flex-row justify-between'>
                <h3 className='text-lg font-semibold text-[#b5b5b5]'>Typer</h3>
                <div className='text-lg'>
                  <a className='pr-2 text-xl text-[#b5b5b5]' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                  <a className='text-xl text-[#b5b5b5]' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
                </div>
              </div>
              <p className='mb-2 italic font-medium text-[#b5b5b5]'>Web Application</p>
              <p>A minimalistic typing test inspired by Monkeytype.</p>
              <div className='flex flex-row flex-wrap text-[#b5b5b5]'>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
              </div>
            </figcaption>
        </figure>

        <figure className='flex flex-col md:max-w-[375px] shadow-2xl'>
            <img src={Portfolio} className='max-h-[240px]' alt='Portfolio'></img>
            <figcaption className='px-3 py-3'>
              <div className='flex flex-row justify-between'>
                <h3 className='text-lg font-semibold text-[#b5b5b5]'>My Portfolio Site</h3>
                <div className='text-lg'>
                  <a className='pr-2 text-xl text-[#b5b5b5]' href='https://github.com/tom-lv/my-portfolio-website'><FontAwesomeIcon icon={faGithub}/></a>
                  <a className='text-xl text-[#b5b5b5]' href='https://tomaslevesconte.com'><FontAwesomeIcon icon={faLink}/></a>
                </div>
              </div>
              <p className='mb-2 italic font-medium text-[#b5b5b5]'>Web Application</p>
              <p>Features a few projects I have worked on, plus links.</p>
              <div className='flex flex-row flex-wrap text-[#b5b5b5]'>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>React</span>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>TailwindCSS</span>
                <span className='px-1 py-1 mt-2 mr-1 font-semibold'>RTF</span>
              </div>
            </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Projects