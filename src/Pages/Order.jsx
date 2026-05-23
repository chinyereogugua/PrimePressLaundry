import React from 'react'
import "./Css/Order.css"
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

const Order = () => {
  // Mock data matching the UI image exactly
  const orders = [
    { id: "ORD-8291", customer: "Sarah Johnson", items: "12 items", address: "124 Bluebell Lane, Seattle", date: "Mar 24, 2026", status: "Washing" },
    { id: "ORD-8292", customer: "Michael Chen", items: "5 items", address: "889 Highland Ave, Seattle", date: "Mar 24, 2026", status: "Ready" },
    { id: "ORD-8293", customer: "Emma Wilson", items: "4 items", address: "42 Oak Street, Bellevue", date: "Mar 23, 2026", status: "Delivered" },
    { id: "ORD-8294", customer: "David Miller", items: "3 items", address: "712 Pineview Dr, Redmond", date: "Mar 25, 2026", status: "New Request" },
    { id: "ORD-8295", customer: "Olivia Davis", items: "18 items", address: "19 Sunset Blvd, Seattle", date: "Mar 24, 2026", status: "Picked Up" }
  ];

  return (
    <div className='order-container'>
        <SideBar/>
        <div className='order-wrapper'>
            <TopBar title={"Overview"}/>

            {/* Main Content Area */}
            <div className="om-content">
              {/* Header Section */}
              <div className="om-header">
                <div>
                  <h1 className="om-title">Order Management</h1>
                  <p className="om-subtitle">Monitor and process customer laundry requests in real-time.</p>
                </div>
                <button className="om-btn-new">+ New Order</button>
              </div>

              {/* Status Tabs/Filters */}
              <div className="om-tabs">
                <button className="om-tab active">All Orders <span className="badge">124</span></button>
                <button className="om-tab">New Request <span className="badge-light">12</span></button>
                <button className="om-tab">Picked Up <span className="badge-light">6</span></button>
                <button className="om-tab">Washing <span className="badge-light">24</span></button>
                <button className="om-tab">Ready <span className="badge-light">16</span></button>
                <button className="om-tab">Delivered <span className="badge-light">82</span></button>
              </div>

              {/* Table Card Section */}
              <div className="om-card">
                <div className="om-card-header">
                  <div>
                    <h3 className="om-section-title">Recent Activity</h3>
                    <p className="om-section-subtitle">Displaying 5 orders matching current filters</p>
                  </div>
                  <div className="om-filters">
                    <input type="text" placeholder="🔍 Search by ID or name..." className="om-search-input" />
                    <button className="om-btn-filter">🎛️ More Filters</button>
                  </div>
                </div>

                {/* Table Data */}
                <table className="om-table">
                  <thead>
                    <tr>
                      <th>Order ID ⇅</th>
                      <th>Customer</th>
                      <th>Address</th>
                      <th>Pickup Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, i) => (
                      <tr key={i}>
                        <td className="font-medium text-dark">{order.id}</td>
                        <td>
                          <div className="om-customer-cell">
                            <div className="om-avatar"></div>
                            <div>
                              <div className="font-medium text-dark">{order.customer}</div>
                              <div className="text-muted text-sm">{order.items}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-muted">📍 {order.address}</td>
                        <td className="text-muted">📅 {order.date}</td>
                        <td>
                          <span className={`om-status-tag ${order.status.toLowerCase().replace(" ", "-")}`}>
                            {order.status}
                          </span>
                        </td>
                        <td><button className="om-btn-view">View ➔</button></td>
                        <td className="text-muted font-bold cursor-pointer">⋮</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination Footer */}
                <div className="om-pagination">
                  <div className="text-muted text-sm">Showing <strong>1-5</strong> of <strong>124</strong> orders</div>
                  <div className="om-page-buttons">
                    <button className="om-page-nav">Previous</button>
                    <button className="om-page-num active">1</button>
                    <button className="om-page-num">2</button>
                    <button className="om-page-num">3</button>
                    <span className="om-page-dots">...</span>
                    <button className="om-page-num">12</button>
                    <button className="om-page-nav">Next</button>
                  </div>
                </div>
              </div>

              {/* Branding Dashboard Footer */}
              <div className="om-footer">
                © 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking
              </div>
            </div>
        </div>
    </div>
  )
}

export default Order







// import React from 'react';
// import "./Css/Order.css";

// import {
//   LayoutDashboard,
//   ShoppingBag,
//   Users,
//   BarChart3,
//   Settings,
//   LogOut,
//   Search,
//   Bell,
//   SlidersHorizontal,
//   ChevronRight,
//   MoreHorizontal
// } from "lucide-react";

// import Primepresslaundrylogo from "../Components/Primepresslaundrylogo";
// import Manstanding from "../assets/Manstanding.png";
// import { useNavigate } from 'react-router-dom';

// const Order = () => {
//   const nav = useNavigate();

//   // Mock array matching the exact reference picture records, status variations, and corrected IDs
//   const orderData = [
//     { id: "ORD-8291", name: "Sarah Johnson", items: "12 items", address: "124 Bluebell Lane, Seattle", date: "Mar 24, 2026", status: "Washing", statusClass: "washing" },
//     { id: "ORD-8292", name: "Michael Chen", items: "5 items", address: "889 Highland Ave, Seattle", date: "Mar 24, 2026", status: "Ready", statusClass: "ready" },
//     { id: "ORD-8293", name: "Emma Wilson", items: "8 items", address: "42 Oak Street, Bellevue", date: "Mar 23, 2026", status: "Delivered", statusClass: "delivered" },
//     { id: "ORD-8294", name: "David Miller", items: "3 items", address: "712 Pineview Dr, Redmond", date: "Mar 25, 2026", status: "New Request", statusClass: "new-request" },
//     { id: "ORD-8295", name: "Olivia Davis", items: "15 items", address: "19 Sunset Blvd, Seattle", date: "Mar 24, 2026", status: "Picked Up", statusClass: "picked-up" }
//   ];

//   return (
//     <div className="dashboard">
//       {/* SIDEBAR */}
//       <div className="sidebar">
//         <div>
//           <div className="logo">
//             <Primepresslaundrylogo />
//           </div>

//           <div className="sidebar-links">
//             <div className="sidebar-item">
//               <LayoutDashboard size={18} />
//               <span>Dashboard</span>
//             </div>

//             <div className="sidebar-item active" onClick={() => nav("/order")}>
//               <ShoppingBag size={18} />
//               <span>Orders</span>
//             </div>

//             <div className="sidebar-item">
//               <Users size={18} />
//               <span>Customers</span>
//             </div>

//             <div className="sidebar-item">
//               <BarChart3 size={18} />
//               <span>Review Analytics</span>
//             </div>

//             <div className="sidebar-item">
//               <Settings size={18} />
//               <span>Settings</span>
//             </div>
//           </div>
//         </div>

//         <div className="logout">
//           <LogOut size={18} />
//           <span>Logout</span>
//         </div>
//       </div>

//       {/* MAIN CONTENT CONTAINER */}
//       <div className="dashboard-main">
//         {/* TOPBAR */}
//         <div className="topbar">
//           <div className="topbar-left">
//             <h3>Orders</h3>
//             <div className="search-box">
//               <Search size={16} className="search-icon" />
//               <input type="text" placeholder="Search orders, customers..." />
//             </div>
//           </div>

//           <div className="topbar-right">
//             <div className="bell-container">
//               <Bell className="bell-icon" size={18} />
//               <span className="bell-dot"></span>
//             </div>

//             <div className="admin-info">
//               <div className="admin-text">
//                 <h4>Admin User</h4>
//                 <p>Store Manager</p>
//               </div>
//               <div className="admin-profile">
//                 <img src={Manstanding} alt="Admin profile" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* WORKSPACE AREA */}
//         <div className="content-area">
//           {/* HEADER */}
//           <div className="content-header">
//             <div>
//               <h1>Order Management</h1>
//               <p>Monitor and process customer laundry requests in real-time.</p>
//             </div>
//             <button className="new-order-btn">+ New Order</button>
//           </div>

//           {/* STATUS FILTERS WITH BADGES */}
//           <div className="filters-container">
//             <div className="filters">
//               <div className="filter active-filter">
//                 <span>All Orders</span>
//                 <span className="badge badge-active">124</span>
//               </div>
//               <div className="filter">
//                 <span>New Request</span>
//                 <span className="badge">12</span>
//               </div>
//               <div className="filter">
//                 <span>Picked Up</span>
//                 <span className="badge">8</span>
//               </div>
//               <div className="filter">
//                 <span>Washing</span>
//                 <span className="badge">24</span>
//               </div>
//               <div className="filter">
//                 <span>Ready</span>
//                 <span className="badge">18</span>
//               </div>
//               <div className="filter">
//                 <span>Delivered</span>
//                 <span className="badge">92</span>
//               </div>
//             </div>
//           </div>

//           {/* RECENT ACTIVITY CONTAINER */}
//           <div className="table-container">
//             <div className="table-top">
//               <div>
//                 <h3>Recent Activity</h3>
//                 <p>Displaying 5 orders matching current filters</p>
//               </div>

//               <div className="table-actions">
//                 <div className="table-search-input">
//                   <Search size={14} className="input-inner-search" />
//                   <input type="text" placeholder="Search by ID or name..." />
//                 </div>
//                 <button className="filter-action-btn">
//                   <SlidersHorizontal size={14} />
//                   <span>More Filters</span>
//                 </button>
//               </div>
//             </div>

//             {/* DATA TABLE */}
//             <table>
//               <thead>
//                 <tr>
//                   <th>Order ID</th>
//                   <th>Customer</th>
//                   <th>Address</th>
//                   <th>Pickup Date</th>
//                   <th>Status</th>
//                   <th style={{ textAlign: 'center' }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orderData.map((order) => (
//                   <tr key={order.id}>
//                     <td className="order-id-cell">{order.id}</td>
//                     <td>
//                       <div className="customer-info">
//                         <img src={Manstanding} alt={order.name} />
//                         <div>
//                           <h5>{order.name}</h5>
//                           <p>{order.items}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="address-cell">{order.address}</td>
//                     <td className="date-cell">{order.date}</td>
//                     <td>
//                       <span className={`status-pill ${order.statusClass}`}>
//                         {order.status}
//                       </span>
//                     </td>
//                     <td>
//                       <div className="actions-cell-group">
//                         <button className="view-btn">
//                           <span>View</span>
//                           <ChevronRight size={14} />
//                         </button>
//                         <MoreHorizontal size={18} className="more-actions-icon" />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* PAGINATION PANEL */}
//             <div className="pagination">
//               <p>Showing <strong>1-5</strong> of <strong>124</strong> orders</p>
//               <div className="pagination-buttons">
//                 <button className="pag-nav-btn">Previous</button>
//                 <button className="page-num active-page">1</button>
//                 <button className="page-num">2</button>
//                 <button className="page-num">3</button>
//                 <span className="pag-ellipsis">...</span>
//                 <button className="page-num">12</button>
//                 <button className="pag-nav-btn next-btn">Next</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="dashboard-footer">
//           <span>© 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;