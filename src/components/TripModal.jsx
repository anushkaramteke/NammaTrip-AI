import { useState, useEffect } from 'react';
import './TripModal.css';

export default function TripModal({ isOpen, onClose, initialDestination, initialPrompt }) {
  const [destination, setDestination] = useState(initialDestination?.name || 'Hampi');
  const [duration, setDuration] = useState('3');
  const [pace, setPace] = useState('balanced');
  const [budget, setBudget] = useState('comfort');
  const [notes, setNotes] = useState(initialPrompt || '');
  const [planResult, setPlanResult] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleGenerate = (e) => {
    e.preventDefault();

    const generatedDays = [];
    const numDays = parseInt(duration, 10) || 3;

    for (let i = 1; i <= numDays; i++) {
      if (destination.includes('Hampi')) {
        generatedDays.push({
          day: `Day ${i}`,
          title: i === 1 ? 'Sacred Centre & Tungabhadra River' : i === 2 ? 'Vijaya Vittala & Royal Enclosures' : 'Matanga Sunrise & Hippie Island',
          highlights: i === 1 ? ['Virupaksha Temple darshan', 'Coracle boat ride', 'Sunset at Hemakuta Hill'] : i === 2 ? ['Musical pillars at Vittala', 'Stone Chariot', 'Lotus Mahal'] : ['Morning trek on Matanga Hill', 'Anegundi ancient village', 'Riverside sunset']
        });
      } else if (destination.includes('Mysuru')) {
        generatedDays.push({
          day: `Day ${i}`,
          title: i === 1 ? 'Palaces & Royal Heritage' : i === 2 ? 'Chamundi Hill & Silk Looms' : 'Srirangapatna & Brindavan',
          highlights: i === 1 ? ['Amba Vilas Palace tour', 'Mylari Dosa breakfast', 'Sunday Palace illumination'] : i === 2 ? ['Chamundeshwari temple climb', 'Government Silk Factory', 'Devaraja Market spices'] : ['Tipu Sultan Summer Palace', 'Ranganathittu Bird Sanctuary', 'Brindavan Gardens fountain']
        });
      } else if (destination.includes('Coorg')) {
        generatedDays.push({
          day: `Day ${i}`,
          title: i === 1 ? 'Coffee Canopies & Raja’s Seat' : i === 2 ? 'Waterfalls & Wildlife' : 'Talacauvery & Tibetan Settlement',
          highlights: i === 1 ? ['Arabica estate walking tour', 'Madikeri Fort', 'Sunset over Ghats from Raja’s Seat'] : i === 2 ? ['Abbey Falls mist trail', 'Dubare Elephant interaction', 'Kodava homestay dinner'] : ['Source of holy Cauvery river', 'Namdroling Golden Temple Bylakuppe', 'Organic spice shopping']
        });
      } else {
        generatedDays.push({
          day: `Day ${i}`,
          title: i === 1 ? 'Sacred Coastal Shrines' : i === 2 ? 'The 5-Beach Cliff Trek' : 'Yana Rocks & Mirjan Fort',
          highlights: i === 1 ? ['Mahabaleshwar Temple darshan', 'Kotitheertha holy tank', 'Sunset acoustic music at Kudle Beach'] : i === 2 ? ['Kudle to Om Beach cliff trail', 'Half Moon Beach swimming', 'Paradise Beach sunset'] : ['Monolithic Yana black karst rocks', '16th-century Mirjan Fort', 'Fresh coastal Neer Dosa']
        });
      }
    }

    setPlanResult({
      destination,
      duration: `${numDays} Days`,
      estBudget: budget === 'budget' ? `₹${numDays * 1600}` : budget === 'comfort' ? `₹${numDays * 3500}` : `₹${numDays * 8500}`,
      days: generatedDays
    });
  };

  return (
    <div className="trip-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="trip-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="btn-modal-close"
          onClick={onClose}
          aria-label="Close trip planner modal"
        >
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-badge">
            <span>✨ AI Itinerary Designer</span>
          </div>
          <h2 className="modal-title">Design Your Karnataka Journey</h2>
          <p className="modal-sub">
            Customize dates, group preferences, and pace. Let NammaTrip AI synthesize your travel plan.
          </p>
        </div>

        {!planResult ? (
          <form className="modal-form" onSubmit={handleGenerate}>
            <div className="modal-fields-grid">
              <div className="modal-field">
                <label className="modal-label">📍 Destination Focus</label>
                <select
                  className="modal-select"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="Hampi">Hampi (Vijayanagara Heritage)</option>
                  <option value="Mysuru">Mysuru (Palaces & Culture)</option>
                  <option value="Coorg (Kodagu)">Coorg (Coffee Hills & Mist)</option>
                  <option value="Gokarna">Gokarna (Beaches & Shrines)</option>
                  <option value="Grand Karnataka Loop">Grand Karnataka Loop (Multi-City)</option>
                </select>
              </div>

              <div className="modal-field">
                <label className="modal-label">🗓️ Trip Length</label>
                <select
                  className="modal-select"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="2">2 Days (Quick Break)</option>
                  <option value="3">3 Days (Long Weekend)</option>
                  <option value="4">4 Days (Deep Discovery)</option>
                  <option value="5">5 Days (Immersive Trail)</option>
                </select>
              </div>

              <div className="modal-field">
                <label className="modal-label">🏃 Travel Pace</label>
                <select
                  className="modal-select"
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                >
                  <option value="relaxed">Relaxed & Leisurely</option>
                  <option value="balanced">Balanced Sightseeing</option>
                  <option value="packed">Action-Packed Explorer</option>
                </select>
              </div>

              <div className="modal-field">
                <label className="modal-label">💰 Budget Preference</label>
                <select
                  className="modal-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="budget">Backpacker / Budget (₹1.5k/day)</option>
                  <option value="comfort">Comfort Explorer (₹3.5k/day)</option>
                  <option value="luxury">Royal Heritage (₹8.5k/day)</option>
                </select>
              </div>
            </div>

            <div className="modal-field">
              <label className="modal-label">📝 Special Wishes or Dietary Preferences</label>
              <textarea
                className="modal-textarea"
                rows="2"
                placeholder="e.g. Vegetarian South Indian food only, photography spots at sunrise, family with senior citizens..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="modal-actions-bar">
              <button
                type="submit"
                className="btn-modal-generate"
              >
                <span>Generate My Tailored Plan</span>
                <span>✨</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="modal-plan-result">
            <div className="result-top-summary">
              <div>
                <span className="res-tag">AI Generated Itinerary</span>
                <h3 className="res-title">{planResult.destination} ({planResult.duration})</h3>
              </div>
              <div className="res-budget-pill">
                <span>Est. Total: <strong>{planResult.estBudget}</strong></span>
              </div>
            </div>

            <div className="result-days-scroll">
              {planResult.days.map((d, idx) => (
                <div key={idx} className="result-day-card">
                  <div className="res-day-header">
                    <span className="res-day-num">{d.day}</span>
                    <span className="res-day-title">{d.title}</span>
                  </div>
                  <ul className="res-activity-list">
                    {d.highlights.map((h, hIdx) => (
                      <li key={hIdx}>✓ {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="result-actions-footer">
              <button
                type="button"
                className="btn-modal-back"
                onClick={() => setPlanResult(null)}
              >
                ← Edit Preferences
              </button>
              <button
                type="button"
                className="btn-modal-done"
                onClick={onClose}
              >
                Save & Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
