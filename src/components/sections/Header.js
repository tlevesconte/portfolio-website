import React from 'react'

const Header = () => {
  return (
    // mobile responsive container 
    <div id='custom-container' className='mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-3xl'>
      {/* Header section */}
      <header className='absolute z-[100] flex flex-col justify-center h-screen text-[#ffffff]'>
      {/* Introductory statement */}
      <p className='pb-1'>Hi, my name is </p>

      {/* Heading */}
      <h1 className='text-6xl pb-3'>Tomas Le Vesconte</h1>

      {/* Bio */}
      <p className='max-w-md'>
        I'm an aspiring 
        <span className='font-bold'> Software Engineer </span>
        & 
        <span className='font-bold'> CompSci Graduate </span>
        from South Wales, United Kingdom.
      </p>

      {/* Icons */}
    </header>
    </div>
  )
}

export default Header