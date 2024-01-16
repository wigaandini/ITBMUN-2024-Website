import React, { useState } from "react";
import Logo from "../assets/ITBMUN-Logo.png";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
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
        <Link to="/"> ITBMUN 2024 </Link>
      </div>
      <Sidebar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <div className="RightSide">
        <Link to="/about"> About Us </Link>
        <Link to="/councils"> Councils </Link>
        <Link to="/registration"> Registration </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/sponsors"> Sponsors </Link>
        <button id="open" onClick={toggleNavbar} className={isOpen ? "active" : ""}>
          <ReorderIcon style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
