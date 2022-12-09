import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-about"
        heroImg={"https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg"}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
