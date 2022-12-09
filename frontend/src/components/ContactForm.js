import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk5j6fc', 'template_u43pxkb', form.current, 'alhwLOSp2yLNOem4D')
      .then((result) => {
          console.log(result.text);
          console.log("booking sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  };

  return (
    <div className="form-container">
      <h1>Send us a message we'll get back to you!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input name="name" placeholder="Name"/>
        <input name="email" placeholder="Email"/>
        <input name="subject" placeholder="Subject"/>
        <textarea name="message" placeholder="Message" rows={4}/>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
