import { useState } from 'react';
import './QuickPlanner.css';

export default function QuickPlanner() {
  const [origin, setOrigin] = useState('Bengaluru');
  const [duration, setDuration] = useState('3');
  const [vibe, setVibe] = useState('heritage');
  const [budgetTier, setBudgetTier] = useState('moderate');
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      let planDetails = {};
      if (vibe === 'heritage') {
        planDetails = {
          title: `Vijayanagara & Royal Heritage Circuit (${duration} Days)`,
          route: `${origin} ➔ Mysuru ➔ Hospet (Hampi)`,
          estBudget: budgetTier === 'budget' ? '₹1,600 / day' : budgetTier === 'moderate' ? '₹3,400 / day' : '₹8,200 / day',
          stay: budgetTier === 'budget' ? 'Heritage Hostel / Guesthouse' : budgetTier === 'moderate' ? 'Boutique Heritage Haveli' : 'Royal Palace Heritage Suite',
          highlights: ['Sunrise at Matanga Hill', 'Mysore Palace Illumination', 'Vittala Stone Chariot', 'Chamundi Hill'],
          kannadaTip: 'Namaskāra! Idhu eshtu? (Hello! How much is this?)',
          foodTip: 'Authentic Davanagere Benne Dose & warm Mysore Pak'
        };
      } else if (vibe === 'nature') {
        planDetails = {
          title: `Western Ghats & Coffee Mist Trail (${duration} Days)`,
          route: `${origin} ➔ Sakleshpur ➔ Coorg (Madikeri)`,
          estBudget: budgetTier === 'budget' ? '₹1,800 / day' : budgetTier === 'moderate' ? '₹3,800 / day' : '₹9,500 / day',
          stay: budgetTier === 'budget' ? 'Plantation Backpacker Dorm' : budgetTier === 'moderate' ? 'Organic Estate Homestay' : 'Luxury Rainforest Villa',
          highlights: ['Arabica Plantation Walk', 'Abbey & Iruppu Falls', 'Raja’s Seat Sunset', 'Dubare Riverfront'],
          kannadaTip: 'Ondhu bisi filter coffee kodi (Please give one hot filter coffee)',
          foodTip: 'Steamed Akki Roti with fragrant bamboo shoot curry'
        };
      } else {
        planDetails = {
          title: `Karavali Golden Coastline & Cliff Trails (${duration} Days)`,
          route: `${origin} ➔ Murudeshwara ➔ Gokarna`,
          estBudget: budgetTier === 'budget' ? '₹1,400 / day' : budgetTier === 'moderate' ? '₹2,900 / day' : '₹6,800 / day',
          stay: budgetTier === 'budget' ? 'Beachfront Shack / Hostel' : budgetTier === 'moderate' ? 'Kudle Cliff Cottage' : 'Luxury Coastal Eco-Resort',
          highlights: ['Om Beach Cliff Trek', 'Mahabaleshwar Lingam Darshan', 'Sunset Drum Circles', 'Dolphin Boat Cruise'],
          kannadaTip: 'Illi nillisi (Please stop here)',
          foodTip: 'Mangalore Neer Dosa with fresh coastal curry'
        };
      }
      setGeneratedPlan(planDetails);
      setIsGenerating(false);
    }, 450);
  };

  return (
    <div id="planner" className="planner-wrapper">
      <div className="container">
        <div className="planner-card">
          <div className="planner-card-header">
            <div className="planner-tag">
              <span>⚡ Interactive Quick Planner</span>
            </div>
            <h2 className="planner-title">Draft Your Custom Karnataka Route</h2>
            <p className="planner-subtitle">
              Select your starting location, travel vibe, and budget preferences to test our AI itinerary logic.
            </p>
          </div>

          <form className="planner-form" onSubmit={handleGenerate}>
            {/* Origin City */}
            <div className="form-group">
              <label htmlFor="origin-select" className="form-label">
                📍 Starting Point
              </label>
              <select
                id="origin-select"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="form-select"
              >
                <option value="Bengaluru">Bengaluru (BLR)</option>
                <option value="Mysuru">Mysuru (MYQ)</option>
                <option value="Mangaluru">Mangaluru (IXE)</option>
                <option value="Hubballi">Hubballi / Dharwad</option>
                <option value="Belagavi">Belagavi</option>
                <option value="Other / Outside Karnataka">Other / Outside Karnataka</option>
              </select>
            </div>

            {/* Travel Vibe */}
            <div className="form-group">
              <label htmlFor="vibe-select" className="form-label">
                🧭 Preferred Vibe
              </label>
              <select
                id="vibe-select"
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="form-select"
              >
                <option value="heritage">🏛️ Heritage & Ruins (Hampi, Mysuru)</option>
                <option value="nature">☕ Coffee Estates & Hills (Coorg, Western Ghats)</option>
                <option value="coastal">🌊 Untamed Coast & Temples (Gokarna, Karavali)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="form-group">
              <label htmlFor="duration-select" className="form-label">
                🗓️ Duration
              </label>
              <select
                id="duration-select"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="form-select"
              >
                <option value="2">2 Days (Quick Weekend)</option>
                <option value="3">3 Days (Extended Weekend)</option>
                <option value="4">4 Days (Explorer Loop)</option>
                <option value="6">6+ Days (Grand Karnataka)</option>
              </select>
            </div>

            {/* Budget */}
            <div className="form-group">
              <label htmlFor="budget-select" className="form-label">
                💰 Budget Style
              </label>
              <select
                id="budget-select"
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="form-select"
              >
                <option value="budget">Backpacker (₹1.2k - ₹1.8k / day)</option>
                <option value="moderate">Comfort Explorer (₹3k - ₹4.5k / day)</option>
                <option value="luxury">Royal Luxury (₹7.5k+ / day)</option>
              </select>
            </div>

            <div className="form-submit-col">
              <button
                type="submit"
                className="btn-generate-plan"
                disabled={isGenerating}
                aria-label="Generate AI travel itinerary"
              >
                {isGenerating ? (
                  <span>Crafting Itinerary...</span>
                ) : (
                  <>
                    <span>Generate AI Route</span>
                    <span className="sparkle-icon">✨</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Generated Plan Output Box */}
          {generatedPlan && (
            <div className="generated-output-card" role="region" aria-live="polite">
              <div className="output-top-bar">
                <div className="output-status">
                  <span className="live-dot"></span>
                  <strong>AI Generated Route Blueprint</strong>
                </div>
                <span className="output-route-tag">{generatedPlan.route}</span>
              </div>

              <h3 className="output-title">{generatedPlan.title}</h3>

              <div className="output-grid">
                <div className="output-col">
                  <span className="col-label">💵 Est. Daily Cost:</span>
                  <span className="col-value col-highlight">{generatedPlan.estBudget}</span>
                </div>
                <div className="output-col">
                  <span className="col-label">🏨 Recommended Stay:</span>
                  <span className="col-value">{generatedPlan.stay}</span>
                </div>
                <div className="output-col">
                  <span className="col-label">🍽️ Food Pairing:</span>
                  <span className="col-value">{generatedPlan.foodTip}</span>
                </div>
                <div className="output-col">
                  <span className="col-label">🗣️ Native Kannada Phrase:</span>
                  <span className="col-value kannada-accent">{generatedPlan.kannadaTip}</span>
                </div>
              </div>

              <div className="output-highlights-row">
                <span className="highlights-label">Curated Experiences:</span>
                <div className="tags-cloud">
                  {generatedPlan.highlights.map((h, i) => (
                    <span key={i} className="curated-tag">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
