import React from "react";
import "./Css/Hero.css";
import Ellipse from "../assets/Ellipse 48 (2).png"
import Rectangle from "../assets/Rectangle 4.png";
import Button from "../Components/Button.jsx"

const Hero = () => {
  return (
    <main className="hero-container">
      <section className="hero-left">
        <article className="hero-left-img">
            <img src={Ellipse} alt="" />
        </article>
        <article className="hero-left-content">
          <h1>
            Effortless
            <br />
            Laundry,Delivered
            <br />
            to Your Door.
          </h1>
          <p>
            We pick up, wash, fold &
            deliver... all <br /> within 24 hours.
          </p>
          <div className="hero-btn-holder">
            <Button className="pickup-btn" btnText="Book a Pickup"  />
            <Button className="pricing-btn" btnText="See Pricing" />
          </div>
        </article>
      </section>
      <section className="hero-right">
        <article className="hero-right-holder">
          <img src={Rectangle} alt="" />
        </article>
      </section>
    </main>
  );
};

export default Hero;





















// import React from 'react'
// import "../Components/Css/Hero.css";

// function Hero() {
//   return (
//     <section className="hero-container">
//       <div className="hero-wrapper">
//         {/* LEFT SIDE */}
//         <div className="hero-left">
//           <h1>
//             Effortless
//             <br />
//             Laundry,Delivered
//             <br />
//             to Your Door.
//           </h1>

//           <p>
//             We pick up, wash, fold & deliver...
//             all within 24 hours.
//           </p>

//           <div className="hero-btn-holder">
//             <button className="pickup-btn">
//               Book a Pickup
//             </button>

//             <button className="pricing-btn">
//               See Pricing
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hero-right">
//           <img
//             src="/laundry.png"
//             alt="Laundry"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;