import Property from "../components/Property";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PropertySingle from "../components/PropertySingle";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg="https://i0.wp.com/roadsandkingdoms.com/uploads/2018/08/JohannesburgLANDSCAPE.jpg?ssl=1&resize=1300%2C940&quality=92&strip=color"
        title="Finding Accomodation Simplified"
        text="Choose Your Next Apartment."
        buttonText="Book Now"
        url="/accomodation"
        btnClass="show"
      />
      <Property/>
      <PropertySingle/>
      <Footer/>
    </>
  );
}

export default Home;
