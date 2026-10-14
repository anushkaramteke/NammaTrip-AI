import { useState } from 'react';
import { sampleItineraries } from '../data/itinerarySample';
import './AIFeatures.css';

export default function AIFeaturesSection() {
  const [selectedItineraryId, setSelectedItineraryId] = useState('heritage-trail');
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const activeItinerary = sampleItineraries.find(it => it.id === selectedItineraryId) || sampleItineraries[0];

  return (
    <section id="ai-features" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>🧠 Pillar 1 • Algorithmic Travel Design</span>
          </div>
          <h2 className="section-title">AI Itinerary Planning Crafted for Karnataka</h2>
          <p className="section-subtitle">
            Generic map engines do not understand Ghat hairpin bends, temple darshan timings, or the Sunday Mysore Palace lighting. NammaTrip AI plans day-by-day routes using authentic Karnataka logic.
          </p>
        </div>

        {/* 3 Core AI Pillars Grid */}
        <div className="ai-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-box">
              <span>🗺️</span>
            </div>
            <h3 className="pillar-title">Transit-Aware Routing</h3>
            <p className="pillar-desc">
              Synchronizes Vande Bharat rail connections, KSRTC Airavat luxury buses, and optimal Ghat crossing hours to eliminate wasted transit time.
            </p>
            <div className="pillar-pill">Zero Backtracking</div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <span>🕒</span>
            </div>
            <h3 className="pillar-title">Temple & Crowd Timings</h3>
            <p className="pillar-desc">
              Recommends Matanga Hill sunrise before 6:15 AM, Mysore Palace at 7:00 PM Sunday, and Gokarna cliff trails during morning sea breeze.
            </p>
            <div className="pillar-pill">Peak-Hour Avoidance</div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box">
              <span>☕</span>
            </div>
            <h3 className="pillar-title">Hyper-Local Culinary Stops</h3>
            <p className="pillar-desc">
              Never miss iconic food stops: Davanagere Benne Dose, Madikeri Estate Filter Coffee, Maddur Vade, and Karavali Neer Dosa paired into your route.
            </p>
            <div className="pillar-pill">Curated Tastebuds</div>
          </div>
        </div>

        {/* Live Interactive Itinerary Showcase */}
        <div className="itinerary-showcase-box">
          <div className="showcase-header">
            <div className="showcase-badge">
              <span>Sample Multi-Day AI Generation</span>
            </div>
            <div className="itinerary-selector-btns">
              {sampleItineraries.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  className={`it-switch-btn ${selectedItineraryId === it.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedItineraryId(it.id);
                    setActiveDayIdx(0);
                  }}
                >
                  {it.title}
                </button>
              ))}
            </div>
          </div>

          <div className="showcase-content-grid">
            {/* Meta Sidebar */}
            <div className="itinerary-meta-sidebar">
              <span className="it-meta-label">Selected Route</span>
              <h4 className="it-meta-route">{activeItinerary.route}</h4>

              <div className="it-details-tags">
                <div className="it-tag-block">
                  <span className="tag-k">Duration</span>
                  <span className="tag-v">{activeItinerary.days}</span>
                </div>
                <div className="it-tag-block">
                  <span className="tag-k">Pace</span>
                  <span className="tag-v">{activeItinerary.intensity}</span>
                </div>
                <div className="it-tag-block">
                  <span className="tag-k">Cost Est.</span>
                  <span className="tag-v cost-v">{activeItinerary.budgetEstimate}</span>
                </div>
              </div>

              {/* Day navigation tabs */}
              <div className="days-vertical-tabs">
                <span className="days-nav-title">Select Day to Inspect:</span>
                {activeItinerary.schedule.map((dayItem, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`day-tab-btn ${activeDayIdx === index ? 'active' : ''}`}
                    onClick={() => setActiveDayIdx(index)}
                  >
                    <span className="day-btn-num">0{index + 1}</span>
                    <span className="day-btn-text">{dayItem.day.split(':')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Day Schedule Panel */}
            <div className="itinerary-day-panel">
              <div className="day-panel-header">
                <span className="panel-day-tag">Day 0{activeDayIdx + 1} Detailed Plan</span>
                <h3 className="panel-day-title">{activeItinerary.schedule[activeDayIdx].day}</h3>
              </div>

              <div className="day-activities-timeline">
                {activeItinerary.schedule[activeDayIdx].activities.map((act, idx) => (
                  <div key={idx} className="timeline-node">
                    <div className="node-marker">
                      <span className="marker-dot"></span>
                      <span className="node-step">Step {idx + 1}</span>
                    </div>
                    <div className="node-content">
                      <p className="activity-desc">{act}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ai-optimization-footer">
                <span className="opt-icon">⚡</span>
                <span className="opt-text">
                  <strong>AI Note:</strong> Scenic stops and buffer timings are pre-accounted to allow serene photography and stress-free transit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
