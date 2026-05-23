import React from "react";
import "./Css/TopBar.css";

import {
  Bell,
  Search,
} from "lucide-react";

const TopBar = ({title}) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h3>{title}</h3>
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
  );
};

export default TopBar;