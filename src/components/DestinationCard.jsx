import { useState } from 'react';

export default function DestinationCard({ destination, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const [showTip, setShowTip] = useState(false);

  return (
    <article className="destination-card">
      <div className="destination-card-media">
        {!imgError ? (
          <img
            src={destination.heroImage}
            alt={`${destination.name} - ${destination.tagline || destination.description}`}
            className="destination-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="destination-fallback-bg"
            style={{ background: destination.fallbackGradient }}
          >
            <span className="fallback-kannada-char">{destination.kannadaName}</span>
          </div>
        )}

        <div className="media-overlay-gradient"></div>

        {/* Category tag */}
        <div className="card-top-badges">
          <span className="badge badge-forest">{destination.category}</span>
          <span className="card-rating-badge">★ {destination.rating}</span>
        </div>

        {/* Bottom media title */}
        <div className="media-bottom-info">
          <span className="kannada-subtitle">{destination.kannadaName}</span>
          <h3 className="destination-name">{destination.name}</h3>
        </div>
      </div>

      <div className="destination-card-body">
        <p className="destination-tagline">{destination.description || destination.tagline}</p>
        <span className="destination-region">📍 {destination.region}</span>

        {/* Quick parameters */}
        <div className="destination-specs-grid">
          <div className="spec-box">
            <span className="spec-label">Ideal Days</span>
            <span className="spec-val">{destination.idealDays}</span>
          </div>
          <div className="spec-box">
            <span className="spec-label">Best Season</span>
            <span className="spec-val">{destination.bestTime}</span>
          </div>
          <div className="spec-box spec-budget">
            <span className="spec-label">Est. Budget</span>
            <span className="spec-val">{destination.budgetRange}</span>
          </div>
        </div>

        {/* Best-Known Attractions */}
        {destination.attractions && destination.attractions.length > 0 && (
          <div className="destination-attractions-box">
            <span className="attractions-heading">🏛️ Best-Known Attractions:</span>
            <div className="attraction-chips-row">
              {destination.attractions.map((attr, idx) => (
                <span key={idx} className="attraction-chip">
                  {attr}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        {destination.highlights && destination.highlights.length > 0 && (
          <div className="destination-highlights">
            <span className="highlights-heading">Key Experiences:</span>
            <ul className="highlights-list">
              {destination.highlights.map((item, index) => (
                <li key={index} className="highlight-item">
                  <span className="highlight-bullet">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Signature local food */}
        {destination.signatureFood && (
          <div className="signature-food-strip">
            <span className="food-icon">🍛</span>
            <span className="food-text">
              <strong>Local Taste:</strong> {destination.signatureFood}
            </span>
          </div>
        )}

        {/* Collapsible AI Tip button */}
        {destination.aiTip && (
          showTip ? (
            <div className="card-ai-tip-box">
              <div className="tip-header">
                <span>🤖 {destination.aiTip}</span>
              </div>
              <button
                type="button"
                className="btn-toggle-tip"
                onClick={() => setShowTip(false)}
              >
                Hide AI Advice
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn-reveal-tip"
              onClick={() => setShowTip(true)}
              aria-label={`View AI travel tip for ${destination.name}`}
            >
              <span className="bulb-emoji">💡</span>
              <span>View AI Smart Travel Tip</span>
            </button>
          )
        )}

        {/* Card Actions: Google Maps Search Link & Plan a Trip Here */}
        <div className="card-actions-row">
          {destination.mapsUrl && (
            <a
              href={destination.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card-maps"
              title={`View ${destination.name} on Google Maps in a new tab`}
              aria-label={`View ${destination.name} on Google Maps`}
            >
              <span className="maps-pin-icon" aria-hidden="true">📍</span>
              <span>Google Maps</span>
              <span className="maps-ext-arrow" aria-hidden="true">↗</span>
            </a>
          )}
          <button
            type="button"
            className="btn-card-plan"
            onClick={() => onSelect(destination)}
            aria-label={`Plan a trip here in ${destination.name}`}
          >
            <span>Plan a Trip Here</span>
            <span className="card-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
