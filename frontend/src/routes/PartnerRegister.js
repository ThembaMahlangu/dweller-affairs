import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PartnerRegister() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk5j6fc', 'template_tyl9ufr', form.current, 'alhwLOSp2yLNOem4D')
      .then((result) => {
          console.log(result.text);
          console.log("booking sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <label>Name of Company</label>
            <input name='company' placeholder="Enter Company Name"/>
            <label>Number of Buildings</label>
            <input name='buildings' placeholder="How many buildings do you have?"/>
            <label>Desired Partnership Period</label>
            <select name='contract'>
              <option>How long will you partner with us?</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
              <option>24 Months</option>
            </select>
            <label>Full Name</label>
            <input name='name' placeholder="Enter Name and Surname"/>
            <label>Which City do you operate in?</label>
            <select name='city'>
              <option>Please Select Your City</option>
              <option>Johannesburg</option>
              <option>Pretoria</option>
              <option>Durban</option>
              <option>Cape Town</option>
            </select>
            <label>Email</label>
            <input name='email' placeholder="Email"/>
            <label>Phone Number</label>
            <input name='phone' placeholder="Please Enter Your Phone Number"/>
            <label>Company Telephone Number</label>
            <input name='tel' placeholder="Please Enter Your Company Telephone"/>
            <button>Register</button>
            <p>After submitting the registration, the form will reset and you can await correspondence</p>
          </form>
        </div>
        <Footer/>
    </>
  )
}

export default PartnerRegister