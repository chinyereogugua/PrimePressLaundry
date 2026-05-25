import React, { useState } from 'react';
import "./Css/Assigndriver.css";
import Sidebar from "../Components/SideBar.jsx";
import { Calendar, Clock, MapPin, Truck, ArrowLeft} from 'lucide-react';
import Topbar from "../Components/TopBar.jsx";

export default function AssignDriverPage() {
  const [selectedDriver, setSelectedDriver] = useState('');

  return (
    <div className="dashboardLayout">
      <Sidebar />
      <div className="mainContentWrapper">
        <Topbar title={"Order Details #ORD-8291"}/>
        
        <main className="pageBody">
          <button className="backButton">
            <span className="backArrow">
              <ArrowLeft size={20} />
              </span> Back to Order Details
          </button>

          <div className="pageHeaderRow">
            <div>
              <h2 className="pageTitle">Assign Driver</h2>
              <p className="pageSubtitle">
                Assign a driver for pickup and delivery of order #ORD-8291
              </p>
            </div>
            {/* The vertical three-dot action button */}
            <button className="moreOptionsBtn">
              <span className="dots"></span>
            </button>
          </div>
          <div className="contentGrid">
            <section className="card">
              <h3 className="cardTitle">Order Summary</h3>
              
              <div className="summaryGroup">
                <label>ORDER ID</label>
                <p className="boldText">ORD-8291</p>
              </div>

              <div className="summaryGroup">
                <label>CUSTOMER NAME</label>
                <p>Sarah Johnson</p>
              </div>

              <div className="summaryGroup">
                <label>PHONE NUMBER</label>
                <p>+1 (555) 234-8901</p>
              </div>

              <div className="summaryGroup">
                <label>EMAIL ADDRESS</label>
                <p className="emailText">s.johnson@gmail.com</p>
              </div>

              <div className="summaryGroup">
                <label>PICKUP ADDRESS</label>
                <p className="addressText">
                  <span className="addressIcon locationBlue">
                    <MapPin size={17} color="rgba(21, 93, 252, 1)" /> 
                    </span> 124, Bluebell Lane, Seattle
                </p>
              </div>

              <div className="summaryGroup">
                <label>DELIVERY ADDRESS</label>
                <p className="addressText">
                  <span className="addressIcon locationGreen">
                    <MapPin size={17} color="rgba(0, 166, 62, 1)" /> 
                    </span> 124, Bluebell Lane, Seattle
                </p>
              </div>
            </section>
            <div className="rightColumn">
              <section className="card">
                <h3 className="cardTitle">Assign Driver</h3>
                
                <div className="formGroup">
                  <label>Select Driver</label>
                  <div className="selectWrapper">
                    <select 
                      value={selectedDriver} 
                      onChange={(e) => setSelectedDriver(e.target.value)}
                      className="formSelect"
                    >
                      <option value="">Choose a driver</option>
                      <option value="driver1">Alex Smith (Van)</option>
                    </select>
                  </div>
                </div>

                <div className="metaRow">
                  <label>DRIVER PHONE NUMBER</label>
                  <p>+1 (555) 434-8020</p>
                </div>

                <div className="metaRow">
                  <label>VEHICLE TYPE</label>
                  <p>van</p>
                </div>

                <div className="metaRow">
                  <label>VEHICLE PLATE NUMBER</label>
                  <p>LA-543KT</p>
                </div>
              </section>

              {/* Schedule Configuration Card */}
              <section className="card">
                <h3 className="cardTitle">Schedule</h3>
                
                <div className="formGroup">
                  <label>Pickup Date</label>
                  <div className="inputIconWrapper">
                    <span className="inputIcon">
                      <Calendar size={17} color="#8a8a8a" />
                    </span>
                    <input type="text" disabled className="formInputDisabled" placeholder="05/26/2026" />
                  </div>
                </div>

                <div className="formGroup">
                  <label>Pickup Time</label>
                  <div className="inputIconWrapper">
                    <span className="inputIcon">
                      <Clock size={17} color="#8a8a8a" />
                    </span>
                    <input type="text" disabled className="formInputDisabled" placeholder="10:00 AM" />
                  </div>
                </div>

                <div className="formGroup">
                  <label>Delivery Time Window</label>
                  <div className="rangeInputs">
                    <div className="inputIconWrapper">
                      <span className="inputIcon">
                        <Clock size={17} color="#8a8a8a" />
                      </span>
                      <input type="text" disabled className="formInputDisabled" placeholder="02:00 PM" />
                    </div>
                    <div className="inputIconWrapper">
                      <span className="inputIcon">
                        <Clock size={17} color="#8a8a8a" />
                      </span>
                      <input type="text" disabled className="formInputDisabled" placeholder="04:00 PM" />
                    </div>
                  </div>
                  <span className="fieldHint">Example: 2 PM - 4 PM</span>
                </div>
              </section>

              {/* Primary Dispatch Action Button */}
              <button className="primarySubmitBtn">
                <span className="btnIcon">
                  <Truck size={17} color="white" />
                  </span> Assign Driver
              </button>
            </div>

          </div>
        </main>
        <footer className="footer">
          © 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking
        </footer>
      </div>
    </div>
  );
}