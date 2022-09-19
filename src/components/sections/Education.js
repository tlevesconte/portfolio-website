import React from 'react'

import Cardiff from '../../assets/cardiff-university-logo.png'
import CardiffMet from '../../assets/cardiff-met-logo.png'

const Education = () => {
  return (
    // Education section
    <section id='education' className='flex flex-col max-w-[600px] pt-[150px] mx-auto'>
      {/* Education Header */}
      <h2 id='education-heading' className='text-2xl font-medium mb-9'>
        <span className='text-xl'>02. </span> 
        Education
      </h2>

      {/* Education Content */}
      <div id='education-content'>
        {/* University 1 */}
        <div id='cardiff' className='flex flex-row mb-6'>
          <div id='cardiff-logo' className='max-w-[70px] mr-3'>
            <img src={Cardiff} alt='Cardiff University Logo'></img>
          </div>
          <div id='cardiff-text'>
            <h3 className='font-medium'>Cardiff University</h3>
            <p>October 2021 - Present</p>
            <p className='font-medium italic'>Master of Science - MSc, Software Engineering</p>
            <ul className='mt-3'>
              <li>
                • Studied Software Engineering modules such as Agile Software Development, 
                DevOps, Delivering User Experience, Testing, Web Applications and Data 
                Manipulation.
              </li>
            </ul>
          </div>
        </div>

        {/* University 2 */}
        <div id='cardiff-met' className='flex flex-row'>
          <div id='cardiff-met-logo' className='max-w-[70px] mr-3'>
            <img src={CardiffMet} alt='Cardiff Met University Logo'></img>
          </div>
          <div id='cardiff-met-text'>
            <h3 className='font-medium'>Cardiff Metropolitan University</h3>
            <p>September 2018 - June 2021</p>
            <p className='font-medium italic'>Bachelor of Science - BSc (Hons), Computer Science</p>
            <ul className='mt-3'>
              <li className='mb-2'>
                • Studied Computer Science topics such as Artificial Intelligence, 
                Software Engineering, Programming, Database Management and Networking.
              </li>
              <li>• Graduated with a First Class Honours.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education