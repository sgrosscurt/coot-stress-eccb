import React, { useState } from 'react';
import './FeedbackForm.css';

const FORMSPREE_ID = 'mgojvdbq';

const FeedbackField = ({ id, label, placeholder, type = 'textarea' }) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async () => {
    if (!value.trim()) return;
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ [id]: value })
      });

      if (response.ok) {
        setStatus('success');
        setValue('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const buttonLabel = {
    idle: 'Send',
    submitting: '…',
    success: '✓',
    error: '✗'
  }[status];

  return (
    <div className="form-section">
      <label htmlFor={id}>{label}</label>
      <div className="input-row">
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            rows="3"
          />
        ) : (
          <input
            id={id}
            type="email"
            name={id}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
          />
        )}
        <button
          className={`inline-submit-btn ${status}`}
          onClick={handleSubmit}
          disabled={status === 'submitting'}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const FeedbackForm = () => {
  return (
    <div className="feedback-form-container">
      <h2 className="feedback-title">Share Your Thoughts</h2>

      <div className="feedback-form">
        <FeedbackField
          id="adaptive"
          label="Do you think this is adaptive or maladaptive?"
          placeholder="Share your thoughts..."
        />
        <FeedbackField
          id="research"
          label="Ideas for future research?"
          placeholder="What would you like to explore further?"
        />
        <FeedbackField
          id="email"
          label="Wanna get in touch?"
          placeholder="your.email@example.com"
          type="email"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
