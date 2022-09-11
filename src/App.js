import React from 'react';
import { Canvas } from '@react-three/fiber';
// import AsciiTorus from './3D/AsciiTorus';
import Cube from './3D/Cube';

import { Header, About, Education, Projects, Contact, Footer } from './components/sections'

function App() {
  return (
    <div className='App'>
      <div id='canvas' className='w-screen h-screen'>
        {/* Header */}
        <Header />
        {/* Canvas */}
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      {/* Mobile responsive container */}
      <div id='custom-container' className='mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-3xl'>

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
