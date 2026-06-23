import React, { useState } from 'react';
import './FeedbackForm.css';

// FIX: Replace YOUR_FORM_ID below with your actual Formspree form ID.
// Sign up free at https://formspree.io, create a form, and paste the ID here.
// e.g. if your endpoint is https://formspree.io/f/abcd1234 → use 'abcd1234'
const FORMSPREE_ID = 'YOUR_FORM_ID';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    adaptive: '',
    research: '',
    email: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ adaptive: '', research: '', email: '' });
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
    idle: 'Send Feedback',
    submitting: 'Sending…',
    success: '✓ Submitted!',
    error: '✗ Error — try again'
  }[status];

  return (
    <div className="feedback-form-container">
      <h2 className="feedback-title">Share Your Thoughts</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="adaptive">Do you think this is adaptive or maladaptive?</label>
          <textarea
            id="adaptive"
            name="adaptive"
            value={formData.adaptive}
            onChange={handleChange}
            placeholder="Share your thoughts..."
            rows="3"
          />
        </div>

        <div className="form-section">
          <label htmlFor="research">Ideas for future research?</label>
          <textarea
            id="research"
            name="research"
            value={formData.research}
            onChange={handleChange}
            placeholder="What would you like to explore further?"
            rows="3"
          />
        </div>

        <div className="form-section">
          <label htmlFor="email">Wanna get in touch?</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
        </div>

        <button
          type="submit"
          className={`submit-btn ${status}`}
          disabled={status === 'submitting'}
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
