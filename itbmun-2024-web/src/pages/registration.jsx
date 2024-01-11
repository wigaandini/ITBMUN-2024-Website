import React from "react";
import "../styles/registration.css";
import Logo from "../assets/logo-black.png";

function Registration() {
  const GBURL = "https://forms.gle/2iqmwt58ZYmAhLTD9";
  const REGURL = "https://forms.gle/2iqmwt58ZYmAhLTD9";
  const DELURL = "https://bit.ly/YukPresensiDay4Lagi";

  return (
    <div className="Registration">
      <div className="GuideBook">
        <div className="guidebookContent">
          <img src={Logo} alt="ITBMUN Logo" />
          <p>Explore Our Guidebook!</p>
          <a href={GBURL} target="_blank" rel="noopener noreferrer">
            <button> Check Here!</button>
          </a>
        </div>
      </div>
      <div className="RegistrationForm">
        <div className="registrationContent">
          <p> What are you waiting for? Enroll immediately! </p>
          <a href={DELURL} target="_blank" rel="noopener noreferrer">
            <button> Delegation </button>
          </a>
          <a href={REGURL} target="_blank" rel="noopener noreferrer">
            <button> Regular </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
