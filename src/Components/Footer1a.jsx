import React from "react";
import "./Css/Footer1a.css";
import FirstFooterBackground from "../assets/FirstFooterBackground.jpg";
import Button from "../Components/Button.jsx"
import { useNavigate } from "react-router-dom";
const Footer1a = () => {
const nav = useNavigate()
  return (
    <main className="footer1a-container">
      <img
        src={FirstFooterBackground}
        alt="Laundry Banner"
        className="footer1a-image"
      />

      <div className="footer1a-overlay">
        <h1>Book Your Pickup in 60 Seconds</h1>

        <Button onClick={()=> nav ("/pick")} btnText="Schedule Pickup" className="footer1a-overlay-btn"/>
      </div>
    </main>
  );
};

export default Footer1a;