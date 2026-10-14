import { useState } from 'react';
import './CTASection.css';

export default function CTASection({ onOpenPlanner }) {
  const [quickInput, setQuickInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenPlanner(quickInput);
      setSubmitted(false);
      setQuickInput('');
    }, 600);
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-decor-circle circle-1"></div>
          <div className="cta-decor-circle circle-2"></div>

          <div className="cta-content">
            <span className="cta-kannada-salutation">ಬನ್ನಿ, ಕರ್ನಾಟಕ ನೋಡೋಣ • Come, Discover Karnataka</span>
            <h2 className="cta-title">
              Ready for an Unforgettable Karnataka Odyssey?
            </h2>
            <p className="cta-subtitle">
              Join over 12,000+ travelers exploring ancient empires, cloud-kissed Western Ghats, and sun-soaked beaches. Get your tailored day-by-day plan in under 60 seconds.
            </p>

            {/* Quick Prompt Input */}
            <form className="cta-prompt-form" onSubmit={handleSubmit}>
              <div className="cta-input-wrapper">
                <span className="cta-input-icon">✨</span>
                <input
                  type="text"
                  placeholder="e.g. 4-day heritage trip to Hampi & Badami with coffee lovers..."
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  className="cta-prompt-input"
                  aria-label="Describe your dream Karnataka trip"
                />
              </div>
              <button
                type="submit"
                className="btn-cta-submit"
                disabled={submitted}
              >
                {submitted ? 'Generating Plan...' : 'Design My Trip'}
              </button>
            </form>

            {/* Quick Inspiration Pills */}
            <div className="cta-pills-row">
              <span className="pills-label">Popular Prompts:</span>
              <button
                type="button"
                className="pill-suggest-btn"
                onClick={() => setQuickInput('Weekend escape to Coorg coffee estates for couples')}
              >
                ☕ Coorg Weekend
              </button>
              <button
                type="button"
                className="pill-suggest-btn"
                onClick={() => setQuickInput('Budget backpacker trek in Gokarna 5 beaches')}
              >
                🌊 Gokarna Beach Trek
              </button>
              <button
                type="button"
                className="pill-suggest-btn"
                onClick={() => setQuickInput('Royal Mysuru palace & Chamundi Hill 3-day family tour')}
              >
                🏛️ Mysuru Royal Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
