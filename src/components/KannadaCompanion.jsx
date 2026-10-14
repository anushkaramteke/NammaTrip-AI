import { useState, useMemo } from 'react';
import {
  kannadaPhrasesData,
  phraseCategoryMeta,
  companionTranslations
} from '../data/kannadaPhrases';
import './KannadaCompanion.css';

const CATEGORY_KEYS = [
  'greetings',
  'transport',
  'food',
  'shopping',
  'directions',
  'emergencies'
];

export default function KannadaCompanion() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [companionLang, setCompanionLang] = useState('English');
  const [copiedId, setCopiedId] = useState(null);
  const [activeVoiceId, setActiveVoiceId] = useState(null);

  // Active translation dictionary
  const t = companionTranslations[companionLang] || companionTranslations.English;

  // Filter phrases based on category and search query
  const filteredPhrases = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return kannadaPhrasesData.filter((phrase) => {
      // Category check
      const matchesCategory =
        activeCategory === 'all' || phrase.category === activeCategory;
      if (!matchesCategory) return false;

      // Search query check
      if (!q) return true;

      const kannadaMatch = phrase.kannada.toLowerCase().includes(q);
      const phoneticMatch = phrase.phonetic.toLowerCase().includes(q);
      const englishMatch = phrase.english.toLowerCase().includes(q);
      const hindiMatch = (phrase.hindi || '').toLowerCase().includes(q);
      const situationMatch = (phrase.situation || '').toLowerCase().includes(q);
      const tagMatch = (phrase.tag || '').toLowerCase().includes(q);

      return (
        kannadaMatch ||
        phoneticMatch ||
        englishMatch ||
        hindiMatch ||
        situationMatch ||
        tagMatch
      );
    });
  }, [activeCategory, searchQuery]);

  // Copy phrase to clipboard with visual feedback
  const handleCopy = async (phrase) => {
    const textToCopy = `${phrase.kannada} (${phrase.phonetic}) — ${phrase.english}${
      phrase.hindi ? ` / ${phrase.hindi}` : ''
    }`;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(phrase.id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch (err) {
      console.warn('Clipboard copy failed:', err);
      setCopiedId(phrase.id);
      setTimeout(() => setCopiedId(null), 2200);
    }
  };

  // Pronunciation speaker
  const handleSpeak = (phrase) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.phonetic);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
    setActiveVoiceId(phrase.id);
    setTimeout(() => setActiveVoiceId(null), 1800);
  };

  // Helper for category label in current language
  const getCategoryLabel = (key) => {
    const meta = phraseCategoryMeta[key];
    if (!meta) return key;
    if (companionLang === 'Hindi') return meta.hi;
    if (companionLang === 'Kannada') return meta.kn;
    return meta.en;
  };

  return (
    <section id="kannada-companion" className="kannada-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag kannada-badge-header">
            <span>{t.tag}</span>
          </div>

          <div className="companion-header-title-row">
            <h2 className="section-title">
              {t.title} <span className="kannada-k-script">{t.scriptSub}</span>
            </h2>

            {/* Language Selector Bar */}
            <div
              className="companion-lang-selector"
              role="group"
              aria-label="Companion language switcher"
            >
              <span className="lang-label-hint">UI Language:</span>
              <div className="lang-pills-wrap">
                {[
                  { id: 'English', label: 'English' },
                  { id: 'Hindi', label: 'हिन्दी' },
                  { id: 'Kannada', label: 'ಕನ್ನಡ' }
                ].map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    className={`companion-lang-btn ${
                      companionLang === l.id ? 'active' : ''
                    }`}
                    onClick={() => setCompanionLang(l.id)}
                    aria-pressed={companionLang === l.id}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="section-subtitle">{t.subtitle}</p>

          {/* Search Bar */}
          <div className="companion-search-wrapper">
            <div className="search-input-box">
              <span className="search-icon-glyph" aria-hidden="true">
                🔍
              </span>
              <input
                type="text"
                className="companion-search-input"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search travel phrases"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="btn-clear-search"
                  onClick={() => setSearchQuery('')}
                  title="Clear search query"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Strip */}
          <div
            className="phrase-category-tabs"
            role="tablist"
            aria-label="Filter phrases by category"
          >
            {/* 'All' Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`phrase-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span className="tab-icon">🌟</span>
              <span>{t.allCategories}</span>
              <span className="phrase-count-badge">
                {kannadaPhrasesData.length}
              </span>
            </button>

            {/* 6 Category Tabs */}
            {CATEGORY_KEYS.map((catKey) => {
              const meta = phraseCategoryMeta[catKey];
              const count = kannadaPhrasesData.filter(
                (p) => p.category === catKey
              ).length;
              const isActive = activeCategory === catKey;

              return (
                <button
                  key={catKey}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`phrase-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(catKey)}
                >
                  <span className="tab-icon">{meta.icon}</span>
                  <span>{getCategoryLabel(catKey)}</span>
                  <span className="phrase-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Search Result Count Bar */}
          <div className="results-count-bar">
            <span>
              Showing <strong>{filteredPhrases.length}</strong> of{' '}
              {kannadaPhrasesData.length} {t.totalPhrasesLabel}
              {searchQuery && (
                <span className="search-query-tag">
                  {' '}
                  matching "<strong>{searchQuery}</strong>"
                </span>
              )}
            </span>
            {(searchQuery || activeCategory !== 'all') && (
              <button
                type="button"
                className="btn-reset-filters"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Phrases Grid or Empty State */}
        {filteredPhrases.length > 0 ? (
          <div className="phrases-grid">
            {filteredPhrases.map((phrase) => {
              const isCopied = copiedId === phrase.id;
              const isPlaying = activeVoiceId === phrase.id;
              const meta = phraseCategoryMeta[phrase.category] || {};

              return (
                <div key={phrase.id} className="phrase-card">
                  {/* Card Top: Category & Action Buttons */}
                  <div className="phrase-card-top">
                    <div className="phrase-meta-tags">
                      <span className="phrase-category-pill">
                        {meta.icon} {getCategoryLabel(phrase.category)}
                      </span>
                      {phrase.tag && (
                        <span className="phrase-tag">{phrase.tag}</span>
                      )}
                    </div>

                    <div className="phrase-actions">
                      <button
                        type="button"
                        className={`btn-phrase-icon ${isPlaying ? 'playing' : ''}`}
                        onClick={() => handleSpeak(phrase)}
                        title={t.listenBtnTitle}
                        aria-label={`Listen to pronunciation of ${phrase.phonetic}`}
                      >
                        {isPlaying ? '🔊' : '🔉'}
                      </button>

                      <button
                        type="button"
                        className={`btn-phrase-icon ${isCopied ? 'btn-copied' : ''}`}
                        onClick={() => handleCopy(phrase)}
                        title={t.copyBtnTitle}
                        aria-label={`Copy phrase: ${phrase.kannada}`}
                      >
                        {isCopied ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>

                  {/* Kannada Script & Phonetic Box */}
                  <div className="phrase-kannada-box">
                    <span className="kannada-script-text">{phrase.kannada}</span>
                    <span className="phonetic-text">
                      "{phrase.phonetic}"
                    </span>
                  </div>

                  {/* Meaning Box (English & Hindi support) */}
                  <div className="phrase-meaning-box">
                    <div className="meaning-line english-line">
                      <span className="meaning-lang-tag">EN</span>
                      <p className="english-text">{phrase.english}</p>
                    </div>

                    {phrase.hindi && (
                      <div className="meaning-line hindi-line">
                        <span className="meaning-lang-tag hindi-tag">HI</span>
                        <p className="hindi-text">{phrase.hindi}</p>
                      </div>
                    )}
                  </div>

                  {/* Situation Note */}
                  <div className="phrase-situation-strip">
                    <span className="situation-icon" aria-hidden="true">
                      💡
                    </span>
                    <div className="situation-content">
                      <span className="situation-label-mini">
                        {t.situationLabel}:
                      </span>
                      <p className="situation-text">{phrase.situation}</p>
                    </div>
                  </div>

                  {/* Temporary Copied Toast Feedback */}
                  {isCopied && (
                    <div className="copied-toast" role="status">
                      <span>✓ {t.copiedToast}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="phrases-empty-state" role="status">
            <div className="empty-icon-wrap">🔍</div>
            <h3 className="empty-title">{t.emptyTitle}</h3>
            <p className="empty-subtitle">{t.emptySubtitle}</p>
            <div className="empty-actions">
              <button
                type="button"
                className="btn-clear-search-empty"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                {t.clearSearch}
              </button>
            </div>
          </div>
        )}

        {/* Cultural Proverb Card */}
        <div className="kannada-proverb-card">
          <div className="proverb-icon-box">🌟</div>
          <div className="proverb-content">
            <h3 className="proverb-title">{t.proverbTitle}</h3>
            <p className="proverb-meaning">{t.proverbMeaning}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
