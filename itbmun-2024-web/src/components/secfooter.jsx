import React from "react";
import "../styles/secfooter.css";
import { Link } from "react-router-dom";
import Logo from "../assets/ITBMUN-Logo.png";

function SecFooter() {
  return (
    <div className="SecFooter">
      <div className="Menu">
        <Link to="/"> Home </Link>
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

export default SecFooter;
