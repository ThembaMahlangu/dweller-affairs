import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Dweller Affairs</h1>
          <p>Choose your next Apartment</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Get in touch</h4>
          <a>Email: info@dwelleraffairs.co.za</a>
          <a>Tel: 011 936 0246</a>
          <a>WhatsApp: wa/me/dwellers</a>
        </div>

        <div>
          <h4>Business Solutions</h4>
          <a href="/suggestions">Suggest Feature</a>
          <a href="/partnerregister">Partner Registration</a>
          <a href="/contact">Partner Support</a>
          <a href="/sponsors">Sponsor Us</a>
        </div>

        <div>
          <h4>Important Links</h4>
          <a href="/">Developer Volunteering</a>
          <a href="/">Careers</a>
          <a href="/">Feedback</a>
          <a href="/">Partner Hunters</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/contact">Contact Us</a>
          <a href="/bookingform">Booking Page</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/addp">Terms of service</a>
          <a href="/admindashboard">Privacy Policy</a>
          <a href="/partnerdashboard">License</a>
        </div>

      </div>
      <div className="copyright">
        <p className="copyright-content">2023 Copyright Dweller Affairs. Designed by EazieCode</p>
      </div>
    </div>
  );
};

export default Footer;
