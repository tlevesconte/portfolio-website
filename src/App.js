import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from "framer-motion"
import IcosahedronDisplacement from './3D/IcosahedronDisplacement';

import { Header, About, Education, Projects, Contact, Footer, Navigation } from './components/sections'

function App() {
  return (
    <div className='App font-montserrat text-[.95rem] leading-[1.5] font-normal bg-[#191A1F]'>
      {/* Navigation */}
      {/* <Navigation /> */}
      {/* Hero-section */}
      <div id='hero-section' className='bg-[#15161B]'>
        {/* Header */}
        <Header />
        {/* Canvas */}
        <motion.div className='w-screen h-screen sm:h-[83vh]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}>
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <IcosahedronDisplacement />
          </Canvas>
        </motion.div>
      </div>
      {/* Mobile responsive container */}
      <div id='content-container' className='mx-auto max-w-[24.5rem] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[#999]'>

        {/* Sections */}
        <About />
        <Education />
        <Projects />
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
