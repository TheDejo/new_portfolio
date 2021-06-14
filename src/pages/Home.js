import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import {slides} from '../data/ProjectData';

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <Socials />
      <Projects picturecard={slides} /> 
      <Skills />
      <Contact />
    </>
  );
};

export default Home;