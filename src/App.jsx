// import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import "./index.css";
import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
