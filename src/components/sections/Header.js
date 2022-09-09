import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-col justify-center h-screen text-[#ffffff] '>
      {/* Introductory statement */}
      <p className='pb-1'>Hi, my name is </p>

      {/* Heading */}
      <h1 className='text-6xl pb-3'>Tomas Le Vesconte</h1>

      {/* Bio */}
      <p className=''>
        I'm an aspiring 
        <span className='font-bold'> Software Engineer </span>
        & 
        <span className='font-bold'> CompSci Graduate</span>
      </p>
      <p className=''>from South Wales, United Kingdom.</p>

      {/* Icons */}
    </header>
  )
}

export default Header