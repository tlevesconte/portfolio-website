import React, { useState, useEffect} from 'react'

const Navbar = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [navbarState, setNavbarState] = useState(true);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [hamburgerState, setHamburgerState] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if(currentScrollPos === 0) {
      setNavbarShadow(false); // hide navbar's shadow
    } else if(currentScrollPos > lastScrollPos) {
      setNavbarState(false); // hide navbar
      setNavbarShadow(true); //show shadow
    } else {
      setNavbarState(true); // show navbar
    }
    setLastScrollPos(currentScrollPos);
  }

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
    // disable scrollbar on toggle
    document.body.style.overflow !== "hidden" 
    ? document.body.style.overflow = "hidden" 
    : document.body.style.overflow = "";
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log(width);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    if (width > 767) {
      setHamburgerState(false);
      document.body.style.overflow = "" // remove overflow 'hidden'
    }
  }, [width]);
  
  return (
    <nav id='navbar'>
      <div id='navbar-content' className={`fixed flex items-center justify-between ${navbarState ? 'top-0' : 'top-[-69px]'} ${navbarShadow ? 'shadow-xl' : ''} text-[#ffffff] backdrop-blur w-full h-[70px] z-[101]  px-6 sm:px-14 transition-all duration-300`}>
        <a className='hover:text-[#b5b5b5]' href='/'>tom-lv</a>
        <ol className='items-center hidden md:flex'>
          <li className='mr-8'>
            <a className='transition-colors hover:text-[#b5b5b5]' href='#about'>
              <span className='mr-1 text-xs text-gray-700'>01.</span>
              About
            </a>
          </li>
          <li className='mr-8'>
            <a className='transition-colors hover:text-[#b5b5b5]' href='#education'>
              <span className='mr-1 text-xs text-gray-700'>02.</span>
              Education
            </a>
          </li>
          <li className='mr-8'>
            <a className='transition-colors hover:text-[#b5b5b5]' href='#projects'>
              <span className='mr-1 text-xs text-gray-700'>03.</span>
              Projects
            </a>
          </li>
          <li>
            <a className='transition-colors hover:text-[#b5b5b5]' href='#contact'>
              <span className='mr-1 text-xs text-gray-700'>04.</span>
              Contact 
            </a>
          </li>
        </ol>
      </div>

      <div id='hamburger-toggle' className={`fixed right-[24px] sm:right-[56px] z-[105] ${navbarState ? 'top-[24px]' : 'top-[-69px]'} transition-all duration-300`}>
        <button onClick={toggleHamburger} className='md:hidden text-[#ffffff]'>{hamburgerState ? 'Close' : 'Menu'}</button>
      </div>
      
      <div id='hamburger'>
        <div id='background-blur' className={`fixed w-full h-full backdrop-blur z-[102] ${hamburgerState ? '' : 'hidden'}`}></div>
        <aside className={`fixed flex z-[103] w-[75%] sm:w-[55%] h-full bg-[#191A1F] text-white text-xl items-center justify-center text-center top-0 ${hamburgerState ? 'right-0' : 'right-[-100%]'} shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-200`}>
            <ol className='flex flex-col'>
                <li className='mb-10'>
                <a onClick={toggleHamburger} className='transition-colors hover:text-[#b5b5b5] flex flex-col text-lg sm:text-xl' href='#about'>
                    <span className='text-sm text-gray-700'>01.</span>
                    About
                </a>
                </li>
                <li className='mb-10'>
                <a onClick={toggleHamburger} className='transition-colors hover:text-[#b5b5b5] flex flex-col text-lg sm:text-xl' href='#education'>
                    <span className='text-sm text-gray-700'>02.</span>
                    Education
                </a>
                </li>
                <li className='mb-10'>
                <a onClick={toggleHamburger} className='transition-colors hover:text-[#b5b5b5] flex flex-col text-lg sm:text-xl' href='#projects'>
                    <span className='text-sm text-gray-700'>03.</span>
                    Projects
                </a>
                </li>
                <li>
                <a onClick={toggleHamburger} className='transition-colors hover:text-[#b5b5b5] flex flex-col text-lg sm:text-xl' href='#contact'>
                    <span className='text-sm text-gray-700'>04.</span>
                    Contact 
                </a>
                </li>
            </ol>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar