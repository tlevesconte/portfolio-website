import React from 'react'

const Contact = () => {
  return (
    // Contact section
    <section id='contact' className='pt-[150px] flex flex-col justify-center items-center text-center'>
      {/* Contact Header */}
      
      <h2 id='education-heading' className='text-2xl font-medium mb-9'>
        <span className='text-xl font-normal'>04. </span> 
        Get In Touch
      </h2>

      <p className='max-w-lg'>
        If you have something you'd like to discuss, 
        send me a message and I'll do my best 
        to get back to you.
      </p>
      {/* Button */}
      <a className='mt-5 text-base border-solid border border-black rounded-md py-2 px-2' href='mailto:tomas.levesconte@gmail.com'>Message me!</a>
    </section>
  )
}

export default Contact
