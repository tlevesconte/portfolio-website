import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from "framer-motion"
import IcosahedronDisplacement from './3D/IcosahedronDisplacement';

import { Header, About, Education, Projects, Contact, Footer, Navbar} from './components/sections'

function App() {
  return (
    <div id='content' className='font-montserrat text-[.95rem] leading-[1.5] font-normal bg-[#191A1F]'>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <div id='header' className='bg-[#15161B]'>
        <Header />
        {/* Canvas */}
        <motion.div className='w-full h-screen sm:h-[90vh]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}>
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <IcosahedronDisplacement />
          </Canvas>
        </motion.div>
      </div>
      {/* Container */}
      <div id='main' className='mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[#999] px-[25px]'>

        {/* Main */}
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
