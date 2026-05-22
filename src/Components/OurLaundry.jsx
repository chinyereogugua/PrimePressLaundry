import React from "react";
import "./Css/OurLaundry.css";
import Button from "../Components/Button"
import { useNavigate } from "react-router-dom";

const OurLaundry = () => {
const nav = useNavigate()
  return (
    <div className="laundry-hero">
      <div className="laundry-content">
        <h1 className="laundry-title">
          Our Laundry <br/> Services & Pricing
        </h1>

        <p className="laundry-text">
          Quality laundry service at affordable, <br/>transparent prices.
        </p>

        <Button onClick={()=> nav ("/pick")} className="laundry-btn" btnText="Book a Pickup" />
      </div>
    </div>
  );
};

export default OurLaundry;