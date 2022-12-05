import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
    </>
  );
}

export default About;
