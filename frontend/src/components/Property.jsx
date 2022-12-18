import Mountain1 from "../assets/jewel.jpg";
import Mountain2 from "../assets/braamgate1.jpg";
import Mountain3 from "../assets/emerald2.jpg";
import Mountain4 from "../assets/braamgate2.jpg";
import PropertyData from "./PropertyData";
import "./AccomodationStyles.css";

const Property = () => {
  return (
    <div className="property">
      <h1>Apartments Of The Week</h1>
      <p>Every week we select 2 properties that were booked the most and with most positive reviews</p>

    <PropertyData
      className="first-des"
      heading="Jewel City, Maboneng, Johannesburg"
      text="Located in the city's vibiest section where the Night Life is the order of the day, Jewel City is one of the most beautiful accomodation provided by iThemba Properties and it is made up of 3 sections namely the 'Diamond', 'Emerald' and 'Onyx'. No wonder they call it Jewel City, this place is mostly perfect for Creatives, Bachelors and Young Couples who want to live in the vibe of Johannesburg. Book today for their 1st month Rent Free promo before it ends!"
      img1={Mountain1}
      img2={Mountain3}
    />

  <PropertyData
      className="first-des-reverse"
      heading="Braamfontein Gate, Braamfontein, Johannesburg"
      text="Located in the heart of the city and having its own culture and vibe where the Party Life is the order of the day, Braamfontein Gate is one of the most beautiful and diverse accomodation provided by UTAF and it is made up a tall multistorey building with access to all transport modes. No wonder they call it Braamfontein Gate, this place is mostly perfect for Creatives, Bachelors and Young Couples who want to live in the vibe of Johannesburg. Book today to secure your space before it runs out!"
      img1={Mountain2}
      img2={Mountain4}
    />
    </div>
  );
};

export default Property;
