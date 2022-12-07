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
          <h4>Partner Links</h4>
          <a href="/partnerlogin">Partner Login</a>
          <a href="/partnerregister">Register Partner</a>
          <a href="/contact">Partner Support</a>
          <a href="/singleproperty">Test Links</a>
        </div>

        <div>
          <h4>Important</h4>
          <a href="/adminlogin">Admin Login</a>
          <a href="/adminlogin">Careers</a>
          <a href="/admindashboard">Test Link 1</a>
          <a href="/partnerdashboard">Test Link 2</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
      <div className="copyright">
        <p>Dweller Affairs Copyright 2023. Designed by EazieCode</p>
      </div>
    </div>
  );
};

export default Footer;
