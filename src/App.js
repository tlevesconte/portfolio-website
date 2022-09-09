import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import AsciiTorus from './3D/AsciiTorus';
// import { PerspectiveCamera } from '@react-three/drei';

import { Header, About, Education, Projects, Contact, Footer } from './components/sections'

function App() {
  return (
    <div className='App'>
      {/* Placeholder Canvas */}
      <div className='canvas h-screen w-screen bg-[#111111]'></div>
      {/* Mobile responsive container */}
      <div className='container mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
      
      {/* Canvas object (AsciiTorus)*/}
      {/* <div className='canvas h-screen w-screen'>
        <Canvas>
          <color attach="background" args={['black']} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <AsciiTorus />
        </Canvas>
      </div> */}

      {/* Header */}
      <Header />
        
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
