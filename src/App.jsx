import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ThreeBackground from './components/ThreeBackground.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import TechStack from './components/TechStack.jsx';
import Qualifications from './components/Qualifications.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import SocialLinks from './components/SocialLinks.jsx';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.floor(Math.random() * 8 + 4), 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 1000);
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <LoadingScreen progress={progress} key="loader" />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {/* <CustomCursor /> */}
          <ThreeBackground />
          
          <ScrollProgress />
          <Navbar />
          <Hero />
          <About />
          {/* <TechStack3D /> */}
          <TechStack /> 
          <Services />
          
          <Qualifications />
          <Experience />
          <Projects />
          {/* <Testimonials /> */}
          <Resume />
          <Contact />
          <SocialLinks />
        

          
          
        </>
      )}
    </div>
  );
};

export default App;
