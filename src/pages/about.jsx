import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <h1> ABOUT US</h1>
        <p>
          An annual series of events organized by its committee, led by a
          Secretary General, from the students of Institut Teknologi Bandung
          (ITB), first initiated by Ganesha MUN Club in 2016. This event has
          several pre-events that precede the main MUN Competition scheduled for
          June 2024!
        </p>
        <p>
          Unfamiliar with MUNs? Don't worry – it's a{" "}
          <em>
            <b> simulation of the United Nations </b>
          </em>{" "}
          where students act as delegates, addressing real-world issues with the
          policies of their assigned countries. It's the model of the United
          Nations. Whether you're passionate about MUN or just curious, ITBMUN
          is the perfect place for you!
        </p>
      </div>
      <div className="aboutBottom">
        <p> Let's take a closer look at the previous ITBMUN 2023! </p>
        <div className="video-container">
          <div className="whiteLayer"/>
          <div className="iframeContainer">
            <iframe
              class="videoIframe"
              title="Aftermovie ITBMUN 2023"
              src="https://www.youtube.com/embed/5w92xdfIaMA"
              frameborder="0"
              allowfullscreen
            ></iframe>
            {/* harusnya tambahin dokum tp ntar ajalah mager */}
          </div>
          <p className="video-caption">
            <em> Aftermovie ITBMUN 2023 </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
