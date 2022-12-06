import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send us a message we'll get back to you!</h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Message" rows={4}/>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
