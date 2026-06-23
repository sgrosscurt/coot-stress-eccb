import React from 'react';
import './SoundPlayer.css';

const SoundPlayer = ({ tabId, soundType, audioRefs, isPlaying }) => {
  const getSoundLabel = () => {
    switch (soundType) {
      case 'light_off_noise_off':
        return 'Baseline (No stressors)';
      case 'light_on_noise_off':
        return 'Light Pollution Only';
      case 'light_off_noise_on':
        return 'Noise Pollution Only';
      case 'light_on_noise_on':
        return 'Light + Noise Pollution';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="sound-player">
      <div className="sound-info">
        <div className={`play-indicator ${isPlaying ? 'playing' : ''}`}>
          <div className="pulse"></div>
          <div className="pulse"></div>
          <div className="pulse"></div>
        </div>
        <div className="sound-label">
          <p className="now-playing">Now Playing</p>
          <p className="sound-name">{getSoundLabel()}</p>
        </div>
      </div>

      <div className="audio-container">
        <audio
          ref={el => {
            audioRefs.current['light_off_noise_off'] = el;
          }}
          src={`/sounds/${tabId}/light-off_noise-off.mp3`}
          loop
        />
        <audio
          ref={el => {
            audioRefs.current['light_on_noise_off'] = el;
          }}
          src={`/sounds/${tabId}/light-on_noise-off.mp3`}
          loop
        />
        <audio
          ref={el => {
            audioRefs.current['light_off_noise_on'] = el;
          }}
          src={`/sounds/${tabId}/light-off_noise-on.mp3`}
          loop
        />
        <audio
          ref={el => {
            audioRefs.current['light_on_noise_on'] = el;
          }}
          src={`/sounds/${tabId}/light-on_noise-on.mp3`}
          loop
        />
      </div>
    </div>
  );
};

export default SoundPlayer;
