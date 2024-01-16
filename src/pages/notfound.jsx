import React from "react";
import Logo from "../assets/ITBMUN-Logo.png";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div className="mainContainer">
      <img src={Logo} className="logo" alt="ITBMUN Logo " />
      <div className="descContainer">
        <div className="descTitle"> Oops! We think you have lost! </div>
        <div> The page you are looking for does not seem to be exist. </div>
        <a href="/">
          <button className="backButton"> Go back to Home Page </button>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
