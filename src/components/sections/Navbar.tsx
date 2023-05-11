import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = ({ data }: any) => {
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [navbarState, showNavbar] = useState(true);
  const [navbarShadow, showNavbarShadow] = useState(false);
  const [hamburgerState, setHamburgerState] = useState(false);
  const [width, setWidth] = useState<number>();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      showNavbarShadow(false);
    } else if (currentScrollPos > lastScrollPos) {
      showNavbar(false);
      showNavbarShadow(true);
    } else {
      showNavbar(true);
    }
    setLastScrollPos(currentScrollPos);
  };

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
    // disable scrollbar on toggle
    document.body.style.overflow !== 'hidden' ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    if (width !== undefined && width > 767) {
      setHamburgerState(false);
      document.body.style.overflow = ''; // remove overflow 'hidden'
    }
  }, [width]);

  return (
    // Navbar
    <nav>
      {/* Navbar top */}
      <div className={`fixed flex items-center justify-between ${navbarState ? 'top-0' : 'top-[-69px]'} ${navbarShadow ? 'shadow-xl' : ''} z-[101] h-[70px] w-full px-6 text-white  backdrop-blur transition-all duration-300 sm:px-14`}>
        <Link className="hover:text-secondary-grey" href="/">
          {data.handle}
        </Link>
        <ol className="items-center hidden md:flex">
          {data.sections.map((section: any, index: number) => {
            return (
              <li key={index} className="ml-8">
                <Link className="transition-colors hover:text-secondary-grey" key={index} href={section.url}>
                  <span className="mr-1 text-xs text-gray-700">0{index + 1}.</span>
                  {section.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Navbar aside toggler */}
      <div className={`fixed right-[24px] z-[105] sm:right-[56px] ${navbarState ? 'top-[24px]' : 'top-[-69px]'} transition-all duration-300`}>
        <button onClick={toggleHamburger} className="text-white md:hidden">
          {hamburgerState ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Navbar aside */}
      <div>
        {/* Background blur */}
        <div className={`fixed z-[102] h-full w-full backdrop-blur ${hamburgerState ? '' : 'hidden'}`}></div>
        {/* Aside menu */}
        <aside className={`fixed top-0 z-[103] flex h-full w-[75%] items-center justify-center bg-secondary-dark text-center text-xl text-white sm:w-[55%] ${hamburgerState ? 'right-0' : 'right-[-100%]'} shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-200`}>
          <ol className="flex flex-col">
            {data.sections.map((section: any, index: number) => {
              return (
                <li key={index} className="mb-10">
                  <Link onClick={toggleHamburger} className="flex flex-col text-lg transition-colors hover:text-secondary-grey sm:text-xl" href={section.url}>
                    <span key={index} className="text-sm text-gray-700">
                      0{index + 1}.
                    </span>
                    {section.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
