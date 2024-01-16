import React, { useState } from "react";
import "../styles/council.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/font.css"

function Council() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="Council">

        <div className="CouncilList">
        <h1> COUNCIL INFO </h1>
        <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            transitionDuration={2000}
            infinite={true}
        >
            <div className="CouncilCard">
            <img src="/council/press-fix.png" alt="PRESS" />
            <a
                href="https://bestdelegate.com/a-guide-to-model-un-press-corps-committees/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2> PRESS </h2>
            </a>
            <h3> International Press Institute </h3>
            {/* <p> Test description for PRESS council. </p> */}
            </div>
            <div className="CouncilCard">
            <img src="/council/unesco-fix.png" alt="UNESCO" />
            <a href="https://www.unesco.org/en">
                <h2> UNESCO </h2>
            </a>
            <h3>
                {" "}
                United Nations Educational, Scientific and Cultural Organization{" "}
            </h3>
            {/* <p> Test description for UNESCO council. </p> */}
            </div>
            <div className="CouncilCard">
            <img src="/council/crisis-fix.png" alt="CRISIS" />
            <a href="https://bestdelegate.com/everything-you-need-to-know-about-crisis-committees/">
                <h2> CRISIS </h2>
            </a>
            <h3> Crisis Council </h3>
            {/* <p> Test description for CRISIS council. </p> */}
            </div>
            <div className="CouncilCard">
            <img src="/council/cstd-fix.png" alt="CSTD" />
            <a href="https://unctad.org/topic/commission-on-science-and-technology-for-development">
                <h2> CSTD </h2>
            </a>
            <h3> Commission on Science and Technology for Development </h3>
            {/* <p> Test description for CSTD council. </p> */}
            </div>
            <div className="CouncilCard">
            <img src="/council/unodc-fix.png" alt="UNODC" />
            <a href="https://www.unodc.org/">
                <h2> UNODC </h2>
            </a>
            <h3> United Nations Office of Drugs and Crime </h3>
            {/* <p> Test description for UNODC council. </p> */}
            </div>
            <div className="CouncilCard">
            <img src="/council/unsc-fix.png" alt="UNSC" />
            <a href="https://www.un.org/securitycouncil/">
                <h2> UNSC </h2>
            </a>
            <h3> United Nations Security Council </h3>
            {/* <p> Test description for UNSC council. </p> */}
            </div>
        </Carousel>
        </div>
    </div>
  );
}

export default Council;
