import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function BookingForm() {
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
            heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
            title = "Book Your Accomodation"
            text = "You will recieve a call/WhatsApp message to confirm your booking"
        />
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input name='name' placeholder="What is your Full Name?"/>
                <label>Partner</label>
                <input name='partner' placeholder="Please type the Building Partner Name"/>
                <label>Building</label>
                <input name='building' placeholder="Name of the building being booked?"/>
                <label>Email</label>
                <input name='email' placeholder="What is your Email?"/>
                <label>Contact Number</label>
                <input name='contact' placeholder="What is your contact number?"/>
                <label>WhatsApp</label>
                <input name='whatsapp' placeholder="What is your WhatsApp Number?"/>
                <button type='submit'>Submit Booking</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default BookingForm;