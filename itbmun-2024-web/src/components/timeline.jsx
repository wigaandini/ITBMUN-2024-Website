import "../styles/timeline.css";
import React from "react";
import Circle from "../assets/circle.webp"

function Timeline() {
  return (
    <div className="Timeline">
      <div className="Title">
        <h1>Timeline of ITBMUN 2024</h1>
      </div>
      <div className="Container LeftContainer">
        <img src={ Circle } />
        <div className="TextBox">
          <h2> Staff Open Recruitment </h2>
          <small> 18 December 2023 - 15 January 2024 </small>
          <p>
            {" "}
            The recruitment process for ITBMUN 2024 staff members will be held
            online using google forms.{" "}
          </p>
          <span className="LeftArrow"></span>
        </div>
      </div>

      <div className="Container RightContainer">
        <img src={ Circle } />
        <div className="TextBox">
          <h2> TPB Roadshow </h2>
          <small> 5 - 6 January 2024 </small>
          <p>
            ITBMUN 2024 will be promoted to the new students of ITB through a
            roadshow event. The event will be held online using zoom meeting.{" "}
          </p>
          <span className="RightArrow"></span>
        </div>
      </div>

      <div className="Container LeftContainer">
        <img src={ Circle } />
        <div className="TextBox">
        <h2> Chair Recruitment </h2>
          <small> 15 January - 5 February 2024 </small>
          <p>
            {" "}
            The recruitment process for ITBMUN 2024 chair members will be held
            online.{" "}
          </p>
          <span className="LeftArrow"></span>
        </div>
      </div>

      <div className="Container RightContainer">
        <img src={ Circle } />
        <div className="TextBox">
        <h2> High School Roadshow </h2>
          <small> End of January 2024 </small>
          <p>
            {" "}
            ITBMUN 2024 will be promoted to the high school students in
            Indonesia through a roadshow event.{" "}
          </p>
          <span className="RightArrow"></span>
        </div>
      </div>

      <div className="Container LeftContainer">
        <img src={ Circle } />
        <div className="TextBox">
        <h2> Welcoming Party </h2>
          <small> February 2024 </small>
          <p>
            {" "}
            The welcoming party for the staffs of ITBMUN 2024 will be held.{" "}
          </p>
          <span className="LeftArrow"></span>
        </div>
      </div>

      <div className="Container RightContainer">
        <img src={ Circle } />
        <div className="TextBox">
        <h2> University Roadshow </h2>
          <small> March - May 2024 </small>
          <p>
            {" "}
            ITBMUN 2024 will be promoted to the students of various universities
            in Indonesia through a roadshow event.{" "}
          </p>
          <span className="RightArrow"></span>
        </div>
      </div>

      <div className="Container LeftContainer">
        <img src={ Circle } />
        <div className="TextBox">
          <h2> Early Wave Registration </h2>
          <small> March 2024 </small>
          <p>
            {" "}
            The first wave of registration for delegates of ITBMUN 2024 will be
            opened.{" "}
          </p>
          <span className="LeftArrow"></span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
