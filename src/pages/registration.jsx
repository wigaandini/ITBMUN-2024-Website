import React from "react";
import "../styles/registration.css";
import Logo from "../assets/logo-black.png";

function Registration() {
  const GBURL = "https://drive.google.com/file/d/1Ds35_aGfdnw9cjm9nvM6-_qkR3WLb7ol/view?usp=drivesdk";
  const CHAIRURL = "https://bit.ly/ChairRecruitmentITBMUN2024";
  const DELSINGLEURL = "https://forms.gle/teUSCbEbUsHVLKjH6";
  const DELURL = "https://forms.gle/cWbyNiPF7zmki4kw7";
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
