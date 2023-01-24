import React, {useRef} from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// Framer motion
import { useInView } from "framer-motion"

// Assets
import Typer from '../../assets/typer-screenshot-in-browser.jpg'
import Portfolio from '../../assets/my-portfolio-website-in-browser.png'

const Projects = () => {

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  
  return (
    // Projects section
    <section id='projects' className='pt-[200px]'>
      {/* Projects Header */}
      <h2 ref={ref1} id='projects-heading' className='flex items-center text-2xl font-semibold mb-9 text-[#b5b5b5]'>
        <span id='number-prefix' className='mr-3 text-xl font-normal text-gray-700'>03. </span> 
        Projects
        <div id='after-line' className='h-px w-[180px] sm:w-[130px] md:w-[220px] lg:w-[290px] bg-gray-700/30 ml-5'></div>
      </h2>

      {/* Add projects here */}
      <div className=''>

        <div id='project-tile-left' className='flex items-center text-right mb-[80px] flex-col md:flex-row'
        style={{
          transform: isInView1 ? "none" : "translatey(5%)",
          opacity: isInView1 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
        }}>
          <div id='project-image' className='xl:max-w-[470px] lg:max-w-[400px] md:max-w-[350px]'>
            <img src={Typer} className='rounded-sm' alt='Typer'
            style={{
              transition: ".3s ease-in-out"
            }}></img>
          </div>
          <div id='project-content' className='w-[468px] ml-[-42px] z-[110]'>
            <p className='text-gray-700 mb-[2.5px]'>First Project</p>
            <h3 className='text-lg font-semibold text-[#b5b5b5] text-right mb-[15px]'>Typer</h3>
            <div id='project-description' className='text-right bg-[#15161B] rounded-sm py-5 px-5 mb-[15px] shadow-2xl'>
              <p>A minimalistic typing test inspired by Monkeytype. Features a live WPM and accuracy counter, with language support for both Swedish and English.</p>
            </div>
            <ul id='technology-list' className='flex flex-row justify-end space-x-3'>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>

        <div id='project-tile-right' className='flex items-center text-left'
        style={{
          transform: isInView2 ? "none" : "translatey(5%)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
        }}>
          <div id='project-content' className='w-[468px] mr-[-42px] z-[110]'>
            <p className='text-gray-700 mb-[2.5px]'>Second Project</p>
            <h3 className='text-lg font-semibold text-[#b5b5b5] text-left mb-[15px]'>My Portfolio Site</h3>
            <div id='project-description' className='text-left bg-[#15161B] rounded-sm py-5 px-5 mb-[15px] shadow-2xl'>
              <p>The site you're viewing right now. Features a few of the projects that I have worked on, plus links to my GitHub, LinkedIn, CV and Email.</p>
            </div>
            <ul id='technology-list' className='flex flex-row justify-start space-x-3'>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Three.js</li>
              <li>Framer motion</li>
            </ul>
          </div>
          <div ref={ref2} id='project-image' className='xl:max-w-[470px] lg:max-w-[400px] md:max-w-[350px]'>
            <img src={Portfolio} className='rounded-sm' alt='Portfolio'
            style={{
              transition: ".3s ease-in-out"
            }}></img>
          </div>
        </div>
        
      {/* <figure className='flex flex-col max-w-[320px] shadow-2xl mr-6'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure> */}

        {/* <figure className='flex flex-col max-w-[280px] shadow-2xl mr-6'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure>

        <figure className='flex flex-col max-w-[280px] shadow-2xl'>
          <img src={Typer} className='max-h-[240px]' alt='Typer'></img>
          <figcaption className='px-3 py-3'>
            <div className='flex flex-row justify-between'>
              <h3 className='font-bold'>Typer</h3>
              <div className='text-lg'>
                <a className='pr-1 text-xl' href='https://github.com/tom-lv/typer'><FontAwesomeIcon icon={faGithub}/></a>
                <a className='text-xl' href='https://tom-lv.github.io/typer/'><FontAwesomeIcon icon={faLink}/></a>
              </div>
            </div>
            <p className='mb-2 italic font-medium'>Web Application</p>
            <p>A minimalistic typing test inspired by Monkeytype.</p>
            <div className='flex flex-row flex-wrap'>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>JavaScript</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>HTML</span>
              <span className='px-1 py-1 mt-2 mr-1 font-semibold'>CSS</span>
            </div>
          </figcaption>
        </figure> */}
      </div>
    </section>
  )
}

export default Projects