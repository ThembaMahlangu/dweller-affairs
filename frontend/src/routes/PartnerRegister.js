import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PartnerRegister() {
  return (
    <>
      <Navbar/>
        <Hero
          cName = "hero-about"
          heroImg = {"https://orlandotowers.org/wp-content/themes/orlandotowers_v1/assets/bg_2.jpg"}
          title = "Partner Registration"
          text = "Please note after submitting the registration, you will recieve correspondence via email/phone confirming registration and an invoice will be sent to your email for attention"
        />
        <div className="form-container">
          <form>
            <input placeholder="Enter Company Name"/>
            <input placeholder="How many buildings do you have?"/>
            <select>
              <option>How long will you partner with us?</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
              <option>24 Months</option>
            </select>
            <input placeholder="Enter Name and Surname"/>
            <select>
              <option>Please Select Your City</option>
              <option>Johannesburg</option>
              <option>Pretoria</option>
              <option>Durban</option>
              <option>Cape Town</option>
            </select>
            <input placeholder="Email"/>
            <input placeholder="Please Enter Your Phone Number"/>
            <input placeholder="Please Enter Your Company Telephone"/>
            <button>Register</button>
          </form>
        </div>
        <Footer/>
    </>
  )
}

export default PartnerRegister