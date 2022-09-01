import React from 'react'

const About = () => {
  return (
    <section className='about'>
      {/* About */}
      <h1 className='font-bold'>About</h1>
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
      <h2 className='font-semibold'>Interests</h2>
      <p>Audiobooks, movies, motorbikes, running and gaming.</p>

      {/* Skills */}
      <h2 className='font-semibold'>Skills</h2>
      <p>Java, JavaScript, React JS, HTML, CSS, MySQL, Wordpress</p>
    </section>
  )
}

export default About