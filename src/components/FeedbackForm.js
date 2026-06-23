import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    adaptive: '',
    research: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you could send the data to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ adaptive: '', research: '', email: '' });
      setSubmitted(false);
    }, 2000);
  };

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

        <button type="submit" className="submit-btn">
          {submitted ? '✓ Submitted!' : 'Send Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
