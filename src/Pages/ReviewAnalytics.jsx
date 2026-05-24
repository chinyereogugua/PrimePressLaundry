import React from "react";
import "./Css/ReviewAnalytics.css";
import {
  CalendarDays,
  ClipboardList,
  Truck,
  CircleAlert,
  Clock3,
  EllipsisVertical,
  Plus,
} from "lucide-react";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

const ReviewAnalytics = () => {
  return (
    <div className="review-page">
      <SideBar />
      <div className="review-main">
        <TopBar title={"Analytics"} />

        <div className="analytics-header">
          <div>
            <h1>Analytics & Performance</h1>
          </div>
          <div className="analytics-header-right">
            <button>This Week</button>
            <div className="dots-btn">
              <EllipsisVertical size={18}/>
            </div>
          </div>
        </div>

        <div className="analytics-cards">
          <div className="analytics-card">
            <div className="analytics-card-top">
              <div>
                <p>Avg. Processing Time</p>
                <h2>2.4 Days</h2>
              </div>
              <div className="analytics-icon">
                <CalendarDays size={18} />
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-top">
              <div>
                <p>Daily Capacity</p>
                <h2>84%</h2>
              </div>
              <div className="analytics-icon">
                <ClipboardList size={18} />
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-top">
              <div>
                <p>Expedited Orders</p>
                <h2>7 Active</h2>
                <span>Requires priority washing</span>
              </div>
              <div className="analytics-icons">
                <Plus size={18} />
              </div>
            </div>
          </div>

        </div>

        <div className="order-status-section">
          <div className="order-status-card">
            <div className="status-header">
              <div>
                <h3>Order Status</h3>
                <p>Live distribution of active jobs</p>
              </div>
            </div>

            <div className="status-circle">
              <div className="circle-inner"></div>
            </div>

            <div className="status-list">
              <div className="status-item">
                <span className="dot blue"></span>
                <p>New Request</p>
                <h5>15%</h5>
              </div>

              <div className="status-item">
                <span className="dot cyan"></span>
                <p>Washing</p>
                <h5>35%</h5>
              </div>

              <div className="status-item">
                <span className="dot orange"></span>
                <p>Picked Up</p>
                <h5>25%</h5>
              </div>

              <div className="status-item">
                <span className="dot green"></span>
                <p>Ready</p>
                <h5>15%</h5>
              </div>

              <div className="status-item">
                <span className="dot teal"></span>
                <p>Delivered</p>
                <h5>10%</h5>
              </div>
            </div>
          </div>

        </div>

        <div className="bottom-grid">
          <div className="services-card">
            <h3>Top Services</h3>
            <p>Most requested laundry types</p>

            <div className="service-item">
              <div className="service-top">
                <h4>Wash & Fold</h4>
                <span>42%</span>
              </div>
              <p>100 orders processed</p>
              <div className="progress-bar">
                <div className="progress blue-progress"></div>
              </div>
            </div>

            <div className="service-item">
              <div className="service-top">
                <h4>Dry Cleaning</h4>
                <span>28%</span>
              </div>
              <p>62 orders processed</p>
              <div className="progress-bar">
                <div className="progress green-progress"></div>
              </div>
            </div>

            <div className="service-item">
              <div className="service-top">
                <h4>Ironing</h4>
                <span>19%</span>
              </div>
              <p>50 orders processed</p>
              <div className="progress-bar">
                <div className="progress purple-progress"></div>
              </div>
            </div>

            <div className="service-item">
              <div className="service-top">
                <h4>Stain Removal</h4>
                <span>11%</span>
              </div>
              <p>20 orders processed</p>
              <div className="progress-bar">
                <div className="progress orange-progress"></div>
              </div>
            </div>
          </div>

          <div className="weekly-card">
            <div className="weekly-header">
              <div>
                <h3>Weekly Insights</h3>
                <p>Synthesized operational performance</p>
              </div>
            </div>

            <div className="weekly-insights">
              <div className="insight-box">
                <div className="insight-icon">
                  <Clock3 size={18} />
                </div>
                <h4>Processing Milestone</h4>
                <p>
                  Successfully reduced average turnaround by
                  15% this week through batch washing
                  optimization.
                </p>
              </div>

              <div className="insight-box">
                <div className="insight-icon">
                  <CircleAlert size={18} />
                </div>
                <h4>Capacity Alert</h4>
                <p>
                  Dryer 3 is showing wear indicators.
                  Maintenance scheduled for Tuesday at
                  04:00 AM.
                </p>
              </div>
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

export default ReviewAnalytics;