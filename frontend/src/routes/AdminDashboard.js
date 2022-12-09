import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-contact"
        heroImg={"https://s.inyourpocket.com/gallery/218272.jpg"}
        title="Admin Dashboard"
        btnClass="hide"
      />
      <Footer/>
    </>
  )
}

export default AdminDashboard