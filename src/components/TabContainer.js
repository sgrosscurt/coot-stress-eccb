import React, { useState } from 'react';
import './TabContainer.css';
import ResponseTab from './ResponseTab';

const TabContainer = ({ isMuted }) => {
  const [activeTab, setActiveTab] = useState('activity');
  const [lightOn, setLightOn] = useState(false);
  const [noiseOn, setNoiseOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState({});

  const tabs = [
    {
      id: 'activity',
      label: 'Activity Rate',
      description: 'Synergistic increase in call rate'
    },
    {
      id: 'circadian',
      label: 'Circadian Pattern',
      description: 'Fundamental change in circadian rhythm due to multi-stress'
    },
    {
      id: 'duration',
      label: 'Call Duration',
      description: 'Antagonistic decrease in call duration'
    }
  ];

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map(tab => (
          activeTab === tab.id && (
            <ResponseTab
              key={tab.id}
              tabId={tab.id}
              label={tab.label}
              description={tab.description}
              lightOn={lightOn}
              noiseOn={noiseOn}
              setLightOn={setLightOn}
              setNoiseOn={setNoiseOn}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isMuted={isMuted}
            />
          )
        ))}
      </div>
    </div>
  );
};


export default TabContainer;

