import { useState } from 'react';
import './Hero.css';

export default function Hero({ onStartPlanning }) {
  const [selectedVibe, setSelectedVibe] = useState('heritage');

  const vibeHighlights = {
    heritage: {
      title: 'Hampi & Mysuru Royal Heritage',
      description: 'Stone Chariots, Vijayanagara ruins, and Mysore Palace illuminations.',
      duration: '4 Days',
      budget: '₹2,600/day',
      image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7d4?auto=format&fit=crop&w=700&q=80',
      tag: 'UNESCO & Royal Circuit'
    },
    nature: {
      title: 'Coorg Coffee & Western Ghats Mist',
      description: 'Lush coffee plantation walks, Abbey waterfalls, and Kodava homestays.',
      duration: '3 Days',
      budget: '₹3,200/day',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=700&q=80',
      tag: 'Canopy & Treks'
    },
    coastal: {
      title: 'Gokarna Arabian Cliff Trail',
      description: 'Om Beach cliff treks, sunset drums, Mahabaleshwar shrine, & Neer Dosa.',
      duration: '3 Days',
      budget: '₹1,900/day',
      image: 'https://images.unsplash.com/photo-1607558355677-f8e28e4695b7?auto=format&fit=crop&w=700&q=80',
      tag: 'Golden Sands & Serenity'
    }
  };

  const currentVibe = vibeHighlights[selectedVibe];

  return (
    <section id="home" className="hero-section">
      <div className="hero-pattern-bg"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="pill-dot"></span>
            <span className="pill-text">AI Travel Engine for Karunadu • Hackathon Edition</span>
          </div>

          <h1 className="hero-title">
            Your Karnataka Journey, <span className="highlight-terracotta">Your Way.</span>
          </h1>

          <p className="hero-lead">
            Discover Karnataka beyond generic tourist itineraries. From the majestic Vijayanagara stone chariots in <strong>Hampi</strong> and the royal palaces of <strong>Mysuru</strong>, to misty coffee estates in <strong>Coorg</strong> and sacred coastal cliffs in <strong>Gokarna</strong> — NammaTrip AI designs intelligent, personalized journeys matched to your pace, budget, and curiosity.
          </p>

          {/* Call to action buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onStartPlanning}
              aria-label="Start personalized Karnataka travel planning"
            >
              <span>Plan My Itinerary Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a href="#destinations" className="btn-hero-secondary">
              <span>Explore Top Gems</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-strip">
            <div className="stat-item">
              <span className="stat-number">31</span>
              <span className="stat-label">Districts Supported</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Hyper-Local Routes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">₹ Real</span>
              <span className="stat-label">Live Budget Tiers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">ಕನ್ನಡ</span>
              <span className="stat-label">Cultural Phrases</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive AI Preview Card */}
        <div className="hero-visual">
          <div className="hero-card-window">
            <div className="card-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title-tag">
                <span>⚡ AI Live Trip Preview</span>
              </div>
            </div>

            {/* Vibe switch tabs */}
            <div className="vibe-switcher">
              <button
                type="button"
                className={`vibe-btn ${selectedVibe === 'heritage' ? 'active' : ''}`}
                onClick={() => setSelectedVibe('heritage')}
              >
                🏛️ Heritage
              </button>
              <button
                type="button"
                className={`vibe-btn ${selectedVibe === 'nature' ? 'active' : ''}`}
                onClick={() => setSelectedVibe('nature')}
              >
                ☕ Coffee Hills
              </button>
              <button
                type="button"
                className={`vibe-btn ${selectedVibe === 'coastal' ? 'active' : ''}`}
                onClick={() => setSelectedVibe('coastal')}
              >
                🌊 Coastline
              </button>
            </div>

            {/* Interactive Preview Body */}
            <div className="card-visual-body">
              <div className="preview-image-container">
                <img
                  src={currentVibe.image}
                  alt={currentVibe.title}
                  className="preview-image"
                  loading="lazy"
                />
                <div className="image-overlay-badge">
                  <span>{currentVibe.tag}</span>
                </div>
              </div>

              <div className="preview-meta-details">
                <div className="preview-top-row">
                  <h3 className="preview-trip-title">{currentVibe.title}</h3>
                  <span className="preview-rating">⭐ 4.9</span>
                </div>

                <p className="preview-desc">{currentVibe.description}</p>

                <div className="preview-badges-row">
                  <span className="preview-badge duration-badge">
                    ⏱️ {currentVibe.duration}
                  </span>
                  <span className="preview-badge budget-badge">
                    💰 {currentVibe.budget}
                  </span>
                  <span className="preview-badge ai-badge">
                    🤖 Optimized Transit
                  </span>
                </div>

                <div className="preview-action-row">
                  <a href="#destinations" className="preview-cta-link">
                    <span>View Itinerary Highlights</span>
                    <span className="arrow-sym">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Live AI assistant whisper note */}
            <div className="ai-whisper-box">
              <div className="whisper-avatar">💡</div>
              <div className="whisper-text">
                <strong>NammaTrip AI Tip:</strong> "Best local transit: KSRTC Airavat for intercity & auto-rickshaws with meter for city walks."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
