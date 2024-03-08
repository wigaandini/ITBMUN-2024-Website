import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          An annual series of events organized by its committee, led by a
          Secretary General, from the students of Institut Teknologi Bandung
          (ITB), first initiated by Ganesha MUN Club in 2016. This event has
          several pre-events that precede the main MUN Competition scheduled for
          June 2024!
        </p>
        <p>
          Unfamiliar with MUNs? Don't worry – it's a simulation of the United
          Nations where students act as delegates, addressing real-world issues
          with the policies of their assigned countries. It's the model of the
          United Nations. Whether you're passionate about MUN or just curious,
          ITBMUN is the perfect place for you!
        </p>
      </div>
    </div>
  );
}

export default About;
