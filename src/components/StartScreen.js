import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-container">
        <div className="coot-icon">
  <img src={`${process.env.PUBLIC_URL}/icons/coot.png`} alt="Eurasian coot" />
</div>
        
        <h1 className="start-title">When stress interacts, responses diverge</h1>
        
        <p className="start-subtitle">
          Noise and light pollution reshape vocal behaviour of Eurasian coots
        </p>
        
        <p className="start-description">
          Explore how environmental stressors affect coot vocalizations across three behavioral responses. 
          Click the coot to begin!
        </p>

        <button className="start-btn" onClick={onStart}>
          <span className="coot-emoji">
  <img src={`${process.env.PUBLIC_URL}/icons/coot.png`} alt="" />
</span>
          <span className="btn-text">Click to Start</span>
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
