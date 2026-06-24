import React from 'react';
import './SoundPlayer.css';

const SoundPlayer = ({ tabId, soundType, audioRefs, isPlaying, isMuted }) => {
  const labels = {
  activity: {
    light_off_noise_off: 'Quiet & Dark (108 calls/day)',
    light_on_noise_off: 'Quiet & Bright (168 calls/day, +56%)',
    light_off_noise_on: 'Noisy & Dark (128 calls/day, +18%)',
    light_on_noise_on: 'Noisy & Bright (318 calls/day +194%)',
  },
  circadian: {
    light_off_noise_off: 'Quiet & Dark (unimodal: 15:15)',
    light_on_noise_off: 'Quiet & Bright (unimodal: 13:40, -155 min)',
    light_off_noise_on: 'Noisy & Dark (unimodal: 16:35, +80 min)',
    light_on_noise_on: 'Noisy & Bright (bimodal: 07:25 and 17:00)',
  },
  duration: {
    light_off_noise_off: 'Quiet & Dark (83 ms)',
    light_on_noise_off: 'Quiet & Bright (61 ms, -27%)',
    light_off_noise_on: 'Noisy & Dark (63 ms, -24%)',
    light_on_noise_on: 'Noisy & Bright (56 ms, -33%)',
  },
};
  };

  return labels[tabId]?.[soundType] ?? 'Unknown';
};
  };

  // FIX: use process.env.PUBLIC_URL so paths work both locally (localhost:3000)
  // and on GitHub Pages (/coot-stress-eccb/). CRA sets this automatically.
  const soundBase = `${process.env.PUBLIC_URL}/sounds/${tabId}`;

  return (
    <div className="sound-player">
      <div className="sound-info">
        <div className={`play-indicator ${isPlaying && !isMuted ? 'playing' : ''}`}>
          <div className="pulse"></div>
          <div className="pulse"></div>
          <div className="pulse"></div>
        </div>
        <div className="sound-label">
          <p className="now-playing">Now Playing</p>
          <p className="sound-name">{getSoundLabel()}</p>
          {isMuted && <p className="sound-muted">(Muted)</p>}
        </div>
      </div>

      <div className="audio-container">
        <audio
          ref={el => { audioRefs.current['light_off_noise_off'] = el; }}
          src={`${soundBase}/light-off_noise-off.mp3`}
          loop
        />
        <audio
          ref={el => { audioRefs.current['light_on_noise_off'] = el; }}
          src={`${soundBase}/light-on_noise-off.mp3`}
          loop
        />
        <audio
          ref={el => { audioRefs.current['light_off_noise_on'] = el; }}
          src={`${soundBase}/light-off_noise-on.mp3`}
          loop
        />
        <audio
          ref={el => { audioRefs.current['light_on_noise_on'] = el; }}
          src={`${soundBase}/light-on_noise-on.mp3`}
          loop
        />
      </div>
    </div>
  );
};

export default SoundPlayer;
