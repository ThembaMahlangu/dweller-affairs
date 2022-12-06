import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import PropertySingle from "../components/PropertySingle";

function Accomodation() {
    return (
      <>
        <Navbar/>
        <Hero
          cName="hero-about"
          heroImg={AboutImg}
          title="Accomodation Partners"
          btnClass="hide"
        />
        <PropertySingle/>
        <Footer/>
      </>
    );
  }

export default Accomodation;