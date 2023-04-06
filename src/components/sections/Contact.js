import React, { useRef } from 'react'

// Framer motion
import { useInView } from "framer-motion"

const Contact = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    // Contact section
    <section id='contact' className='pt-[150px] flex flex-col justify-center items-center text-center'
    style={{
      transform: isInView ? "none" : "translatey(5%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
    }}>
      {/* Contact Header */}
      
      <h2 ref={ref} id='contact-heading' className='flex items-center text-3xl font-semibold mb-9 text-[#b5b5b5]'>
        <span className='mr-3 text-xl font-normal text-gray-700'>04. </span> 
        Get In Touch
      </h2>

      <p className='max-w-lg'>
        I'm currently looking for work, so if you have an opportunity you'd like to dicuss, don't hesitate to contact me! 
      </p>
      {/* Button */}
      <a className='mt-5 text-base text-white bg-[#15161B] hover:bg-[#0d0d10] rounded-md py-3 px-3 transition-colors' href='mailto:tomas.levesconte@gmail.com'>Message me!</a>
    </section>
  )
}

export default Contact
