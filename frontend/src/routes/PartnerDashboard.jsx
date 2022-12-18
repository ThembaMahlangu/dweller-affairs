import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PartnerDashboard() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-contact"
        heroImg={"https://s.inyourpocket.com/gallery/218273.jpg"}
        title="Partner Dashboard"
        btnClass="hide"
      />
      <Footer/>
    </>
  )
}

export default PartnerDashboard