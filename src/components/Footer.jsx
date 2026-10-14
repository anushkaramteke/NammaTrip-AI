import './Footer.css';

const CURRENT_YEAR = '2026';

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo">
              <div className="footer-icon-box">
                <svg viewBox="0 0 32 32" fill="none" className="footer-svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="15" fill="#1C5239" stroke="#C69225" strokeWidth="2" />
                  <path d="M16 6L19 13H23L20 17L21 24L16 20L11 24L12 17L9 13H13L16 6Z" fill="#FDFBF7" />
                  <circle cx="16" cy="16" r="2" fill="#C65328" />
                </svg>
              </div>
              <span className="footer-brand-text">
                NammaTrip <span className="footer-ai-badge">AI</span>
              </span>
            </div>

            <p className="footer-brand-desc">
              An intelligent, culturally grounded travel planner dedicated to unveiling the history, wilderness, and coastlines of Karnataka.
            </p>

            <div className="kannada-state-motto">
              <span>💛 ಕೆಂಪು-ಹಳದಿ ಧ್ವಜದ ಕರುನಾಡು 💛</span>
              <p className="motto-sub">"One State. Many Worlds." — Karnataka Tourism</p>
            </div>
          </div>

          {/* Quick Destination Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Top Destinations</h4>
            <ul className="footer-list">
              <li><a href="#destinations">Hampi (Vijayanagara)</a></li>
              <li><a href="#destinations">Mysuru (Palace & Silk)</a></li>
              <li><a href="#destinations">Coorg (Western Ghats)</a></li>
              <li><a href="#destinations">Gokarna (Arabian Sea)</a></li>
              <li><a href="#destinations">Badami & Pattadakal</a></li>
              <li><a href="#destinations">Kabini Wildlife Safari</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div className="footer-links-col">
            <h4 className="footer-heading">AI Features</h4>
            <ul className="footer-list">
              <li><a href="#ai-features">Smart Routing Engine</a></li>
              <li><a href="#budget">Local Budget Estimator</a></li>
              <li><a href="#kannada-companion">Kannada Companion (ಕನ್ನಡ ಮಿತ್ರ)</a></li>
              <li><a href="#home">Day-by-Day Timeline</a></li>
              <li><a href="#trip-planner">Custom AI Route Generator</a></li>
            </ul>
          </div>

          {/* Hackathon Project Info */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Hackathon Edition</h4>
            <div className="hackathon-badge-card">
              <span className="hackathon-tag">Karnataka AI Hackathon 2026</span>
              <p className="hackathon-p">
                Built with React, Vite & plain CSS. Prepared for Gemini AI integration.
              </p>
              <div className="hackathon-tech-tags">
                <span className="tech-badge">React 19</span>
                <span className="tech-badge">Vite 8</span>
                <span className="tech-badge">Plain CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} <strong>NammaTrip AI</strong>. Crafted with pride for Karnataka Tourism.
          </p>

          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <span className="sep">•</span>
            <a href="#home">Terms of Service</a>
            <span className="sep">•</span>
            <a href="#kannada-companion">Kannada Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
