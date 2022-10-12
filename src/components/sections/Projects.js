import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Typer from '../../assets/typer-screenshot-in-browser.jpg'

const Projects = () => {
  return (
    // Projects section
    <section id='projects' className='pt-[150px]'>
      {/* Projects Header */}
      <h2 id='education-heading' className='text-2xl font-medium mb-9'>
        <span className='text-xl font-normal text-gray-700'>03. </span> 
        Projects
      </h2>

      {/* Add projects here */}
      <div className='flex flex-row flex-wrap'>
      <figure className='flex flex-col max-w-[237px] rounded-md shadow-2xl mr-7'>
          <img src={Typer} className='rounded-t-md'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-semibold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='font-medium italic mb-2'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='rounded-md bg-gray-500 text-white py-1 px-2 mr-1 mt-2'>JavaScript</span>
              <span className='rounded-md bg-gray-500 text-white py-1 px-2 mr-1 mt-2'>HTML</span>
              <span className='rounded-md bg-gray-500 text-white py-1 px-2 mr-1 mt-2'>CSS</span>
            </div>
          </figcaption>
        </figure>

        <figure className='flex flex-col max-w-[237px] rounded-md shadow-2xl mr-7'>
          <img src={Typer} className='rounded-t-md'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-semibold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1'><FontAwesomeIcon icon={faGithub}/></a>
                <a className=''><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='font-medium italic mb-2'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
          </figcaption>
        </figure>

        <figure className='flex flex-col max-w-[237px] rounded-md shadow-2xl'>
          <img src={Typer} className='rounded-t-md'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-semibold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1'><FontAwesomeIcon icon={faGithub}/></a>
                <a className=''><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='font-medium italic mb-2'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Projects