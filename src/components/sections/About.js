import React from 'react'
import ProfilePicture from '../../assets/profile-picture.jpg'

const About = () => {
  return (
    // About section
    <section id='about' className='pt-[120px]'>
        {/* About Heading*/}
        <h2 className='text-2xl font-medium mb-8'>
          <span className='text-xl'>01. </span> 
          About Me
        </h2>
        {/* About Content */}
        <div id='about-content' className='flex flex-wrap justify-center  md:flex-nowrap '>
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
            new technologies and improving on the ones I know. If you have an opportunity you'd like
            to discuss, don't hesitate to contact me! @ 
            <a href='mailto:tomas.levesconte@gmail.com' className='font-medium hover:underline'> tomas.levesconte@gmail.com</a>
            </p>

            {/* Interests */}
            <h3 className='font-semibold mt-3'>Interests</h3>
            <p>Reading, audiobooks, movies, motorbikes, running and gaming.</p>

            {/* Skills */}
            <h3 className='font-semibold mt-3'>Skills</h3>
            <p>Java, JavaScript, React JS, HTML, CSS, MySQL, Wordpress</p>
          </div>
          {/* About Picture */}
          <div id='about-picture' className='basis-41 max-w-[250px] max-h-[250px] grayscale hover:grayscale-0 pt-10 pl-0 md:pt-0 sm:pl-10'>
            <img src={ProfilePicture} className='rounded-md' alt='Tomas Le Vesconte Profile Picture'></img>
          </div>
        </div>
    </section>
  )
}

export default About