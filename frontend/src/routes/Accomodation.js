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
          heroImg={"https://primestone.com/wp-content/uploads/2020/04/Smart-Buildings-1.jpg"}
          title="Accomodation Partners" 
          btnClass="hide"
        />
        <PropertySingle/>
        <Footer/>
      </>
    );
  }

export default Accomodation;