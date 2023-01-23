import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Typer from '../../assets/typer-screenshot-in-browser.jpg'

const Projects = () => {
  return (
    // Projects section
    <section id='projects' className='pt-[180px]'>
      {/* Projects Header */}
      <h2 id='projects-heading' className='flex items-center text-2xl font-semibold mb-9 text-[#b5b5b5]'>
        <span id='number-prefix' className='mr-3 text-xl font-normal text-gray-700'>03. </span> 
        Projects
        <div id='after-line' className='h-px w-[180px] sm:w-[130px] md:w-[220px] lg:w-[290px] bg-gray-700/30 ml-5'></div>
      </h2>

      {/* Add projects here */}
      <div className='flex flex-row flex-wrap'>
      <figure className='flex flex-col max-w-[320px] shadow-2xl mr-6'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure>

        {/* <figure className='flex flex-col max-w-[280px] shadow-2xl mr-6'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure>

        <figure className='flex flex-col max-w-[280px] shadow-2xl'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure> */}
      </div>
    </section>
  )
}

export default Projects