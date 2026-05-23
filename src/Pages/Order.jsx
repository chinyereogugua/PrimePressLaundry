import React from 'react'
import "./Css/Order.css"
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import {
  Plus,
  Search,
  MapPin,
  Calendar,  
  SlidersHorizontal 
} from "lucide-react";

const Order = () => {
const orders = [
    { id: "ORD-8291", customer: "Sarah Johnson", items: "12 items", address: "124 Bluebell Lane, Seattle", date: "Mar 24, 2026", status: "Washing", avatar: "https://i.postimg.cc/xT7gKJcT/20e63b80cd0ea9485f2227e837603302e46e3b97.png" },
    { id: "ORD-8292", customer: "Michael Chen", items: "5 items", address: "889 Highland Ave, Seattle", date: "Mar 24, 2026", status: "Ready", avatar: "https://i.postimg.cc/ZqzcMGPh/b5e39c55d50113b40aca347ce0c09859b58f6afd.png" },
    { id: "ORD-8293", customer: "Emma Wilson", items: "4 items", address: "42 Oak Street, Bellevue", date: "Mar 23, 2026", status: "Delivered", avatar: "https://i.postimg.cc/85tmssqB/242873c74fe8b5d520791bdb28335861f35a7b4f.png" },
    { id: "ORD-8294", customer: "David Miller", items: "3 items", address: "712 Pineview Dr, Redmond", date: "Mar 25, 2026", status: "New Request", avatar: "https://i.postimg.cc/bYVRhD00/fb1aeee8b0ddf9a5db2f2d2fbbab09f281e55087.png" },
    { id: "ORD-8295", customer: "Olivia Davis", items: "18 items", address: "19 Sunset Blvd, Seattle", date: "Mar 24, 2026", status: "Picked Up", avatar: "https://i.postimg.cc/HLtQPVsw/6113caf760bc1b192678dae477055c4eeb0ada7b.png" }
  ];

  return (
    <div className='order-container'>
        <SideBar/>
        <div className='order-wrapper'>
            <TopBar title={"Overview"}/>
            <div className="om-content">
              <div className="om-header">
                <div>
                  <h1 className="om-title">Order Management</h1>
                  <p className="om-subtitle">Monitor and process customer laundry requests in real-time.</p>
                </div>
                <button className="om-btn-new">
                <Plus size={16} />
                   New Order
                </button>
              </div>
              <div className="om-tabs">
                <button className="om-tab active">All Orders <span className="badge">124</span></button>
                <button className="om-tab">New Request <span className="badge-light">12</span></button>
                <button className="om-tab">Picked Up <span className="badge-light">6</span></button>
                <button className="om-tab">Washing <span className="badge-light">24</span></button>
                <button className="om-tab">Ready <span className="badge-light">16</span></button>
                <button className="om-tab">Delivered <span className="badge-light">82</span></button>
              </div>
              <div className="om-card">
                <div className="om-card-header">
                  <div>
                    <h3 className="om-section-title">Recent Activity</h3>
                    <p className="om-section-subtitle">Displaying 5 orders matching current filters</p>
                  </div>
                  <div className="om-filters">
                    <div className="om-search-wrapper">
                    <Search className="om-search-icon" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search by ID or name..." 
                      className="om-search-input" 
                    />
                    </div>
                    <button className="om-btn-filter">
                      <SlidersHorizontal size={14} className="filter-button-icon" /> 
                      <span>More Filters</span>
                    </button>
                    </div>
                </div>
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
                            <div className="om-avatar">
                                <img src={order.avatar} alt={order.customer} className="om-avatar-img" />
                            </div>
                            <div>
                              <div className="font-medium text-dark">{order.customer}</div>
                              <div className="text-muted text-sm">{order.items}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-muted">
                          <div className="text-icon-cell">
                            <MapPin size={15} className="table-inline-icon" />
                            <span>{order.address}</span>
                          </div>
                        </td>
                        <td className="text-muted">
                          <div className="text-icon-cell">
                            <Calendar size={15} className="table-inline-icon" />
                            <span>{order.date}</span>
                          </div>
                        </td>
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
                <div className="om-pagination">
                  <div className="text-muted">Showing <strong>1-5</strong> of <strong>124</strong> orders</div>
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
              <div className="om-footer">
                © 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking
              </div>
            </div>
        </div>
    </div>
  )
}

export default Order