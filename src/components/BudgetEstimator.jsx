import { useState } from 'react';
import { budgetTiers } from '../data/itinerarySample';
import './BudgetEstimator.css';

export default function BudgetEstimator() {
  const [selectedTierIdx, setSelectedTierIdx] = useState(1); // Default to Comfort Explorer
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(3);

  const activeTier = budgetTiers[selectedTierIdx];

  // Base daily rates per person
  const baseRates = [1500, 3750, 9500];
  const dailyRate = baseRates[selectedTierIdx];
  const totalTripEstimate = dailyRate * travelers * days;

  // Breakdown percentages
  const stayCost = Math.round(totalTripEstimate * 0.42);
  const transitCost = Math.round(totalTripEstimate * 0.28);
  const foodCost = Math.round(totalTripEstimate * 0.18);
  const activitiesCost = Math.round(totalTripEstimate * 0.12);

  return (
    <section id="budget" className="budget-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>💰 Pillar 2 • Transparent Travel Economics</span>
          </div>
          <h2 className="section-title">Hyper-Local Budget Estimator</h2>
          <p className="section-subtitle">
            No hidden costs or tourist-trap markups. From state-run KSRTC buses and family homestays to royal palace suites, simulate realistic Karnataka expenses tailored to your group size.
          </p>
        </div>

        {/* Tier Switcher Buttons */}
        <div className="budget-tiers-switch">
          {budgetTiers.map((tier, idx) => (
            <button
              key={idx}
              type="button"
              className={`tier-switch-btn ${selectedTierIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedTierIdx(idx)}
            >
              <span className="tier-name">{tier.tier}</span>
              <span className="tier-rate">{tier.range}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Calculator & Breakdown Grid */}
        <div className="budget-calculator-grid">
          {/* Controls & Estimate Display */}
          <div className="calculator-controls-card">
            <h3 className="calc-card-title">Customize Trip Parameters</h3>

            <div className="calc-inputs-group">
              <div className="input-field-block">
                <label className="field-label" htmlFor="travelers-range">
                  👥 Group Size: <strong>{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</strong>
                </label>
                <input
                  id="travelers-range"
                  type="range"
                  min="1"
                  max="8"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="range-slider"
                />
                <div className="range-marks">
                  <span>Solo (1)</span>
                  <span>Couple (2)</span>
                  <span>Family (4)</span>
                  <span>Group (8)</span>
                </div>
              </div>

              <div className="input-field-block">
                <label className="field-label" htmlFor="days-range">
                  🗓️ Trip Length: <strong>{days} Days</strong>
                </label>
                <input
                  id="days-range"
                  type="range"
                  min="1"
                  max="10"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="range-slider"
                />
                <div className="range-marks">
                  <span>Weekend (2d)</span>
                  <span>Classic (4d)</span>
                  <span>Grand Tour (7d+)</span>
                </div>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="estimate-highlight-box">
              <div className="highlight-tag">Estimated Total Karnataka Trip</div>
              <div className="highlight-price">
                ₹{totalTripEstimate.toLocaleString('en-IN')}
                <span className="highlight-sub"> / {travelers} travelers • {days} days</span>
              </div>
              <p className="highlight-caption">
                Approx. ₹{dailyRate.toLocaleString('en-IN')} per person / day for {activeTier.tier}
              </p>
            </div>
          </div>

          {/* Itemized Cost Breakdown */}
          <div className="breakdown-details-card">
            <h3 className="breakdown-card-title">Itemized Expense Architecture</h3>

            <div className="breakdown-list">
              <div className="breakdown-item">
                <div className="item-icon-col">🏨</div>
                <div className="item-info-col">
                  <div className="item-row-top">
                    <span className="item-title">Stays & Homestays (42%)</span>
                    <span className="item-cost">₹{stayCost.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="item-desc">{activeTier.stay}</p>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="item-icon-col">🚌</div>
                <div className="item-info-col">
                  <div className="item-row-top">
                    <span className="item-title">Intercity & Local Transit (28%)</span>
                    <span className="item-cost">₹{transitCost.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="item-desc">{activeTier.transit}</p>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="item-icon-col">☕</div>
                <div className="item-info-col">
                  <div className="item-row-top">
                    <span className="item-title">Karnataka Culinary & Coffee (18%)</span>
                    <span className="item-cost">₹{foodCost.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="item-desc">{activeTier.food}</p>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="item-icon-col">🎟️</div>
                <div className="item-info-col">
                  <div className="item-row-top">
                    <span className="item-title">Tickets, Guides & Experiences (12%)</span>
                    <span className="item-cost">₹{activitiesCost.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="item-desc">{activeTier.activities}</p>
                </div>
              </div>
            </div>

            <div className="budget-tip-banner">
              <span className="tip-bell">💡</span>
              <span className="tip-caption">
                <strong>Pro Local Tip:</strong> Booking KSRTC Airavat buses on their official portal gives a 10% round-trip discount across major Karnataka routes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
