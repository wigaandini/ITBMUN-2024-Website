import React, { useState } from "react";
import Logo from "../assets/ITBMUN-Logo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [isOpen, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="LeftSide" id={isOpen ? "open" : "close"}>
        <img src={Logo} alt="ITBMUN Logo" />
        <div className="HiddenLinksContainer">
          <div className="HiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/about"> About Us </Link>
            <Link to="/councils"> Councils </Link>
            <Link to="/register"> Registration </Link>
            <Link to="/articles"> Articles </Link>
            <Link to="/sponsors"> Sponsors </Link>
            <Link to="/contact"> Contact Us </Link>
          </div>
        </div>
      </div>
      <div className="RightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/councils"> Councils </Link>
        <Link to="/register"> Registration </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/sponsors"> Sponsors </Link>
        <Link to="/contact"> Contact Us </Link>
        <button id="open" onClick={toggleNavbar} className={isOpen ? "active" : ""}>
          <ReorderIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
