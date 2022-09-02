import React from 'react';
import { Canvas } from '@react-three/fiber';

import Header from './components/sections/Header';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import AsciiTorus from './3D/AsciiTorus';

function App() {
  return (
    <div className='App'>
      {/* Canvas object */}
      <div className='h-[500px]'>
        <Canvas>
          <AsciiTorus />
        </Canvas>
      </div>

      {/* Header */}
      <Header />

      {/* Container */}
      <div className='static max-w-4xl mx-auto'>
        
        {/* Sections */}
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
