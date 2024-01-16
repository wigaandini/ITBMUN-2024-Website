import React, { useState } from 'react';
import '../styles/council.css';
import { councils } from '../components/councilcontent.jsx';


function Council() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % councils.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? councils.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='Councils'>
      <div className='Arrow ArrowLeft' onClick={goToPrev}>
        &lt;
      </div>
      <div className='Arrow ArrowRight' onClick={goToNext}>
        &gt;
      </div>
      <div className='CouncilSlider'>
        <div
          className='CouncilsContainer'
          style={{
            transform: `translateX(-${currentIndex * 100}%) rotate(0deg)`,
          }}
        >
          {councils.map((council, index) => (
            <div key={index} className='CouncilType'>
              <h2>{council.title}</h2>
              <h3>{council.subtitle}</h3>
              <p>{council.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='CirclesContainer'>
        {councils.map((_, index) => (
          <div
            key={index}
            className='Circle'
            onClick={() => goToIndex(index)}
            style={{
              backgroundColor: index === currentIndex ? '#555' : '#888',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Council;
