import React from "react";
import "../styles/registration.css";
import Logo from "../assets/logo-black.png";

function Registration() {
  const GBURL = "https://drive.google.com/file/d/1pY9G-fQSCThvtC6UjQJSuYTY4cVgBAK6/view?usp=drivesdk";
  const CHAIRURL = "https://bit.ly/ChairRecruitmentITBMUN2024";
  const DELSINGLEURL = "https://forms.gle/j5jHtPj8usAZjYX48";
  const DELURL = "https://forms.gle/yJmstnkBvcXbFvgT8";
  const OBSURL = "https://forms.gle/mtBaxihww3CsvKc27"

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
          <a href={DELSINGLEURL} target="_blank" rel="noopener noreferrer">
            <button> Single Delegate </button>
          </a>
          <a href={OBSURL} target="_blank" rel="noopener noreferrer">
            <button> Observer </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
