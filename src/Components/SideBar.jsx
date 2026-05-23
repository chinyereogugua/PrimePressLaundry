import React from "react";
import "./Css/SideBar.css";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Primepresslaundrylogo from "./Primepresslaundrylogo";

const SideBar = () => {
  return (
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
  );
};

export default SideBar;