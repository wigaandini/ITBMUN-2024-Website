import React, { useState, useEffect } from "react";
import ChakraCarousel from "./Carousel";

import "../styles/aboutCouncil.css"; // Import the CSS file for styling

function capsFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
    }, []);
    
    const SectionImage = ({ src }) => {
        <div className="box">
          <img className="image" src={src} alt="Placeholder" />
        </div>
    };

    return (
        <div className="container">
      <ChakraCarousel gap={50}>
        {data.slice(5, 12).map((post, index) => (
          <div key={index} className="flex-container">
            <div className="flex-item">
              <div className="v-stack">
                <h1 className="heading">{capsFirst(post.title)}</h1>
                <SectionImage src="./placeholder.png" />
                <p>{capsFirst(post.body)}</p>
              </div>
            </div>
          </div>
        ))}
      </ChakraCarousel>
    </div>
  );
}

function AboutCouncil() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-item">
          <div className="stack">
            <h1 className="heading">Councils</h1>
            <App />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCouncil;
