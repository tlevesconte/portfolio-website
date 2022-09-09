import React from 'react'

const About = () => {
  return (
    <section className='about pt-[150px]'>
      {/* About */}
      <h2 className='text-2xl font-bold'>About</h2>
      <p>
        Hi, my name is Tomas and I’m a British/Swedish developer based in the UK. 
        My interest in software development first began when working on a programming 
        module for college. The task involved creating an event-driven application in 
        Visual Studio using VB.NET. Having never done programming before, I was surprised 
        by how much I enjoyed it.
      </p>
      <p>
      After completing the module, I found myself working on personal projects in my spare 
      time and even some freelance web development work. These days I’m focused on learning 
      new technologies and improving on the ones I know.
      </p>

      {/* Interests */}
      <h3 className='font-semibold'>Interests</h3>
      <p>Reading, audiobooks, movies, motorbikes, running and gaming.</p>

      {/* Skills */}
      <h3 className='font-semibold'>Skills</h3>
      <p>Java, JavaScript, React JS, HTML, CSS, MySQL, Wordpress</p>
    </section>
  )
}

export default About