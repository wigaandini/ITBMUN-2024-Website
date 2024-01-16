import React from "react";
import "../styles/home2.css";
import Pic from "../assets/home.JPG";

function Home2() {
  return (
    <div className="Home2">
      <div className="Title">
        <h1> What is ITBMUN? </h1>
      </div>
      <div className="Picture">
        <img src={Pic} alt="Pic" className="Pic" />
      </div>
      <div className="Description">
        <p>
          {" "}
          Since its inception in 2016 by GMUNC ITB, ITBMUN has distinguished
          itself through themes and discussions intricately woven into the
          fabric of science and technology. This sets ITBMUN apart from
          traditional Model United Nations (MUNs), typically dominated by
          students specializing in International Relations, Law, and related
          fields. Consequently, ITBMUN stands as a cornerstone in diplomatic
          education conferences and a crucial hub for fostering essential soft
          skills in Indonesia. ITBMUN's unique positioning aligns with its overarching objective as
          an inclusive collaborative platform. It plays a pivotal role in
          assisting students from diverse educational backgrounds in discovering
          common ground. This collaborative effort strives to shape ideal
          students and society, offering avenues for global engagement and
          collaboration.
        </p>
        <p>
          This year, ITBMUN unfolds under the grand theme, <em><b>"Ushering
          Regeneration in the Preservation of the Classical World." </b></em> 
          The theme encapsulates the essence of initiating regeneration while upholding
          the legacies within a well-established framework. It articulates a
          commitment to breathe new life into elements of the classical world,
          ensuring their relevance amid evolving times and demographics. The
          phrase underscores a dedication to revitalizing traditions and
          embracing change to adapt to contemporary challenges.
        </p>
      </div>
    </div>
  );
}

export default Home2;
