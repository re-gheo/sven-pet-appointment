import React from 'react';
import './HeroSection.css'
import Button from '../CustomComponents/Button/Button';
import HeroButton from '../CustomComponents/HeroButton/HeroButton';


const HeroSection = ({ scrollToAbout, scrollToForm}) => {
  return (
    <>
    <nav className='navbar-base'>
  <h2 className='logo' ><span className='logo-paw'>🐾</span> Pawtastic</h2> 
  <ul className="list">
        <HeroButton onClick={scrollToAbout}> About Us</HeroButton>
        <HeroButton onClick={scrollToForm}>Schedule a Visit</HeroButton>
  </ul>
</nav>
   <section className="hero">
      <h1>We care for your furry little loves while your away.</h1>
      <Button className ="button-base button-base-2" onClick={scrollToForm}>Schedule a visit</Button>
    </section>
    </>
 
  );
};

export default HeroSection;