import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onPlanClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={closeMobileMenu}>
          <div className="brand-icon-wrapper">
            <svg
              className="brand-icon-svg"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Decorative Karnataka-inspired temple / lotus emblem */}
              <circle cx="20" cy="20" r="19" fill="#1C5239" stroke="#C69225" strokeWidth="2" />
              <path
                d="M20 7L24 16H29L25 21L27 30L20 25L13 30L15 21L11 16H16L20 7Z"
                fill="#FDFBF7"
                opacity="0.9"
              />
              <path
                d="M20 12L22 17H26L23 20L24 25L20 22L16 25L17 20L14 17H18L20 12Z"
                fill="#C65328"
              />
              <circle cx="20" cy="20" r="2.5" fill="#C69225" />
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">
              NammaTrip <span className="brand-ai-badge">AI</span>
            </span>
            <span className="brand-tagline">ನಮ್ಮ ಕರ್ನಾಟಕ • Smart Explorer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#destinations" className="nav-link">Explore Karnataka</a>
            </li>
            <li>
              <a href="#trip-planner" className="nav-link">Trip Planner</a>
            </li>
            <li>
              <a href="#budget" className="nav-link">Budget Guide</a>
            </li>
            <li>
              <a href="#kannada-companion" className="nav-link nav-link-companion">
                <span className="kannada-dot"></span>
                Kannada Companion
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <button
            type="button"
            className="btn-plan-trip"
            onClick={onPlanClick}
            aria-label="Open AI trip planner"
          >
            <span className="btn-sparkle">✨</span>
            <span>Plan My Trip</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <a href="#destinations" onClick={closeMobileMenu}>Explore Karnataka</a>
          </li>
          <li>
            <a href="#trip-planner" onClick={closeMobileMenu}>Trip Planner</a>
          </li>
          <li>
            <a href="#budget" onClick={closeMobileMenu}>Budget Guide</a>
          </li>
          <li>
            <a href="#kannada-companion" onClick={closeMobileMenu} className="mobile-companion-link">
              🗣️ Kannada Companion (ಕನ್ನಡ ಮಿತ್ರ)
            </a>
          </li>
          <li className="mobile-action-li">
            <button
              type="button"
              className="btn-plan-trip mobile-full-btn"
              onClick={() => {
                closeMobileMenu();
                if (onPlanClick) onPlanClick();
              }}
            >
              <span>✨ Plan My Trip</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
