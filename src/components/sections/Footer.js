import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    // Footer section
    <footer className='flex flex-col justify-center items-center mx-auto pt-[150px] pb-[10px]'>
      {/* Footer */}
      {/* <p className='font-bold'>Footer</p> */}
      <div className='hover:text-[#fff]'>
        <a id='github-icon' href='https://github.com/tom-lv/my-portfolio-website'><FontAwesomeIcon icon={faGithub} className='mx-auto' /> Created by Tomas Le Vesconte</a>
      </div>
      {/* Add footer stuff here */}
    </footer>
  )
}

export default Footer