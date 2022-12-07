import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import '../components/ContactFormStyles.css';

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
        <div className="form-container">
            <form>
                <input placeholder="Full Name"/>
                <select>
                    <option>Please Select Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Rather Not Say</option>
                </select>
                <input placeholder="Email"/>
                <input placeholder="Enter Your Password"/>
                <input placeholder="Please Confirm Your Password"/>
                <button>Register</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Register