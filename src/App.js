
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Passion from "./components/Passion";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <div id="content">
        <Navbar />
        {/* Introduction */}
        <Intro id="#intro" />
        {/* About Information */}
        <About id="#about" />
        {/* Passions and What I'm interested in */}
        <Passion id="#passion" />
        {/* Experience with software and companies */}
        <Experience id="#experience" />
        {/* Resume */}
        <Resume id="#resume" />
        {/* Projects */}
        <Work id="#projects" />
        {/* Contact Me */}
        <Contact id="#contact" />
        {/* Footer content */}
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
