import React from 'react';

import Header from './components/sections/Header';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
