import React from "react";
import "./Css/Cleaning.css";
import { WashingMachine, Shirt, ScanLine, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cleaning = () => {
const nav = useNavigate()
  return (
    <div className="cleaning-container">
      <div className="cleaning-header">
        <div className="line"></div>

        <h1>Our Service</h1>

        <div className="line"></div>
      </div>

      <div className="cleaning-cards">

        <div className="clean-card">
            <div className="clean-top">
          <WashingMachine className="clean-icon" />

          <h2>
            We Wash & <br /> Fold
          </h2>

          <p>
            We wash, dry and neatly <br /> fold your laundry
          </p>
          </div>
          <button onClick={()=> nav("/pick")}>Book Now</button>
        </div>

        <div className="clean-card">
            <div className="clean-top">
          <Shirt className="clean-icon" />

          <h2>Dry Cleaning</h2>

          <p>
            Professional dry cleaning <br /> for delicate garments.
          </p>
          </div>
          <button onClick={()=> nav("/pick")}>Book Now</button>
        </div>

        <div className="clean-card">
             <div className="clean-top">
          <ScanLine className="clean-icon" />

          <h2>Ironing Only</h2>

          <p>
            Expert ironing for wrinkle <br /> clothes.
          </p>
          </div>
          <button onClick={()=> nav("/pick")}>Book Now</button>
        </div>

        <div className="clean-card">
            <div className="clean-top">
          <Clock3 className="clean-icon" />

          <h2>Express</h2>

          <p>
            Fast same-day laundry <br /> service available.
          </p>
          </div>
          <button onClick={()=> nav("/pick")}>Book Now</button>
        </div>

      </div>
    </div>
  );
};

export default Cleaning;