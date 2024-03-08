import React from "react";
import "../styles/registration.css";
import Logo from "../assets/logo-black.png";

function Registration() {
  const GBURL = "*";
  const CHAIRURL = "https://bit.ly/ChairRecruitmentITBMUN2024";
  const DELSINGLEURL = "https://docs.google.com/forms/d/e/1FAIpQLSdeQb3CRV30ttL9lD6w2M7j-_USdHFsLKLQCOI0xlZHfz26-Q/viewform?usp=sf_link";
  const DELURL = "https://docs.google.com/forms/d/e/1FAIpQLScHsdrSWmYjp4nczAdHPRjHJq2oSb1o5YqgsXna7hgbIFt9zA/viewform";

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
          <a href={CHAIRURL} target="_blank" rel="noopener noreferrer">
            <button> Chair </button>
          </a>
          <a href={DELURL} target="_blank" rel="noopener noreferrer">
            <button> Delegations </button>
          </a>
          <a href={DELSINGLEURL} target="_blank" rel="noopener noreferrer">
            <button> Single Delegate </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
