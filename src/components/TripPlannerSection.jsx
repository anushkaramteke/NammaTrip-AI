import { useState, useEffect, useRef } from 'react';
import { generateDemoItinerary } from '../data/demoItineraries';
import { destinationsData } from '../data/destinations';
import { generateTripPlan } from '../services/api';
import './TripPlannerSection.css';

const AVAILABLE_INTERESTS = [
  { id: 'Nature', label: '🌿 Nature', desc: 'Waterfalls & Coffee' },
  { id: 'History', label: '🏛️ History', desc: 'Ancient Ruins & Forts' },
  { id: 'Beaches', label: '🌊 Beaches', desc: 'Cliffs & Coastal Trails' },
  { id: 'Food', label: '🍛 Food', desc: 'Dose, Coffee & Seafood' },
  { id: 'Adventure', label: '🧗 Adventure', desc: 'Treks & Coracles' },
  { id: 'Culture', label: '🎭 Culture', desc: 'Yakshagana & Heritage' }
];

const PACES = [
  { id: 'Relaxed', label: '☕ Relaxed', desc: 'Slow-paced & leisurely' },
  { id: 'Balanced', label: '⚖️ Balanced', desc: 'Optimal sightseeing & rest' },
  { id: 'Packed', label: '⚡ Packed', desc: 'See everything possible' }
];

const LANGUAGES = ['English', 'Kannada', 'Hindi'];

/**
 * Reusable slot card for Morning, Afternoon, and Evening activities.
 * Displays activity title, description, highlight, local food pairing,
 * estimated cost in INR, and Google Maps search link.
 */
function SlotCard({ slot, slotType, defaultTime }) {
  if (!slot) return null;
  const badgeClass =
    slotType === 'morning'
      ? 'badge-morning'
      : slotType === 'afternoon'
      ? 'badge-afternoon'
      : 'badge-evening';
  const slotClass = `slot-card slot-${slotType}`;

  return (
    <div className={slotClass}>
      <div className="slot-header">
        <span className={`slot-badge ${badgeClass}`}>
          {slot.time || defaultTime}
        </span>
      </div>
      <h5 className="slot-title">{slot.title}</h5>
      <p className="slot-description">{slot.description}</p>

      {slot.highlight && (
        <div className="slot-highlight">
          <span className="highlight-tag">⭐ Highlight:</span>
          <span className="highlight-text">{slot.highlight}</span>
        </div>
      )}

      {slot.food && (
        <div className="slot-food">
          <span className="food-tag">
            {slotType === 'morning'
              ? '☕ Local Bite:'
              : slotType === 'afternoon'
              ? '🍛 Lunch Pairing:'
              : '🍽️ Twilight Dinner:'}
          </span>
          <span className="food-text">{slot.food}</span>
        </div>
      )}

      {slot.estimatedCost && (
        <div className="slot-cost-box">
          <span className="cost-tag">💰 Est. Cost:</span>
          <span className="cost-val">{slot.estimatedCost}</span>
        </div>
      )}

      {slot.mapsUrl && (
        <a
          href={slot.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="slot-maps-btn"
          title={`Search "${slot.title}" on Google Maps`}
        >
          <span>📍 View on Google Maps</span>
          <span className="external-arrow">↗</span>
        </a>
      )}
    </div>
  );
}

export default function TripPlannerSection({
  preselectedDestination,
  onClearPreselected,
  availableDestinations
}) {
  // Form State
  const [startingCity, setStartingCity] = useState('Bengaluru');
  const [duration, setDuration] = useState(3);
  const [budget, setBudget] = useState(12000);
  const [travellers, setTravellers] = useState(2);
  const [selectedInterests, setSelectedInterests] = useState(['History', 'Culture', 'Food']);
  const [pace, setPace] = useState('Balanced');
  const [language, setLanguage] = useState('English');
  const [targetDestination, setTargetDestination] = useState(preselectedDestination?.id || 'hampi');

  // UI State
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [itineraryResult, setItineraryResult] = useState(null);
  const [planError, setPlanError] = useState(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfError, setPdfError] = useState(null);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  const sectionRef = useRef(null);

  // Sync when preselected destination changes from outside
  const [prevPreselected, setPrevPreselected] = useState(preselectedDestination);
  if (preselectedDestination !== prevPreselected) {
    setPrevPreselected(preselectedDestination);
    if (preselectedDestination) {
      setTargetDestination(preselectedDestination.id);
      if (preselectedDestination.id === 'coorg') {
        setSelectedInterests(['Nature', 'Food', 'Culture']);
      } else if (preselectedDestination.id === 'gokarna') {
        setSelectedInterests(['Beaches', 'Adventure', 'Food']);
      } else if (preselectedDestination.id === 'hampi') {
        setSelectedInterests(['History', 'Culture', 'Adventure']);
      } else if (preselectedDestination.id === 'mysuru') {
        setSelectedInterests(['History', 'Culture', 'Food']);
      } else if (preselectedDestination.id === 'bengaluru') {
        setSelectedInterests(['Culture', 'Food', 'History']);
      } else if (preselectedDestination.id === 'chikkamagaluru') {
        setSelectedInterests(['Nature', 'Adventure', 'Food']);
      } else if (preselectedDestination.id === 'udupi') {
        setSelectedInterests(['Beaches', 'Food', 'Culture']);
      } else if (preselectedDestination.id === 'badami') {
        setSelectedInterests(['History', 'Culture', 'Adventure']);
      }
      setItineraryResult(null);
      setPlanError(null);
    }
  }

  const activeDestinations = availableDestinations && availableDestinations.length > 0
    ? availableDestinations
    : destinationsData;

  const currentDestinationObj =
    activeDestinations.find((d) => d.id === targetDestination || d.name?.toLowerCase() === targetDestination?.toLowerCase()) ||
    activeDestinations[0] || { name: 'Karnataka', id: 'karnataka' };

  const loadingMessages = [
    `Connecting to Gemini AI for ${currentDestinationObj.name}...`,
    `Analyzing routes and regional timing from ${startingCity}...`,
    `Curating morning, afternoon & evening experiences...`,
    `Selecting regional Karnataka dishes and Google Maps landmarks...`,
    `Calculating per-person budget estimates and finalizing itinerary...`
  ];

  // Loading animation simulation steps
  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
    }, 900);
    return () => clearInterval(timer);
  }, [isLoading, loadingMessages.length]);


  // Toggle interest
  const toggleInterest = (interestId) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        // Keep at least one
        if (prev.length === 1) return prev;
        return prev.filter((i) => i !== interestId);
      }
      return [...prev, interestId];
    });
    // Clear interest error if any
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: null }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!startingCity.trim()) {
      newErrors.startingCity = 'Starting city is required.';
    }

    const durNum = Number(duration);
    if (!durNum || isNaN(durNum) || durNum < 1 || durNum > 7) {
      newErrors.duration = 'Trip duration must be between 1 and 7 days.';
    }

    const budNum = Number(budget);
    if (!budNum || isNaN(budNum) || budNum <= 0) {
      newErrors.budget = 'Please enter a valid budget in Indian Rupees (₹).';
    } else if (budNum < 1500 * (Number(travellers) || 1)) {
      newErrors.budget = `Estimated minimum budget is ₹${(1500 * (Number(travellers) || 1)).toLocaleString('en-IN')} for ${travellers} traveller(s).`;
    }

    const travNum = Number(travellers);
    if (!travNum || isNaN(travNum) || travNum < 1 || travNum > 20) {
      newErrors.travellers = 'Number of travellers must be between 1 and 20.';
    }

    if (selectedInterests.length === 0) {
      newErrors.interests = 'Please select at least one travel interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission - Calls Gemini AI via FastAPI backend
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoadingStep(0);
    setIsLoading(true);
    setPlanError(null);

    try {
      const generated = await generateTripPlan({
        startingCity: startingCity.trim(),
        destinationId: targetDestination,
        destinationName: currentDestinationObj.name,
        duration: Number(duration),
        budget: Number(budget),
        travellers: Number(travellers),
        interests: selectedInterests,
        pace,
        language
      });
      setItineraryResult(generated);
      setIsLoading(false);

      // Smooth scroll to the result title
      setTimeout(() => {
        const resultElement = document.getElementById('itinerary-result-view');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err) {
      console.warn('Backend AI generation encountered an issue:', err);
      setIsLoading(false);
      setPlanError(
        err.message ||
        'Could not connect to the Gemini itinerary engine. Make sure FastAPI is running at http://127.0.0.1:8001.'
      );
    }
  };

  // Fallback demo loader if user wants to preview without API key
  const handleLoadDemo = () => {
    setPlanError(null);
    const demo = generateDemoItinerary({
      destinationId: targetDestination,
      startingCity: startingCity.trim(),
      duration,
      budget,
      travellers,
      interests: selectedInterests,
      pace,
      language
    });
    setItineraryResult(demo);
    setTimeout(() => {
      const resultElement = document.getElementById('itinerary-result-view');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle PDF Generation and Download
  const handleDownloadPdf = async () => {
    if (!itineraryResult || isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    setPdfError(null);
    setPdfSuccess(false);

    try {
      const { generateItineraryPDF } = await import('../services/pdfGenerator');
      await generateItineraryPDF(itineraryResult);
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 5000);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setPdfError(err.message || 'Could not generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Plan another trip handler
  const handlePlanAnother = () => {
    setItineraryResult(null);
    setPlanError(null);
    setPdfError(null);
    setPdfSuccess(false);
    setErrors({});
    if (onClearPreselected) onClearPreselected();
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <section id="trip-planner" ref={sectionRef} className="planner-section-container">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>✨ Interactive Itinerary Engine</span>
          </div>
          <h2 className="section-title">Design Your Karnataka Journey</h2>
          <p className="section-subtitle">
            Customize your starting location, group size, budget, and travel interests. Explore our structured morning, afternoon, and evening demo itinerary.
          </p>
        </div>

        {/* Destination Preselection Indicator */}
        <div className="destination-selector-banner">
          <div className="selector-banner-info">
            <span className="selector-banner-label">Target Karnataka Gem:</span>
            <div className="dest-pills-row">
              {activeDestinations.map((d) => (
                <button
                  key={d.id || d.name}
                  type="button"
                  className={`dest-pill-btn ${targetDestination === d.id ? 'active' : ''}`}
                  onClick={() => setTargetDestination(d.id)}
                >
                  <span className="dest-pill-kannada">{d.kannadaName}</span>
                  <span className="dest-pill-name">{d.name}</span>
                </button>
              ))}
            </div>
          </div>
          {preselectedDestination && (
            <div className="preselected-notice-badge">
              <span>🎯 Focused on {preselectedDestination.name}</span>
              <button
                type="button"
                className="btn-clear-preselect"
                onClick={onClearPreselected}
                title="Explore all destinations"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* LOADING STATE */}
        {isLoading && (
          <div className="planner-loading-card" role="status" aria-live="polite">
            <div className="loading-spinner-wrapper">
              <div className="loading-spinner-ring"></div>
              <div className="loading-compass-icon">🧭</div>
            </div>
            <h3 className="loading-title">Drafting Your {currentDestinationObj.name} Journey</h3>
            <p className="loading-step-text">{loadingMessages[loadingStep]}</p>
            <div className="loading-progress-track">
              <div
                className="loading-progress-bar"
                style={{ width: `${((loadingStep + 1) / 4) * 100}%` }}
              ></div>
            </div>
            <span className="loading-sub-note">
              Structuring morning, afternoon, and evening activities with realistic budget estimates...
            </span>
          </div>
        )}

        {/* ITINERARY RESULT VIEW */}
        {!isLoading && itineraryResult && (
          <div id="itinerary-result-view" className="itinerary-result-card" role="region" aria-label="Itinerary Result">
            {/* AI Banner or Transparent Demo Notice */}
            {itineraryResult.isAiGenerated ? (
              <div className="ai-success-banner">
                <div className="ai-badge-row">
                  <div className="ai-success-badge">
                    <span className="ai-sparkle">✨</span>
                    <strong>GEMINI AI POWERED ITINERARY</strong>
                  </div>
                  <span className="ai-model-tag">Google Gemini • Structured Plan</span>
                </div>
                <p className="ai-success-text">
                  Tailored day-by-day Karnataka schedule generated with Google Gemini, structured with morning, afternoon, and evening activities, regional food recommendations, estimated costs, and Google Maps search links.
                </p>
              </div>
            ) : (
              <div className="demo-disclaimer-banner">
                <div className="disclaimer-badge">
                  <span className="disclaimer-icon">📋</span>
                  <strong>CURATED DEMO ITINERARY PREVIEW</strong>
                </div>
                <p className="disclaimer-text">
                  This is a curated Karnataka travel preview showcasing day-by-day scheduling, morning/afternoon/evening slots, and budget calculation. Set GEMINI_API_KEY in backend/.env to unlock live Gemini AI generation.
                </p>
              </div>
            )}

            {/* Itinerary Header Bar */}
            <div className="result-header-bar">
              <div className="result-title-group">
                <span className="result-kannada-tag">ಕರ್ನಾಟಕ ಪ್ರವಾಸ ದರ್ಶನ</span>
                <h3 className="result-main-heading">
                  {itineraryResult.destinationName} ({itineraryResult.duration} Days)
                </h3>
                <p className="result-meta-line">
                  Starting from <strong>{itineraryResult.startingCity}</strong> • <strong>{itineraryResult.travellers}</strong> Traveller(s) • Pace: <strong>{itineraryResult.pace}</strong> • Language: <strong>{itineraryResult.language}</strong>
                </p>
              </div>

              {/* Actions: Download PDF & Plan Another Trip */}
              <div className="result-header-actions">
                <button
                  type="button"
                  className="btn-download-pdf"
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf || !itineraryResult}
                  title="Download complete itinerary as a printable PDF"
                  aria-label="Download itinerary as PDF"
                >
                  {isGeneratingPdf ? (
                    <>
                      <span className="pdf-spinner-glyph" aria-hidden="true">⏳</span>
                      <span>Preparing PDF...</span>
                    </>
                  ) : (
                    <>
                      <span className="btn-icon" aria-hidden="true">📄</span>
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn-plan-another"
                  onClick={handlePlanAnother}
                  aria-label="Edit options and plan another trip"
                >
                  <span>↺ Plan Another Trip</span>
                </button>
              </div>
            </div>

            {/* Budget Economics Bar */}
            <div className="result-budget-dashboard">
              <div className="budget-metric-card">
                <span className="metric-label">Total Estimated Budget</span>
                <span className="metric-val primary-price">
                  ₹{Number(itineraryResult.totalBudget).toLocaleString('en-IN')}
                </span>
                <span className="metric-sub">For {itineraryResult.travellers} traveller(s)</span>
              </div>

              <div className="budget-metric-card">
                <span className="metric-label">Per-Person Budget</span>
                <span className="metric-val">
                  ₹{Number(itineraryResult.perPersonBudget).toLocaleString('en-IN')}
                </span>
                <span className="metric-sub">₹{Number(itineraryResult.dailyPerPerson).toLocaleString('en-IN')} / person / day</span>
              </div>

              <div className="budget-metric-card tier-card">
                <span className="metric-label">Budget Tier & Feasibility</span>
                <span className="metric-badge-tier">{itineraryResult.budgetStatus}</span>
                <span className="metric-sub">{itineraryResult.budgetFeasibility}</span>
              </div>
            </div>

            {/* Budget Estimate Disclaimer Note */}
            {itineraryResult.budgetDisclaimer && (
              <div className="budget-disclaimer-card">
                <span className="disclaimer-title">ℹ️ Cost & Transit Estimate Notice:</span>
                <p className="disclaimer-body">{itineraryResult.budgetDisclaimer}</p>
              </div>
            )}

            {/* Interests & Travel Tags */}
            <div className="result-interests-strip">
              <span className="strip-label">Included Experiences:</span>
              <div className="strip-tags">
                {itineraryResult.interests.map((interest) => (
                  <span key={interest} className="interest-tag-pill">
                    ✓ {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Day-by-day Itinerary Timeline */}
            <div className="days-timeline-container">
              <h4 className="timeline-section-heading">
                🗓️ Day-by-Day Activity Schedule (Morning, Afternoon & Evening)
              </h4>

              <div className="timeline-days-stack">
                {itineraryResult.days.map((day) => (
                  <div key={day.dayNumber} className="day-schedule-card">
                    <div className="day-schedule-banner">
                      <div className="day-badge">Day 0{day.dayNumber}</div>
                      <h4 className="day-theme-title">{day.dayTitle}</h4>
                    </div>

                    <div className="slots-grid">
                      <SlotCard
                        slot={day.morning}
                        slotType="morning"
                        defaultTime="🌅 Morning"
                      />
                      <SlotCard
                        slot={day.afternoon}
                        slotType="afternoon"
                        defaultTime="☀️ Afternoon"
                      />
                      <SlotCard
                        slot={day.evening}
                        slotType="evening"
                        defaultTime="🌇 Evening"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Status Toasts */}
            {pdfSuccess && (
              <div className="pdf-status-banner pdf-status-success" role="status">
                <span className="status-icon">✅</span>
                <span><strong>PDF Downloaded:</strong> Your complete Karnataka travel itinerary has been saved to your downloads folder.</span>
              </div>
            )}
            {pdfError && (
              <div className="pdf-status-banner pdf-status-error" role="alert">
                <span className="status-icon">⚠️</span>
                <span><strong>PDF Generation Error:</strong> {pdfError}</span>
                <button
                  type="button"
                  className="btn-close-pdf-status"
                  onClick={() => setPdfError(null)}
                  title="Dismiss"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Footer Actions inside Result */}
            <div className="result-bottom-action-bar">
              <div className="disclaimer-note-inline">
                💡 <strong>Trip Actions:</strong> Download your customized itinerary as a printable PDF or modify travel parameters.
              </div>
              <div className="result-bottom-buttons-row">
                <button
                  type="button"
                  className="btn-download-pdf-large"
                  onClick={handleDownloadPdf}
                  disabled={isGeneratingPdf || !itineraryResult}
                  title="Download complete itinerary as a printable PDF"
                >
                  {isGeneratingPdf ? (
                    <>
                      <span className="pdf-spinner-glyph" aria-hidden="true">⏳</span>
                      <span>Preparing Printable PDF...</span>
                    </>
                  ) : (
                    <>
                      <span aria-hidden="true">📥</span>
                      <span>Download Itinerary as PDF</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn-plan-another-large"
                  onClick={handlePlanAnother}
                >
                  <span>Plan Another Trip / Modify Preferences</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PLANNER FORM (Shown when not loading and no result open) */}
        {!isLoading && !itineraryResult && (
          <>
            {/* AI Generation Error / Status Notification */}
            {planError && (
              <div className="plan-error-banner" role="alert">
                <div className="plan-error-top">
                  <div className="plan-error-badge">
                    <span className="plan-error-icon">⚠️</span>
                    <strong>Gemini AI Itinerary Notice</strong>
                  </div>
                  <button
                    type="button"
                    className="btn-close-error"
                    onClick={() => setPlanError(null)}
                    title="Dismiss notification"
                    aria-label="Dismiss error notification"
                  >
                    ✕
                  </button>
                </div>
                <p className="plan-error-message">{planError}</p>
                <div className="plan-error-actions">
                  <button
                    type="button"
                    className="btn-retry-ai"
                    onClick={(e) => handleSubmit(e)}
                  >
                    🔄 Retry AI Generation
                  </button>
                  <button
                    type="button"
                    className="btn-fallback-demo"
                    onClick={handleLoadDemo}
                  >
                    📋 View Curated Demo Preview Instead
                  </button>
                </div>
              </div>
            )}

            <form className="planner-form-card" onSubmit={handleSubmit} noValidate>
              <div className="form-card-top">
                <h3 className="form-legend">Trip Parameters</h3>
                <span className="form-legend-sub">All fields are validated for optimal Karnataka transit calculations</span>
              </div>

            <div className="form-fields-layout">
              {/* Row 1: Starting City & Trip Duration */}
              <div className="form-row-2">
                {/* Starting City */}
                <div className={`form-control-group ${errors.startingCity ? 'has-error' : ''}`}>
                  <label htmlFor="input-starting-city" className="control-label">
                    📍 Starting City <span className="req-star">*</span>
                  </label>
                  <input
                    id="input-starting-city"
                    type="text"
                    className="text-input"
                    placeholder="e.g. Bengaluru, Mysuru, Hubballi"
                    value={startingCity}
                    onChange={(e) => {
                      setStartingCity(e.target.value);
                      if (errors.startingCity) setErrors((prev) => ({ ...prev, startingCity: null }));
                    }}
                    required
                  />
                  {errors.startingCity && (
                    <span className="field-error-msg">{errors.startingCity}</span>
                  )}
                  {/* Quick City suggestions */}
                  <div className="quick-suggestions-row">
                    <span className="suggest-hint">Quick select:</span>
                    {['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        className={`city-pill ${startingCity === city ? 'active' : ''}`}
                        onClick={() => {
                          setStartingCity(city);
                          if (errors.startingCity) setErrors((prev) => ({ ...prev, startingCity: null }));
                        }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trip Duration */}
                <div className={`form-control-group ${errors.duration ? 'has-error' : ''}`}>
                  <div className="label-with-val">
                    <label htmlFor="input-duration" className="control-label">
                      🗓️ Trip Duration (1–7 Days) <span className="req-star">*</span>
                    </label>
                    <span className="val-badge">{duration} Days</span>
                  </div>
                  <div className="duration-selector-strip">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={`duration-step-btn ${Number(duration) === num ? 'active' : ''}`}
                        onClick={() => {
                          setDuration(num);
                          if (errors.duration) setErrors((prev) => ({ ...prev, duration: null }));
                        }}
                      >
                        {num}d
                      </button>
                    ))}
                  </div>
                  <input
                    id="input-duration"
                    type="range"
                    min="1"
                    max="7"
                    value={duration}
                    onChange={(e) => {
                      setDuration(Number(e.target.value));
                      if (errors.duration) setErrors((prev) => ({ ...prev, duration: null }));
                    }}
                    className="duration-range-slider"
                  />
                  {errors.duration && (
                    <span className="field-error-msg">{errors.duration}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Budget in Rupees & Number of Travellers */}
              <div className="form-row-2">
                {/* Budget in INR */}
                <div className={`form-control-group ${errors.budget ? 'has-error' : ''}`}>
                  <label htmlFor="input-budget" className="control-label">
                    💰 Total Budget (in Indian Rupees ₹) <span className="req-star">*</span>
                  </label>
                  <div className="currency-input-wrapper">
                    <span className="currency-symbol">₹</span>
                    <input
                      id="input-budget"
                      type="number"
                      min="1000"
                      step="500"
                      className="text-input currency-input"
                      placeholder="12000"
                      value={budget}
                      onChange={(e) => {
                        setBudget(e.target.value);
                        if (errors.budget) setErrors((prev) => ({ ...prev, budget: null }));
                      }}
                      required
                    />
                  </div>
                  {errors.budget ? (
                    <span className="field-error-msg">{errors.budget}</span>
                  ) : (
                    <div className="budget-quick-presets">
                      <span className="suggest-hint">Presets:</span>
                      {[6000, 12000, 24000, 50000].map((presetVal) => (
                        <button
                          key={presetVal}
                          type="button"
                          className={`preset-pill ${Number(budget) === presetVal ? 'active' : ''}`}
                          onClick={() => {
                            setBudget(presetVal);
                            if (errors.budget) setErrors((prev) => ({ ...prev, budget: null }));
                          }}
                        >
                          ₹{(presetVal / 1000)}k
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Number of Travellers */}
                <div className={`form-control-group ${errors.travellers ? 'has-error' : ''}`}>
                  <label htmlFor="input-travellers" className="control-label">
                    👥 Number of Travellers <span className="req-star">*</span>
                  </label>
                  <div className="traveller-stepper-wrapper">
                    <button
                      type="button"
                      className="stepper-btn"
                      onClick={() => {
                        if (travellers > 1) {
                          setTravellers((t) => t - 1);
                          if (errors.travellers) setErrors((prev) => ({ ...prev, travellers: null }));
                        }
                      }}
                      disabled={travellers <= 1}
                      aria-label="Decrease travellers"
                    >
                      −
                    </button>
                    <input
                      id="input-travellers"
                      type="number"
                      min="1"
                      max="20"
                      className="stepper-display-input"
                      value={travellers}
                      onChange={(e) => {
                        setTravellers(Number(e.target.value));
                        if (errors.travellers) setErrors((prev) => ({ ...prev, travellers: null }));
                      }}
                      required
                    />
                    <button
                      type="button"
                      className="stepper-btn"
                      onClick={() => {
                        if (travellers < 20) {
                          setTravellers((t) => t + 1);
                          if (errors.travellers) setErrors((prev) => ({ ...prev, travellers: null }));
                        }
                      }}
                      aria-label="Increase travellers"
                    >
                      +
                    </button>
                    <span className="traveller-type-hint">
                      {travellers === 1 ? 'Solo Adventurer' : travellers === 2 ? 'Couple / Pair' : travellers <= 5 ? 'Family / Friends' : 'Group Tour'}
                    </span>
                  </div>
                  {errors.travellers && (
                    <span className="field-error-msg">{errors.travellers}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Interests Multi-Select */}
              <div className={`form-control-group full-width ${errors.interests ? 'has-error' : ''}`}>
                <div className="label-with-val">
                  <span className="control-label">
                    🧭 Travel Interests <span className="req-star">*</span> (Select all that appeal)
                  </span>
                  <span className="val-badge">{selectedInterests.length} selected</span>
                </div>
                <div className="interests-chips-grid">
                  {AVAILABLE_INTERESTS.map((interest) => {
                    const isSelected = selectedInterests.includes(interest.id);
                    return (
                      <button
                        key={interest.id}
                        type="button"
                        className={`interest-chip-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleInterest(interest.id)}
                        aria-pressed={isSelected}
                      >
                        <span className="chip-label">{interest.label}</span>
                        <span className="chip-desc">{interest.desc}</span>
                        <span className="chip-check-mark">{isSelected ? '✓' : '+'}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.interests && (
                  <span className="field-error-msg">{errors.interests}</span>
                )}
              </div>

              {/* Row 4: Travel Pace & Language */}
              <div className="form-row-2">
                {/* Pace */}
                <div className="form-control-group">
                  <span className="control-label">🏃 Travel Pace</span>
                  <div className="pace-toggle-grid">
                    {PACES.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        className={`pace-toggle-btn ${pace === p.id ? 'active' : ''}`}
                        onClick={() => setPace(p.id)}
                      >
                        <span className="pace-name">{p.label}</span>
                        <span className="pace-desc">{p.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div className="form-control-group">
                  <span className="control-label">🗣️ Preferred Language</span>
                  <div className="language-toggle-grid">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        className={`lang-toggle-btn ${language === lang ? 'active' : ''}`}
                        onClick={() => setLanguage(lang)}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                  <span className="lang-sub-hint">
                    Translates day-wise companion tips and regional Karnataka signage instructions.
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Action Bar */}
            <div className="form-submit-footer">
              <div className="footer-calc-preview">
                <span className="calc-preview-label">Estimated Budget / Person:</span>
                <span className="calc-preview-val">
                  ₹{Math.round((Number(budget) || 12000) / (Number(travellers) || 1)).toLocaleString('en-IN')}
                </span>
                <span className="calc-preview-note">for {duration} days in {currentDestinationObj.name}</span>
              </div>

              <button
                type="submit"
                className="btn-generate-main"
                aria-label="Generate Karnataka travel itinerary"
              >
                <span>Generate My Itinerary</span>
                <span className="btn-sparkle-glyph">✨</span>
              </button>
            </div>
          </form>
        </>
      )}
      </div>
    </section>
  );
}
