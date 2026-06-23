import React, { useState, useRef, useEffect } from 'react';
import './ResponseTab.css';
import SoundPlayer from './SoundPlayer';
import ControlSwitches from './ControlSwitches';

const ResponseTab = ({
  tabId,
  label,
  description,
  lightOn,
  noiseOn,
  setLightOn,
  setNoiseOn,
  isPlaying,
  setIsPlaying,
  isMuted
}) => {
  const audioRefs = useRef({
    light_off_noise_off: null,
    light_on_noise_off: null,
    light_off_noise_on: null,
    light_on_noise_on: null
  });

  const [activeSound, setActiveSound] = useState('light_off_noise_off');

  // Determine which sound to play based on light and noise switches
  useEffect(() => {
    let soundToPlay = 'light_off_noise_off';
    
    if (lightOn && noiseOn) {
      soundToPlay = 'light_on_noise_on';
    } else if (lightOn) {
      soundToPlay = 'light_on_noise_off';
    } else if (noiseOn) {
      soundToPlay = 'light_off_noise_on';
    }

    // Stop all sounds
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Play the new sound (unless muted)
    setActiveSound(soundToPlay);
    if (!isMuted && audioRefs.current[soundToPlay]) {
      audioRefs.current[soundToPlay].play().catch(err => {
        console.log('Audio playback failed:', err);
      });
      setIsPlaying(prev => ({
        ...prev,
        [tabId]: true
      }));
    }
  }, [lightOn, noiseOn, isMuted, tabId, setIsPlaying]);

  return (
    <div className="response-tab">
      <div className="tab-header">
        <h2>{label}</h2>
        <p className="tab-description">{description}</p>
      </div>

      <div className="sound-player-section">
        <h3>Current Sound</h3>
        <SoundPlayer
          tabId={tabId}
          soundType={activeSound}
          audioRefs={audioRefs}
          isPlaying={isPlaying[tabId] && !isMuted}
          isMuted={isMuted}
        />
      </div>

      <div className="controls-section">
        <h3>Environmental Conditions</h3>
        <ControlSwitches
          lightOn={lightOn}
          noiseOn={noiseOn}
          setLightOn={setLightOn}
          setNoiseOn={setNoiseOn}
        />
      </div>

      <div className="conditions-info">
        <div className="condition-badge">
          <span className={`badge ${lightOn ? 'active' : ''}`}>
            💡 Light: {lightOn ? 'ON' : 'OFF'}
          </span>
        </div>
        <div className="condition-badge">
          <span className={`badge ${noiseOn ? 'active' : ''}`}>
            🔊 Noise: {noiseOn ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResponseTab;
