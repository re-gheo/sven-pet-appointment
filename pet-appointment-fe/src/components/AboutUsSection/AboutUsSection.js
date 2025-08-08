import React from 'react';
import './AboutUsSection.css';
import Button from '../CustomComponents/Button/Button';

const AboutUsSection = ({ scrollToForm }) => {
  return (
    <section className="about-us">

      <div className='content-block'>
        <div className='content-col'>
        <h1>Expert Care for your furry,featery, or scaley friend</h1>
        <p>We know how stressful it is to leave your pets at home,
           especially when they’re not feeling their best.
            At Pawtastic, we treat your pets like family—offering 
            professional care from routine checkups to urgent visits. Your pet’s health and comfort are always our top priority.</p>

        <Button onClick={scrollToForm}>Schedule a visit</Button>
      </div>
      <div className='content-col content-col-pet-showcase'>
        {/* <p>We’re passionate about making pets look and feel their best.</p>
        <button onClick={scrollToForm}>Schedule a Visit</button> */}
        <div className='sample-pet-container'>
          <img className='sample-pet'
          src='https://images.unsplash.com/photo-1561948946-cb70f9e73ca5?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div >
        <div className='sample-pet-container'>
          <img className='sample-pet'
        src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        <div className='sample-pet-container'>
        <img className='sample-pet'
        src='https://images.unsplash.com/photo-1592089416462-2b0cb7da8379?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
        <div className='sample-pet-container'>
           <img className='sample-pet'
        src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUsSection;