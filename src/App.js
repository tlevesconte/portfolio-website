import React from 'react';
import { Canvas } from '@react-three/fiber';

import Header from './components/sections/Header';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import AsciiTorus from './3D/AsciiTorus';
import { PerspectiveCamera } from '@react-three/drei';

function App() {
  return (
    <div className='App'>
      <div className='canvas h-screen w-screen bg-[#111111]'></div>
      {/* Canvas object (AsciiTorus)*/}
      {/* <div className='canvas h-[350px]'>
        <Canvas>
          <color attach="background" args={['black']} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <AsciiTorus />
        </Canvas>
      </div> */}

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
