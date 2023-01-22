import React from 'react'

const Contact = () => {
  return (
    // Contact section
    <section id='contact' className='pt-[180px] flex flex-col justify-center items-center text-center'>
      {/* Contact Header */}
      
      <h2 id='contact-heading' className='flex items-center text-3xl font-semibold mb-9 text-[#b5b5b5]'>
        <span className='mr-3 text-xl font-normal text-gray-700'>04. </span> 
        Get In Touch
      </h2>

      <p className='max-w-lg'>
        I'm currently looking for work, so if you have an opportunity you'd like to dicuss, don't hesitate to contact me! 
      </p>
      {/* Button */}
      <a className='mt-5 text-base text-white bg-[#111111] rounded-md py-2 px-2' href='mailto:tomas.levesconte@gmail.com'>Message me!</a>
    </section>
  )
}

export default Contact
