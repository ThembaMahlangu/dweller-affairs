import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    // perform form validation and submission logic here
    emailjs.sendForm('service_mk5j6fc', 'template_u43pxkb', form.current, 'alhwLOSp2yLNOem4D')
      .then((result) => {
          console.log(result.text);
          console.log("form sent");
          toast("Form submitted successfully!");
          event.target.reset();
        }, (error) => {
            console.log(error.text);
        });
  }

  return (
    <div className="form-container">
      <h1>Send us a message we'll get back to you!</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input name="name" placeholder="Name"/>
        <label>Email</label>
        <input name="email" placeholder="Email"/>
        <label>Subject</label>
        <input name="subject" placeholder="Subject"/>
        <label>Message</label>
        <textarea name="message" placeholder="Message" rows={4}/>
        <button>Send Message</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ContactForm;
