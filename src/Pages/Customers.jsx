import React from "react";
import "./Css/Customers.css";
import {
  Shirt,
  Phone,
  Mail,
  MapPin,
  Clock3,
  Truck,
  CheckCircle2,
  Printer,
  Contact,
} from "lucide-react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useNavigate } from "react-router-dom";

const Customers = () => {
const nav = useNavigate()
  return (
    <div className="customers-page">
      <SideBar />
      <div className="customers-main">
        <TopBar title={"Order Details #ORD-8291"} />

        <div className="breadcrumb-section">
          <div className="breadcrumb">
            <span>Orders</span>
            <p>{">"}</p>
            <span>#ORD-8291</span>
          </div>
          <button className="print-btn">
            <Printer size={16} />
            Print Invoice
          </button>
        </div>

        <div className="customer-grid">
          <div className="customer-left">
            <div className="order-card">
              <div className="order-header">

                <div className="order-info">
                  <div className="order-icon">
                    <Shirt size={26} />
                  </div>
                  <div>
                    <h2>Premium Dry Clean</h2>
                    <div className="order-tags">
                      <span>Washing</span>
                      <p>• Created Mar 24, 2026, 10:45 AM </p>
                    </div>
                  </div>
                </div>

                <div className="order-summary">
                  <div className="order-summary-texts">
                    <p>ITEMS</p>
                    <h4>12 Total</h4>
                  </div>

                  <div className="order-summary-texts">
                    <p>PAYMENT</p>
                    <h4 className="summary-pd">Paid</h4>
                  </div>

                  <div className="order-summary-texts">
                    <p>VALUE</p>
                    <h3>$94.50</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-container">
              <div className="details-card">
                <div className="details-header">
                    <div className="details-header-icon">
                        <img src="https://i.pravatar.cc/100" alt="customer logo" />
                    </div>
                <     h3>Customer Details</h3>
                </div>

                <div className="details-item">
                    <Contact size={16} color="rgba(0, 163, 170, 1)"  />
                    <div>
                        <p>Full Name</p>
                        <h5>Sarah Johnson</h5>
                    </div>
                </div>
                <div className="details-item">
                  <Phone size={16} />
                  <div>
                    <p>Phone Number</p>
                    <h5>+1 (555) 244-8901</h5>
                  </div>
                </div>

                <div className="details-item">
                  <Mail size={16} />
                  <div>
                    <p>Email Address</p>
                    <h5>s.johnson@gmail.com</h5>
                  </div>
                </div>
              </div>

              <div className="details-card">
                <div className="details-header">
                    <div className="details-header-icon">
                        <Truck size={18}/>
                    </div>
                   <h3>Logistics Details</h3>
                </div>

                <div className="details-item">
                  <MapPin size={16} />
                  <div>
                    <p>Pickup Address</p>
                    <h5>124 BlueLane, Seattle</h5>
                  </div>
                </div>

                <div className="details-item">
                  <Clock3 size={16} />
                  <div>
                    <p>Preferred Time</p>
                    <h5>Mar 26, 2PM - 4PM</h5>
                  </div>
                </div>

                <div className="details-item">
                  <Truck size={16}  />
                  <div>
                    <p>Delivery Method</p>
                    <h5>Contactless Drop-off</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-table">
              <div className="table-header">
                <div>
                  <h3>Service Itemization</h3>
                  <p>
                    Detailed list of garments and service costs
                  </p>
                </div>
                <button>Edit Items</button>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th>Category</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="td-Des">Premium Cotton Shirt</td>
                    <td>
                      <span className="table-tag">
                        Menswear
                      </span>
                    </td>
                    <td className="table-tag-num">5</td>
                    <td>$4.50</td>
                    <td className="table-tag-tot">$22.50</td>
                  </tr>

                  <tr>
                    <td className="td-Des">Formal Trousers</td>
                    <td>
                      <span className="table-tag">
                        Menswear
                      </span>
                    </td>
                    <td className="table-tag-num">3</td>
                    <td>$6.00</td>
                    <td className="table-tag-tot">$18.00</td>
                  </tr>

                  <tr>
                    <td className="td-Des">King Size Bedsheet</td>
                    <td>
                      <span className="table-tag">
                        Home
                      </span>
                    </td>
                    <td className="table-tag-num">1</td>
                    <td>$12.00</td>
                    <td className="table-tag-tot">$12.00</td>
                  </tr>

                  <tr>
                    <td className="td-Des">Silk Scarf</td>
                    <td>
                      <span className="table-tag">
                        Delicates
                      </span>
                    </td>
                    <td className="table-tag-num">2</td>
                    <td>$8.50</td>
                    <td className="table-tag-tot">$17.00</td>
                  </tr>

                  <tr>
                    <td className="td-Des">Heavy Winter Coat</td>
                    <td>
                      <span className="table-tag">
                        Outerwear
                      </span>
                    </td>
                    <td className="table-tag-num">1</td>
                    <td>$25.00</td>
                    <td className="table-tag-tot">$25.00</td>
                  </tr>
                </tbody>

              </table>

              <div className="table-total">

                <div>
                  <p>Subtotal:</p>
                  <h4>$94.50</h4>
                </div>

                <div>
                  <p>Service Fee (5%):</p>
                  <h4>$4.72</h4>
                </div>

                <div className="grand-total">
                  <p>Order Total:</p>
                  <h3>$99.22</h3>
                </div>
              </div>
            </div>

            <div className="admin-notes">
              <h4>• Internal Admin Notes</h4>
              <p>
                “Customer requested extra starch on the formal
                shirts. Please ensure no plastic hangers are
                used for the silk scarf. Fragile items identified
                in secondary bag.”
              </p>
            </div>
          </div>

          <div className="customer-right">
            <div className="lifecycle-card">
              <h3>Order Lifecycle</h3>
              <p>
                Track and update processing stage
              </p>

              <div className="lifecycle-steps">
                <div className="step active">
                  <div className="step-circle">
                    <CheckCircle2 size={14} />
                  </div>

                  <div>
                    <h4>Request</h4>
                    <p>Customer placed order</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-circle">
                    2
                  </div>
                  <div>
                    <h4>Pickup Scheduled</h4>
                    <p>Driver assigned</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-circle">
                    3
                  </div>
                  <div>
                    <h4>Picked Up</h4>
                    <p>Items collected</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-circle">
                    4
                  </div>
                  <div>
                    <h4>Washing</h4>
                    <p>In progress</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-circle">
                    5
                  </div>
                  <div>
                    <h4>Ready</h4>
                    <p>Clean, folded, and packed</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-circle">
                    6
                  </div>
                  <div>
                    <h4>Delivered</h4>
                    <p>Returned to customer</p>
                  </div>
                </div>
              </div>

              <button className="advance-btn">
                Advance to Next Stage
              </button>
              <div className="advance-btn-text">
                <span>LAST UPDATED BY ADMIN 2 MINS AGO</span>
              </div>
            </div>

            <div className="driver-card">
              <h3>Driver Information</h3>
              <div className="driver-box">
                <Truck size={35} />
                <p>No driver assigned yet</p>
              </div>
              <button className="assign-btn" onClick={()=> nav("/assigndriver")}>
                Assign Driver
              </button>
            </div>
          </div>
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

export default Customers;