import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccomodationList from "../components/AccomodationList";

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
        <AccomodationList/>
        <Footer/>
      </>
    );
  }

export default Accomodation;