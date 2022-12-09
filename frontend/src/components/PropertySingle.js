import "./PropertyStyles.css";
import PropertySingleData from "./PropertySingleData";
import Trip1 from "../assets/room4.jpg";
import Trip2 from "../assets/room5.jpg";
import Trip3 from "../assets/room3.jpg";

function PropertySingle() {
  return (
    <div className="property">
      <h1>Featured Apartments</h1>
      <p>There's a lot of Accomodation to discover using the Dweller Affairs plartfom, here's what we selected for the Day</p>
      <div className="propertycard">
        <PropertySingleData
          image={Trip1}
          heading = "Emerald Bachelors"
          text = "The beautiful structures of morden living displayed in the setup that is created when it comes to the Bachelors available in our Jewel City Buildings"
        />

        <PropertySingleData
          image={Trip2}
          heading = "Emerald Bachelors"
          text = "The beautiful structures of morden living displayed in the setup that is created when it comes to the Bachelors available in our Jewel City Buildings"
        />

        <PropertySingleData
          image={Trip3}
          heading = "Emerald Bachelors"
          text = "The beautiful structures of morden living displayed in the setup that is created when it comes to the Bachelors available in our Jewel City Buildings"
        />
      </div>
    </div>
  );
}

export default PropertySingle;
