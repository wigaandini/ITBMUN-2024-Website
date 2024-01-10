import React from "react";
import { Link } from "react-router-dom";
import "../styles/home1.css";
import Logo from "../assets/ITBMUN-Logo.png";

function Home() {
  return (
    <div className="Home">
      <div className="HeaderContainer">
        <div className="Header">
          <h1> ITBMUN 2024 </h1>
          <p> Greetings, esteemed delegates! </p>
          <Link to="/registration">
            <button> Register Now </button>
          </Link>
        </div>
      </div>
      <div className="LogoContainer">
        <img src={Logo} alt="ITBMUN Logo" className="Logo" />
      </div>
    </div>
  );
}

export default Home;
