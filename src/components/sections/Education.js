import React, { useState } from 'react'

// Assets
import Cardiff from '../../assets/cardiff-university-logo.png'
import CardiffMet from '../../assets/cardiff-met-logo.png'

const Education = () => {
  // ReadMore/ShowLess button 1
  // const [isActive1, setActive1] = useState("false");
  // const handleToggle1 = () => {
  //   setActive1(!isActive1);
  // };
  
  // ReadMore/ShowLess button 2
  // const [isActive2, setActive2] = useState("false");
  // const handleToggle2 = () => {
  //   setActive2(!isActive2);
  // };

  return (
    // Education section
    <section id='education' className='flex flex-col max-w-[625px] pt-[180px] mx-auto'>
      {/* Education Header */}
      <h2 id='education-heading' className='flex items-center text-2xl font-semibold mb-9 text-[#b5b5b5]'>
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
            <h3 className='text-lg font-semibold text-[#aaa]'>Cardiff University</h3>
            <p className='text-[#777]'>October 2021 - December 2022</p>
            <p className='italic font-medium'>Master of Science - MSc Software Engineering</p>
            {/* isActive1 ? 'mt-3 hidden text-sm' :  */}
            <ul className={'mt-3 text-sm'}>
              <li>
                <span className='font-semibold'>• </span>Studied Agile Software Development, 
                DevOps, Delivering User Experience, Testing, Web Application Development and Data 
                Manipulation.
              </li>
            </ul>
            {/* <button onClick={handleToggle1} className='mt-3'>{isActive1 ? 'Read more' : 'Show less'}</button> */}
          </div>
        </div>

        {/* University 2 */}
        <div id='cardiff-met' className='flex flex-row'>
          <div id='cardiff-met-logo' className='max-w-[79px] mr-3'>
            <img src={CardiffMet} alt='Cardiff Met University Logo'></img>
          </div>
          <div id='cardiff-met-text'>
            <h3 className='font-semibold text-lg text-[#aaa]'>Cardiff Metropolitan University</h3>
            <p className='text-[#777]'>September 2018 - June 2021</p>
            <p className='italic font-medium'>Bachelor of Science - BSc (Hons) Computer Science</p>
            {/* isActive2 ? 'mt-3 hidden text-sm' :  */}
            <ul className={'mt-3 text-sm'}>
              <li className='mb-2'>
                <span className='font-semibold'>• </span>Studied Artificial Intelligence, 
                Software Engineering, Programming, Database Management and Networking.
              </li>
              <li><span className='font-semibold'>• </span>Graduated with a First Class Honours.</li>
            </ul>
            {/* <button onClick={handleToggle2} className='mt-3'>{isActive2 ? 'Read more' : 'Show less'}</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education