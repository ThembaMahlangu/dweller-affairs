import React from 'react';
import { Link } from "react-router-dom";
import Trip1 from "../assets/room4.jpg";
import Trip2 from "../assets/room5.jpg";
import Trip3 from "../assets/room3.jpg";
import "./PropertyStyles.css";

function AccomodationList() {
  return (
    <div className="propertycard">
        <div className="p-card">
          <div className="p-image">
            <img src={Trip1} alt="image"/>
          </div>
          <h4>Mpumelelo</h4>
          <h3>Rental R3 200</h3>
          <p>One of the best apartments that include free first month rent and a friendly environment</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/accomodation">More Info</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Trip1} alt="image"/>
          </div>
          <h4>Truman House</h4>
          <h3>Rental R3 450</h3>
          <p>One of the best apartments that include free first month rent and a friendly environment</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/accomodation">More Info</Link></button>
        </div>

        <div className="p-card">
          <div className="p-image">
            <img src={Trip2} alt="image"/>
          </div>
          <h4>Elevate</h4>
          <h3>Rental R5 000</h3>
          <p>One of the best apartments that include free first month rent and a friendly environment</p>
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/accomodation">More Info</Link></button>
        </div>
    </div>
  )
}

export default AccomodationList