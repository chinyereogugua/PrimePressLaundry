import React, { useEffect, useState } from "react";
import "./Css/Dashboard.css";
import {
  FileText,
  Plus,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  Truck,
} from "lucide-react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { getAllBookings } from "../API/BookingApi";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  
  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const displayName = user?.fullName || user?.name || user?.emailAddress?.split("@")[0];

  useEffect(() => {
  const fetchBookings = async () => {
    try {
      const res = await getAllBookings();
      console.log("ALL BOOKINGS:", res);
     

      setBookings(res.data || res);
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  fetchBookings();
}, []);

  return (
    <div className="dashboard">
        <SideBar/>
      <div className="dashboard-main">
        <TopBar title={"Overview"}/>

        <div className="welcome-top">
        <div className="welcome-section">
          <h1>Welcome back, {displayName}</h1>
          <p>
            Here is what's happening with your laundry facility today.
          </p>
        </div>

        <div className="action-buttons">
          <button className="export-btn">
            <FileText size={16} />
            Export Report
          </button>

          <button className="new-order-btn">
            <Plus size={16} />
            New Order
           </button>
         </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">

            <div className="stat-icon blue">
              <ClipboardList size={22} />
            </div>

            <div className="stat-top">
              <h5>New Requests</h5>
              <span>Today</span>
            </div>
            <h2>12</h2>
            <p>+4% from last week</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <RefreshCw size={22} />
            </div>
            <div className="stat-top">
              <h5>Washing in Progress</h5>
              <span>Ongoing</span>
            </div>
            <h2>24</h2>
            <p>+4% from last week</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <CheckCircle2 size={22} />
            </div>
            <div className="stat-top">
              <h5>Ready for Delivery</h5>
              <span>Immediate</span>
            </div>
            <h2>08</h2>
            <p>+4% from last week</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">
              <Truck size={22} />
            </div>
            <div className="stat-top">
              <h5>Completed Today</h5>
              <span>Total</span>
            </div>
            <h2>156</h2>
            <p>+15% from last week</p>
          </div>
        </div>

        <div className="orders-section">
          <div className="orders-header">
            <div>
              <h3>Recent Orders</h3>
              <p>
                Latest transactions processed in the last 24 hours.
              </p>
            </div>
            <button>View All Orders</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Pickup Address</th>
                <th>Pickup Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {bookings.map((item) => (
            <tr key={item._id}>
               <td>{item._id}</td>
               <td>{item.name}</td>
               <td>{item.pickUpAddress}</td>
               <td>{item.pickUpDateAndTime}</td>
            <td>
              <span className="status pending">
                  New Request
              </span>
            </td>
          <td>
             <button className="view-btn">
                View Order
            </button>
          </td>
         </tr>
        ))}
     </tbody>

            {/* <tbody>
              <tr>
                <td>ORD-8821</td>
                <td>Sarah Jenkins</td>
                <td>122 Oakwood Dr, Springfield</td>
                <td>Mar 24, 2026</td>
                <td>
                  <span className="status pending">
                    New Request
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    View Order
                  </button>
                </td>
              </tr>

              <tr>
                <td>ORD-8819</td>
                <td>Michael Ross</td>
                <td>45 Maple Ave, Heights</td>
                <td>Mar 23, 2026</td>
                <td>
                  <span className="status washing">
                    Washing
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    View Order
                  </button>
                </td>
              </tr>

              <tr>
                <td>ORD-8815</td>
                <td>Emily Chen</td>
                <td>882 Broadway, Suite 4</td>
                <td>Mar 23, 2026</td>
                <td>
                  <span className="status ready">
                    Ready
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    View Order
                  </button>
                </td>
              </tr>

              <tr>
                <td>ORD-8812</td>
                <td>Robert Miller</td>
                <td>10-B Industrial Park</td>
                <td>Mar 22, 2026</td>
                <td>
                  <span className="status pickup">
                    Picked Up
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    View Order
                  </button>
                </td>
              </tr>

              <tr>
                <td>ORD-8808</td>
                <td>Jessica Taylor</td>
                <td>712 Pine Street, Apt 12</td>
                <td>Mar 21, 2026</td>
                <td>
                  <span className="status delivered">
                    Delivered
                  </span>
                </td>
                <td>
                  <button className="view-btn">
                    View Order
                  </button>
                </td>
              </tr>
            </tbody> */}
          </table>
        </div>

        <div className="productivity-card">
          <h3>Weekly Productivity Insight</h3>
          <p>
            Your average turnaround time for Wash & Fold is
            down by 15% <br/>this week. Great job keeping up with
            the volume!
          </p>
          <button className="prod_Btn">Review Analytics</button>
        </div>

        <div className="dashboard-footer">
            <p>
                © 2026 PrimePress Laundry Admin Dashboard •
                Quality Service Tracking
            </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;