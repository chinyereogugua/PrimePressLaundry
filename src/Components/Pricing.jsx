import React from "react";
import "./Css/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">

      <div className="pricing-header">
        <div className="pricing-line"></div>

        <h1>How Our Pricing Works</h1>

        <div className="pricing-line"></div>
      </div>

      <p className="pricing-subtext">
        Transparent and simple pricing based on your laundry needs.
      </p>

      <div className="pricing-cards">

        <div className="price-card">

          <div className="price-card-top">
            <h2>Wash & Fold</h2>

            <span>Based on weight</span>
          </div>

          <div className="price-banner">
            Starting at $5 per kg
          </div>

          <div className="price-list">
            <p>Small Load (5kg)</p>
            <p>Medium Load (10kg)</p>
            <p>Large Load (15kg)</p>
          </div>

          <button>View Pricing</button>

        </div>

        <div className="price-card">

          <div className="price-card-top">
            <h2>Dry Cleaning</h2>

            <span>Based on item type</span>
          </div>

          <div className="price-banner">
            Starting at $7 per item
          </div>

          <div className="price-list2">

            <div>
              <p>Shirt</p>
              <span>$10</span>
            </div>

            <div>
              <p>Trouser</p>
              <span>$15</span>
            </div>

            <div>
              <p>Dress</p>
              <span>$20</span>
            </div>

            <div>
              <p>Suit</p>
              <span>$30</span>
            </div>

          </div>

        </div>

      </div>
      
      <div className="pricing_Bottom">
          <span className="tick">✓</span>
          <span className="bold-text"> No hidden Charges.</span>
          <span className="normal-text">What you see is what you pay </span>
      </div>
    </div>
  );
};

export default Pricing;