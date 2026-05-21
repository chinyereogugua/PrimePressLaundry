import React from "react";
import "./Css/OurLaundry.css";

const OurLaundry = () => {
  return (
    <div className="laundry-hero">
      <div className="laundry-content">
        <h1 className="laundry-title">
          Our Laundry <br/> Services & Pricing
        </h1>

        <p className="laundry-text">
          Quality laundry service at affordable, <br/>transparent prices.
        </p>

        <button className="laundry-btn">Book a Pickup</button>
      </div>
    </div>
  );
};

export default OurLaundry;