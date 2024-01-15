import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import Logo from "../assets/ITBMUN-Logo.png";

function Sidebar({ toggleNavbar }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
    toggleNavbar();
  };

  return (
    <div className={`Sidebar ${isSidebarOpen ? "open" : ""}`} id="close">
      <div className="Sidebar__header">
        <img src={Logo} alt="ITBMUN Logo" />
      </div>
      <div className="Sidebar__links">
        <Link to="/about"> About Us </Link>
        <Link to="/councils"> Councils </Link>
        <Link to="/registration"> Registration </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/sponsors"> Sponsors </Link>
        <Link to="/contact"> Contact Us </Link>
      </div>
    </div>
  );
}

export default Sidebar;
