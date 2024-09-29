import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import "./index.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
