import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faJava, faJs, faReact, faHtml5, faCss3, faWordpress } from '@fortawesome/free-brands-svg-icons'

// Assets
import ProfilePicture from '../../assets/profile-picture.jpg'

const About = () => {
  return (
    // About section
    <section id='about' className='pt-[120px]'>
        {/* About Heading*/}
        <h2 id='about-heading' className='text-2xl font-medium mb-9'>
          <span className='text-xl font-normal'>01. </span> 
          About Me
        </h2>

        {/* About Content */}
        <div id='about-content' className='flex flex-wrap justify-center  sm:flex-nowrap'>
          {/* About Text */}
          <div id='about-text' className='basis-[36rem]'>
            <p>
              Hi, my name is Tomas and I’m a British/Swedish developer based in the UK. 
              My interest in software development first began when working on a programming 
              module for college. The task involved creating an event-driven application in 
              Visual Studio using VB.NET. Having never done programming before, I was surprised 
              by how much I enjoyed it.
            </p>
            <p className='mt-3'>
            After completing the module, I found myself working on personal projects in my spare 
            time and even some freelance web development work. These days I’m focused on learning 
            new technologies and improving on the ones I already know. If you have an opportunity you'd like
            to discuss, don't hesitate to contact me! @ 
            <span> </span> {/* Space */}
            <a href='mailto:tomas.levesconte@gmail.com' className='font-medium hover:underline'>tomas.levesconte@gmail.com</a>
            </p>

            {/* Skills */}
            <p className='mt-3'>Here are some of the technologies I've used recently: </p>
            <ul id='skills-list' className='flex flex-row mt-3'>
              <div id='col-1'>
                <li><FontAwesomeIcon icon={faJava}/> Java</li>
                <li><FontAwesomeIcon icon={faJs}/> JavaScript</li>
                <li><FontAwesomeIcon icon={faReact}/> React JS</li>
              </div>             
              <div id='col-2' className='ml-7'>
                <li><FontAwesomeIcon icon={faHtml5}/> HTML</li>
                <li><FontAwesomeIcon icon={faCss3}/> CSS</li>
                <li><FontAwesomeIcon icon={faDatabase}/> MySQL</li>
              </div>
              <div id='col-3' className='ml-7'>
                <li><FontAwesomeIcon icon={faWordpress}/> Wordpress</li>
              </div>  
            </ul>
          </div>
          
          {/* About Picture */}
          <div id='about-picture' className='basis-41 max-w-[225px] max-h-[225px] sm:max-w-[250px] sm:max-h-[250px] grayscale hover:grayscale-0 drop-shadow-2xl pt-10 pl-0 sm:pt-0 sm:pl-10'>
            <img src={ProfilePicture} className='rounded-md' alt='Me'></img>
          </div>
        </div>
    </section>
  )
}

export default About