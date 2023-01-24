import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    // Hero section
    <div id='header-section'>
      {/* Header section */}
      <header className='absolute z-[100] flex flex-col justify-center items-center h-screen sm:h-[83vh] w-screen px-2 text-[#ffffff] text-center'>

      {/* Heading */}
      <h1 className='mb-3 text-4xl font-semibold sm:text-5xl md:text-6xl'>Tomas Le Vesconte</h1>

      {/* Bio */}
      <p className='max-w-md mb-6'>
        Aspiring 
        <span className='font-bold'> Software Engineer </span>
        & 
        <span className='font-bold'> CompSci Graduate </span>
        from South Wales, United Kingdom.
      </p>

      {/* Icons */}
      <div id='hero-icons' className='flex flex-row justify-between text-xl'>
        <a id='github-icon' title='GitHub' href='https://github.com/tom-lv'><FontAwesomeIcon icon={faGithub} className='mx-4' /></a>
        <a id='linkedin-icon' title='LinkedIn' href='https://www.linkedin.com/in/tomas-l-853701195/'><FontAwesomeIcon icon={faLinkedin} className='mx-4' /></a>
        <a id='cv-icon' title='CV'><FontAwesomeIcon icon={faFileArrowDown} className='mx-4' /></a>
        <a id='mail-icon' title='Email' href='mailto:tomas.levesconte@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='mx-4' /></a>
      </div>
    </header>
    </div>
  )
}

export default Header