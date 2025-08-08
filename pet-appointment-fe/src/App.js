import React, { useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import './App.css';


function App() {
  const aboutRef = useRef(null);
  const formRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      

      <HeroSection scrollToAbout={scrollToAbout} scrollToForm={scrollToForm} />
      
      <div ref={aboutRef}>
        <AboutUsSection scrollToForm={scrollToForm} />
      </div>

      <div ref={formRef}>
        <AppointmentForm scrollToTop={scrollToTop}/>
      </div>
    </div>
  );
}

export default App;