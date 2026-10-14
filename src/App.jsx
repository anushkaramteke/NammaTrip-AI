import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationSection from './components/DestinationSection';
import TripPlannerSection from './components/TripPlannerSection';
import AIFeaturesSection from './components/AIFeaturesSection';
import BudgetEstimator from './components/BudgetEstimator';
import KannadaCompanion from './components/KannadaCompanion';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { destinationsData } from './data/destinations';
import './App.css';

function App() {
  const [preselectedDestination, setPreselectedDestination] = useState(null);
  const [apiDestinations, setApiDestinations] = useState([]);

  // Smooth scroll helper to Trip Planner section
  const scrollToPlanner = (destination = null) => {
    if (destination) {
      setPreselectedDestination(destination);
    }
    const plannerEl = document.getElementById('trip-planner');
    if (plannerEl) {
      plannerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Called when user clicks "Plan a trip here" on any destination card
  const handleSelectDestination = (destination) => {
    scrollToPlanner(destination);
  };

  // Called from CTA section with prompt string
  const handleCTAPrompt = (prompt = '') => {
    const lower = prompt.toLowerCase();
    const destList = apiDestinations.length > 0 ? apiDestinations : destinationsData;
    let matchedDest = null;
    if (lower.includes('hampi')) {
      matchedDest = destList.find((d) => d.id === 'hampi');
    } else if (lower.includes('mysur') || lower.includes('myso')) {
      matchedDest = destList.find((d) => d.id === 'mysuru');
    } else if (lower.includes('coorg') || lower.includes('kodagu')) {
      matchedDest = destList.find((d) => d.id === 'coorg');
    } else if (lower.includes('gokarna')) {
      matchedDest = destList.find((d) => d.id === 'gokarna');
    } else if (lower.includes('bengaluru') || lower.includes('bangalore')) {
      matchedDest = destList.find((d) => d.id === 'bengaluru');
    } else if (lower.includes('chikkamagaluru') || lower.includes('chikmagalur')) {
      matchedDest = destList.find((d) => d.id === 'chikkamagaluru');
    } else if (lower.includes('udupi')) {
      matchedDest = destList.find((d) => d.id === 'udupi');
    } else if (lower.includes('badami')) {
      matchedDest = destList.find((d) => d.id === 'badami');
    }
    scrollToPlanner(matchedDest);
  };

  return (
    <div className="app-layout">
      {/* Top Navbar */}
      <Navbar onPlanClick={() => scrollToPlanner()} />

      <main>
        {/* Hero Section */}
        <Hero onStartPlanning={() => scrollToPlanner()} />

        {/* 4 Iconic Karnataka Gems: Hampi, Mysuru, Coorg, Gokarna */}
        <DestinationSection
          onSelectDestination={handleSelectDestination}
          onDestinationsLoaded={(loaded) => setApiDestinations(loaded)}
        />

        {/* Feature 1 & 2: Dedicated Trip Planner Section */}
        <TripPlannerSection
          preselectedDestination={preselectedDestination}
          onClearPreselected={() => setPreselectedDestination(null)}
          availableDestinations={apiDestinations}
        />

        {/* Feature Pillar 1: AI Routing Engine Showcase */}
        <AIFeaturesSection />

        {/* Feature Pillar 2: Hyper-Local Budget Estimates */}
        <BudgetEstimator />

        {/* Feature Pillar 3: Kannada Companion (Language & Culture) */}
        <KannadaCompanion />

        {/* Call to Action Section */}
        <CTASection onOpenPlanner={handleCTAPrompt} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
