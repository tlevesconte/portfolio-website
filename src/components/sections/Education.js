import React, { useRef } from 'react'

// Framer motion
import { useInView } from "framer-motion"

// Assets
import Cardiff from '../../assets/cardiff-university-logo.png'
import CardiffMet from '../../assets/cardiff-met-logo.png'

const Education = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    // Education section
    <section id='education' className='flex flex-col max-w-[625px] pt-[100px] mx-auto'
    style={{
      transform: isInView ? "none" : "translatey(5%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
    }}>
      {/* Education Header */}
      <h2 ref={ref} id='education-heading' className='flex items-center text-2xl font-semibold mb-9 text-[#b5b5b5]'>
        <span id='number-prefix' className='mr-3 text-xl font-normal text-gray-700'>02. </span> 
        Education
        <div id='after-line' className='h-px w-[180px] sm:w-[130px] md:w-[220px] lg:w-[290px] bg-gray-700/30 ml-5'></div>
      </h2>

      {/* Education Content */}
      <div id='education-content'>
        {/* University 1 */}
        <div id='cardiff' className='flex flex-row mb-6'>
          <div id='cardiff-logo' className='max-w-[79px] mr-3'>
            <img src={Cardiff} alt='Cardiff University Logo'></img>
          </div>
          <div id='cardiff-text'>
            <h3 className='text-lg font-semibold text-[#b5b5b5]'>Cardiff University</h3>
            <p className='text-[#777]'>October 2021 - December 2022</p>
            <p className='italic font-medium'>Master of Science - MSc Software Engineering</p>
            <ul className={'mt-3 text-sm'}>
              <li className='mb-2'>
                <span className='font-semibold'>• </span>Studied Agile Software Development, 
                DevOps, Delivering User Experience, Testing, Web Application Development and Data 
                Manipulation.
              </li>
              <li><span className='font-semibold'>• </span>Graduated with a Merit.</li>
            </ul>
          </div>
        </div>

        {/* University 2 */}
        <div id='cardiff-met' className='flex flex-row'>
          <div id='cardiff-met-logo' className='max-w-[79px] mr-3'>
            <img src={CardiffMet} alt='Cardiff Met University Logo'></img>
          </div>
          <div id='cardiff-met-text'>
            <h3 className='font-semibold text-lg text-[#b5b5b5]'>Cardiff Metropolitan University</h3>
            <p className='text-[#777]'>September 2018 - June 2021</p>
            <p className='italic font-medium'>Bachelor of Science - BSc (Hons) Computer Science</p>
            <ul className={'mt-3 text-sm'}>
              <li className='mb-2'>
                <span className='font-semibold'>• </span>Studied Artificial Intelligence, 
                Software Engineering, Programming, Database Management and Networking.
              </li>
              <li><span className='font-semibold'>• </span>Graduated with a First Class Honours.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education