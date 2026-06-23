import React, { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import TabContainer from './components/TabContainer';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [appStarted, setAppStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="app">
      {!appStarted ? (
        <StartScreen onStart={() => setAppStarted(true)} />
      ) : (
        <>
          <header className="app-header">
            <button 
              className="mute-btn"
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? "Unmute all sounds" : "Mute all sounds"}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
            
            <div className="header-content">
              <h1>When stress interacts, responses diverge</h1>
              <p className="subtitle">Noise and light pollution reshape vocal behaviour of Eurasian coots</p>
            </div>

            <div className="header-spacer"></div>
          </header>
          
          <main className="app-main">
            <TabContainer isMuted={isMuted} />
          </main>
          
          <footer className="app-footer">
            <FeedbackForm />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
