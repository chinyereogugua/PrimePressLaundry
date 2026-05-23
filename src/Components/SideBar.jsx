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
import { useNavigate, useLocation } from "react-router-dom"; 

const SideBar = () => {
  const nav = useNavigate();
  const location = useLocation(); 
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Orders", path: "/order", icon: <ShoppingBag size={18} /> },
    { name: "Customers", path: "/customers", icon: <Users size={18} /> },
    { name: "Review Analytics", path: "/analytics", icon: <BarChart3 size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <Primepresslaundrylogo />
        </div>

        <div className="sidebar-links">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.path}
                className={`sidebar-item ${isActive ? "active" : ""}`}
                onClick={() => nav(item.path)}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="logout" onClick={() => nav("/login")}>
        <LogOut size={18} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
