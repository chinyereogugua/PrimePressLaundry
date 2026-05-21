import React from "react";
import "./Css/Footer1b.css";
import FirstFooterBackground from "../assets/FirstFooterBackground.jpg";
import Button from "./Button.jsx"
import Vector3 from "../assets/Vector (3).png"
import Vector10 from "../assets/Vector10.png"

const Footer1b = () => {
  return (
    <main className="footer1b-container">
         <img src={FirstFooterBackground}
            alt="Laundry Banner"
            className="footer1b-image"
              />
              <div className="footer1b-overlay">
    <section className="footer1b-cards">
        <article className="footer1b-overlay1">
            <article className="footer1b-overlay1-left">
                <img src={Vector3} alt="" />
            </article>
            <article className="footer1b-overlay1-right">
                <h2>Free Pickup & Delivery</h2>
                <p>
                    Enjoy Convenient Pickup and delivery
                    <br />
                    right at your doorstep.
                </p>
            </article>
        </article>
        <article className="footer1b-overlay2">
            <article className="footer1b-overlay2-left">
                <img src={Vector3} alt="" />
            </article>
            <article className="footer1b-overlay2-right">
                <h2>Within 24 hours</h2>
                <p>
                    Receive your fresh, clean laundry
                    <br />
                    back in just 24 hours.
                </p>
            </article>
        </article>
    </section>
    <article className="footer1b-bottom">
        <img src={Vector10} alt="" />
        <p>
            We respect your privacy and ensure your data is secure.
        </p>
    </article>
</div>
    </main>
  );
};

export default Footer1b;