import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySingle from "../components/PropertySingle";

function Accomodation() {
    return (
      <>
        <Navbar/>
        <Hero
          cName="hero-accomodation"
          heroImg={"https://www.sgs.com/-/media/sgscorp/images/industries-and-environment/green-buildings.cdn.en-ZA.1.jpeg"}
          title="Accomodation Partners" 
          btnClass="hide"
        />
        <PropertySingle/>
        <Footer/>
      </>
    );
  }

export default Accomodation;