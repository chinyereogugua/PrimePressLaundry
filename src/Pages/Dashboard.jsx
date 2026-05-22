import React from "react";
import "./Css/Dashboard.css";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  FileText,
  Plus,
  LogOut,
  ClipboardList,
  RefreshCw,
  CheckCircle2,
  Truck,
} from "lucide-react";
import Primepresslaundrylogo from "../Components/Primepresslaundrylogo";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div>

          <div className="logo">
            <Primepresslaundrylogo/>
          </div>

          <div className="sidebar-links">
            <div className="sidebar-item active">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>
            <div className="sidebar-item">
              <ShoppingBag size={18} />
              <span>Orders</span>
            </div>
            <div className="sidebar-item">
              <Users size={18} />
              <span>Customers</span>
            </div>
            <div className="sidebar-item">
              <BarChart3 size={18} />
              <span>Review Analytics</span>
            </div>
            <div className="sidebar-item">
              <Settings size={18} />
              <span>Settings</span>
            </div>
          </div>
         </div>

        <div className="logout">
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="topbar">
          <div className="topbar-left">
            <h3>Overview</h3>

            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search orders, customers..."
              />
            </div>
          </div>

          <div className="topbar-right">
            <Bell className="bell-icon" size={20} />
            <div className="admin-profile">
              <img
                src="https://i.pravatar.cc/100"
                alt="admin"
              />
              <div>
                <h4>Admin User</h4>
                <p>Store Manager</p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-top">
        <div className="welcome-section">
          <h1>Welcome back, Admin</h1>
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
            </tbody>
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