import React from "react";
import "./Css/Assigndriver.css"
import { MapPin, CalendarDays, ChevronLeft } from "lucide-react";

const AssignDriver = () => {
  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">Admin</div>
        <nav>
          <p>Dashboard</p>
          <p>Orders</p>
          <p>Drivers</p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="main">

        {/* TOPBAR */}
        <header className="topbar">
          <h3>Order Details #ORD-8291</h3>
        </header>

        {/* CONTENT */}
        <section className="content">

          {/* BACK */}
          <div className="back">
            <ChevronLeft size={16} />
            Back to Order Details
          </div>

          {/* TITLE */}
          <div className="heading">
            <h1>Assign Driver</h1>
            <p>Assign a driver for pickup and delivery of order #ORD-8291</p>
          </div>

          {/* GRID */}
          <div className="grid">

            {/* LEFT CARD */}
            <div className="card summary">

              <h3>Order Summary</h3>

              <div className="block">
                <span>ORDER ID</span>
                <p>ORD-8291</p>
              </div>

              <div className="block">
                <span>CUSTOMER NAME</span>
                <p>Sarah Johnson</p>
              </div>

              <div className="block">
                <span>PHONE NUMBER</span>
                <p>+1 (555) 123-9871</p>
              </div>

              <div className="block">
                <span>EMAIL ADDRESS</span>
                <p>s.johnson@gmail.com</p>
              </div>

              <div className="block">
                <span>PICKUP ADDRESS</span>
                <div className="row">
                  <MapPin size={14} />
                  <p>456 Evergreen Terrace, Seattle</p>
                </div>
              </div>

              <div className="block">
                <span>DELIVERY ADDRESS</span>
                <div className="row">
                  <MapPin size={14} />
                  <p>124 BlueVille Avenue, Seattle</p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE STACK */}
            <div className="right">

              {/* DRIVER CARD */}
              <div className="card">

                <h3>Assign Driver</h3>

                <label>Select Driver</label>
                <select>
                  <option>Choose driver</option>
                  <option>Michael Smith</option>
                  <option>John Carter</option>
                </select>

                <div className="info">
                  <p><b>Driver Phone:</b> +1 555 444 222</p>
                  <p><b>Vehicle:</b> Van</p>
                  <p><b>Plate:</b> LA-54RTY</p>
                </div>

              </div>

              {/* SCHEDULE CARD */}
              <div className="card">

                <h3>Schedule</h3>

                <label>Pickup Date</label>
                <input type="date" />

                <label>Pickup Time</label>
                <input type="time" />

                <label>Delivery Window</label>
                <div className="time">
                  <input type="time" />
                  <span>to</span>
                  <input type="time" />
                </div>

                <button className="btn">
                  <CalendarDays size={16} />
                  Assign Driver
                </button>

              </div>

            </div>

          </div>

        </section>

        <footer className="footer">
          © 2026 Admin Panel
        </footer>

      </div>
    </div>
  );
};

export default AssignDriver;
// const Assigndriver = () => {
//   return (
//     <div className="admin-layout">
//       {/* Fixed Left Sidebar */}
//       <div className="layout-sidebar">
//         <SideBar />
//       </div>

//       {/* Right Side Content Area */}
//       <div className="layout-main">
//         <TopBar />
        
//         {/* Scrollable Workspace Container */}
//         <main className="workspace-content">
//           {/* Back Navigation Link */}
//           <div className="back-navigation">
//             <span className="back-arrow">←</span> Back to Order Details
//           </div>

//           <h1 className="page-title">Assign Driver</h1>
//           <p className="page-subtitle">Assign a driver for pickup and delivery of order #ORD-8291</p>

//           {/* Core Dashboard Cards Grid */}
//           <div className="dashboard-grid">
            
//             {/* Left Card: Order Summary */}
//             <div className="dashboard-card">
//               <h2 className="card-title">Order Summary</h2>
              
//               <div className="summary-group">
//                 <label>ORDER ID</label>
//                 <p className="highlight-text">ORD-8291</p>
//               </div>

//               <div className="summary-group">
//                 <label>CUSTOMER NAME</label>
//                 <p>Sarah Johnson</p>
//               </div>

//               <div className="summary-group">
//                 <label>PHONE NUMBER</label>
//                 <p>+1 (555) 234-8901</p>
//               </div>

//               <div className="summary-group">
//                 <label>EMAIL ADDRESS</label>
//                 <p>s.johnson@gmail.com</p>
//               </div>

//               <div className="summary-group">
//                 <label className="icon-label pickup">● Pickup Address</label>
//                 <p>124, Bluebell Lane, Seattle</p>
//               </div>

//               <div className="summary-group">
//                 <label className="icon-label delivery">● Delivery Address</label>
//                 <p>124, Bluebell Lane, Seattle</p>
//               </div>
//             </div>

//             {/* Right Stacked Forms */}
//             <div className="form-stack">
              
//               {/* Form Card 1: Assign Driver */}
//               <div className="dashboard-card">
//                 <h2 className="card-title">Assign Driver</h2>
                
//                 <div className="form-group">
//                   <label>Select Driver</label>
//                   <select className="form-select" defaultValue="">
//                     <option value="" disabled>Choose a driver</option>
//                     <option value="driver1">Alex Smith</option>
//                     <option value="driver2">John Doe</option>
//                   </select>
//                 </div>

//                 <div className="driver-details-grid">
//                   <div>
//                     <label>DRIVER PHONE NUMBER</label>
//                     <p>+1 (555) 434-9809</p>
//                   </div>
//                   <div>
//                     <label>VEHICLE TYPE</label>
//                     <p>Van</p>
//                   </div>
//                   <div>
//                     <label>VEHICLE PLATE NUMBER</label>
//                     <p>LA-5436T</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Form Card 2: Schedule */}
//               <div className="dashboard-card">
//                 <h2 className="card-title">Schedule</h2>
                
//                 <div className="form-group">
//                   <label>Pickup Date</label>
//                   <input type="date" className="form-input" />
//                 </div>

//                 <div className="form-group">
//                   <label>Pickup Time</label>
//                   <input type="time" className="form-input" />
//                 </div>

//                 <div className="form-group">
//                   <label>Delivery Time Window</label>
//                   <div className="time-window-inputs">
//                     <input type="time" className="form-input" />
//                     <span className="time-separator">to</span>
//                     <input type="time" className="form-input" />
//                   </div>
//                   <span className="field-hint">Example: 2 PM - 4 PM</span>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <button type="button" className="btn-assign">
//                 <span className="btn-icon">📋</span> Assign Driver
//               </button>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Assigndriver;
