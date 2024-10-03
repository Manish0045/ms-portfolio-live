// import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import "./index.css";
import Timeline from './components/Timeline';
import axios from 'axios';

async function sendMessage(message) {
  const URI = "https://product-crud-app-3f7k.onrender.com/";
  const URL = URI + "mail/send";
  const data = {
    subject: `Visit Notification`,
    message: message
  };
  console.log("Sending data:", data);

  try {
    const response = await axios.post(URL, data);
    if (response.status === 200) {
      console.log("Message sent successfully:", response.data);
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    console.error("Error sending message:", error.response ? error.response.data : error.message);
  }
}

function App() {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      // console.log("Someone visited your site");
      sendMessage("Someone visited your site");

      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

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
