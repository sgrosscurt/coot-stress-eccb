import React from 'react';
import './ControlSwitches.css';

const ControlSwitches = ({ lightOn, noiseOn, setLightOn, setNoiseOn }) => {
  return (
    <div className="control-switches">
      <div className="switch-row">
        <span className="switch-icon">💡</span>
        <span className="switch-label">Light Pollution</span>
        <button
          className={`toggle-btn ${lightOn ? 'on' : 'off'}`}
          onClick={() => setLightOn(prev => !prev)}
          aria-pressed={lightOn}
          aria-label={`Light pollution ${lightOn ? 'on' : 'off'}`}
        >
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
          <span className="toggle-text">{lightOn ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      <div className="switch-row">
        <span className="switch-icon">🔊</span>
        <span className="switch-label">Noise Pollution</span>
        <button
          className={`toggle-btn ${noiseOn ? 'on' : 'off'}`}
          onClick={() => setNoiseOn(prev => !prev)}
          aria-pressed={noiseOn}
          aria-label={`Noise pollution ${noiseOn ? 'on' : 'off'}`}
        >
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
          <span className="toggle-text">{noiseOn ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </div>
  );
};

export default ControlSwitches;
