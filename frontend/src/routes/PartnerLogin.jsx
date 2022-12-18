import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PartnerLogin() {
  return (
    <>
      <Navbar/>
        <Hero
            cName = "hero-about"
            heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
            title = "Partner Login"
            text = "Welcome back Partner! Please login below"
        />
        <div className="form-container">
            <form>
                <label>Email</label>
                <input placeholder="Email"/>
                <label>Password</label>
                <input placeholder="Enter Your Password"/>
                <button>Login</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default PartnerLogin