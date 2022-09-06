import React from 'react'

const Header = () => {
  return (
    <header>
      {/* Heading */}
      <h1 className='text-center text-4xl pb-5'>Tomas Le Vesconte</h1>

      {/* Bio */}
      <p className='text-center'>
        Aspiring 
        <span className='font-bold'> Software Engineer </span>
        & 
        <span className='font-bold'> CompSci Graduate</span>
      </p>
      <p className='text-center'>from South Wales, United Kingdom.</p>

      {/* Icons */}
    </header>
  )
}

export default Header