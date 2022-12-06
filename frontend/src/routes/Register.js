import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Register() {
  return (
    <>
        <Navbar/>
        <Hero
            cName = "hero-about"
            heroImg = {"https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_2.jpg"}
            title = "Register Account"
            text = "Your first step to finding your ideal Accomodation"
        />
        <Footer/>
    </>
  )
}

export default Register