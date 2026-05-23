import React from 'react';
import "./Css/Order.css";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Bell,
  SlidersHorizontal,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

import Primepresslaundrylogo from "../Components/Primepresslaundrylogo";
import Manstanding from "../assets/Manstanding.png";
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const nav = useNavigate();

  // Mock array matching the exact reference picture records, status variations, and corrected IDs
  const orderData = [
    { id: "ORD-8291", name: "Sarah Johnson", items: "12 items", address: "124 Bluebell Lane, Seattle", date: "Mar 24, 2026", status: "Washing", statusClass: "washing" },
    { id: "ORD-8292", name: "Michael Chen", items: "5 items", address: "889 Highland Ave, Seattle", date: "Mar 24, 2026", status: "Ready", statusClass: "ready" },
    { id: "ORD-8293", name: "Emma Wilson", items: "8 items", address: "42 Oak Street, Bellevue", date: "Mar 23, 2026", status: "Delivered", statusClass: "delivered" },
    { id: "ORD-8294", name: "David Miller", items: "3 items", address: "712 Pineview Dr, Redmond", date: "Mar 25, 2026", status: "New Request", statusClass: "new-request" },
    { id: "ORD-8295", name: "Olivia Davis", items: "15 items", address: "19 Sunset Blvd, Seattle", date: "Mar 24, 2026", status: "Picked Up", statusClass: "picked-up" }
  ];

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <div className="logo">
            <Primepresslaundrylogo />
          </div>

          <div className="sidebar-links">
            <div className="sidebar-item">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div className="sidebar-item active" onClick={() => nav("/order")}>
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

      {/* MAIN CONTENT CONTAINER */}
      <div className="dashboard-main">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left">
            <h3>Orders</h3>
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search orders, customers..." />
            </div>
          </div>

          <div className="topbar-right">
            <div className="bell-container">
              <Bell className="bell-icon" size={18} />
              <span className="bell-dot"></span>
            </div>

            <div className="admin-info">
              <div className="admin-text">
                <h4>Admin User</h4>
                <p>Store Manager</p>
              </div>
              <div className="admin-profile">
                <img src={Manstanding} alt="Admin profile" />
              </div>
            </div>
          </div>
        </div>

        {/* WORKSPACE AREA */}
        <div className="content-area">
          {/* HEADER */}
          <div className="content-header">
            <div>
              <h1>Order Management</h1>
              <p>Monitor and process customer laundry requests in real-time.</p>
            </div>
            <button className="new-order-btn">+ New Order</button>
          </div>

          {/* STATUS FILTERS WITH BADGES */}
          <div className="filters-container">
            <div className="filters">
              <div className="filter active-filter">
                <span>All Orders</span>
                <span className="badge badge-active">124</span>
              </div>
              <div className="filter">
                <span>New Request</span>
                <span className="badge">12</span>
              </div>
              <div className="filter">
                <span>Picked Up</span>
                <span className="badge">8</span>
              </div>
              <div className="filter">
                <span>Washing</span>
                <span className="badge">24</span>
              </div>
              <div className="filter">
                <span>Ready</span>
                <span className="badge">18</span>
              </div>
              <div className="filter">
                <span>Delivered</span>
                <span className="badge">92</span>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY CONTAINER */}
          <div className="table-container">
            <div className="table-top">
              <div>
                <h3>Recent Activity</h3>
                <p>Displaying 5 orders matching current filters</p>
              </div>

              <div className="table-actions">
                <div className="table-search-input">
                  <Search size={14} className="input-inner-search" />
                  <input type="text" placeholder="Search by ID or name..." />
                </div>
                <button className="filter-action-btn">
                  <SlidersHorizontal size={14} />
                  <span>More Filters</span>
                </button>
              </div>
            </div>

            {/* DATA TABLE */}
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Pickup Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <tr key={order.id}>
                    <td className="order-id-cell">{order.id}</td>
                    <td>
                      <div className="customer-info">
                        <img src={Manstanding} alt={order.name} />
                        <div>
                          <h5>{order.name}</h5>
                          <p>{order.items}</p>
                        </div>
                      </div>
                    </td>
                    <td className="address-cell">{order.address}</td>
                    <td className="date-cell">{order.date}</td>
                    <td>
                      <span className={`status-pill ${order.statusClass}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="actions-cell-group">
                        <button className="view-btn">
                          <span>View</span>
                          <ChevronRight size={14} />
                        </button>
                        <MoreHorizontal size={18} className="more-actions-icon" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION PANEL */}
            <div className="pagination">
              <p>Showing <strong>1-5</strong> of <strong>124</strong> orders</p>
              <div className="pagination-buttons">
                <button className="pag-nav-btn">Previous</button>
                <button className="page-num active-page">1</button>
                <button className="page-num">2</button>
                <button className="page-num">3</button>
                <span className="pag-ellipsis">...</span>
                <button className="page-num">12</button>
                <button className="pag-nav-btn next-btn">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="dashboard-footer">
          <span>© 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking</span>
        </div>
      </div>
    </div>
  );
};

export default Order;