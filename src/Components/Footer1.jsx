import React from "react";
import "./Css/Footer1.css";
import FirstFooterBackground from "../assets/FirstFooterBackground.jpg";
import Button from "../Components/Button.jsx"
const Footer1 = () => {
  return (
    <main className="footer1-container">
      <img
        src={FirstFooterBackground}
        alt="Laundry Banner"
        className="footer1-image"
      />

      <div className="footer1-overlay">
        <h1>Let’s Take Laundry Off Your To-Do List.</h1>

        <Button btnText="Book Your First Pickup Today" className="footer1-overlay-btn"/>
      </div>
    </main>
  );
};

export default Footer1;