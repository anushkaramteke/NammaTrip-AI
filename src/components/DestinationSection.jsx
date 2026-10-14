import { useState, useEffect, useRef } from 'react';
import DestinationCard from './DestinationCard';
import {
  destinationCategories,
  enrichDestinationFromApi,
  fallbackDestinations
} from '../data/destinations';
import { fetchDestinations, API_BASE_URL } from '../services/api';
import './Destinations.css';

export default function DestinationSection({ onSelectDestination, onDestinationsLoaded }) {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiveApi, setIsLiveApi] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const onLoadedRef = useRef(onDestinationsLoaded);
  useEffect(() => {
    onLoadedRef.current = onDestinationsLoaded;
  });

  useEffect(() => {
    let isCancelled = false;

    async function initFetch() {
      try {
        const apiItems = await fetchDestinations();
        if (!isCancelled) {
          const enriched = apiItems.map(enrichDestinationFromApi).filter(Boolean);
          setDestinations(enriched);
          setIsLiveApi(true);
          setError(null);
          if (onLoadedRef.current) {
            onLoadedRef.current(enriched);
          }
        }
      } catch (err) {
        if (!isCancelled) {
          console.warn('FastAPI destination fetch error:', err);
          setError(err.message || 'Unable to connect to http://127.0.0.1:8001');
          setIsLiveApi(false);
          // On fetch failure, fallback to curated local destinations
          setDestinations(fallbackDestinations);
          if (onLoadedRef.current) {
            onLoadedRef.current(fallbackDestinations);
          }
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    initFetch();

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleRetry = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiItems = await fetchDestinations();
      const enriched = apiItems.map(enrichDestinationFromApi).filter(Boolean);
      setDestinations(enriched);
      setIsLiveApi(true);
      if (onLoadedRef.current) {
        onLoadedRef.current(enriched);
      }
    } catch (err) {
      setError(err.message || 'Unable to connect to http://127.0.0.1:8001');
      setIsLiveApi(false);
      setDestinations(fallbackDestinations);
      if (onLoadedRef.current) {
        onLoadedRef.current(fallbackDestinations);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseOfflineFallback = () => {
    setDestinations(fallbackDestinations);
    setError(null);
    setIsLiveApi(false);
    if (onLoadedRef.current) {
      onLoadedRef.current(fallbackDestinations);
    }
  };

  // Helper to count destinations matching each category
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return destinations.length;
    return destinations.filter(
      (d) => d.categoryType === categoryId || (d.category && d.category.toLowerCase().includes(categoryId))
    ).length;
  };

  // Filter destinations based on category AND search input
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const filteredDestinations = destinations.filter((dest) => {
    // 1. Category match
    const categoryMatch =
      activeCategory === 'all' ||
      dest.categoryType === activeCategory ||
      (dest.category && dest.category.toLowerCase().includes(activeCategory));

    if (!categoryMatch) return false;

    // 2. Search match
    if (!trimmedQuery) return true;

    const nameMatch = dest.name?.toLowerCase().includes(trimmedQuery);
    const kannadaMatch = dest.kannadaName?.toLowerCase().includes(trimmedQuery);
    const descMatch = (dest.description || dest.tagline || '').toLowerCase().includes(trimmedQuery);
    const regionMatch = dest.region?.toLowerCase().includes(trimmedQuery);
    const categoryTextMatch = dest.category?.toLowerCase().includes(trimmedQuery);
    const attractionMatch =
      Array.isArray(dest.attractions) &&
      dest.attractions.some((attr) => attr.toLowerCase().includes(trimmedQuery));
    const foodMatch = dest.signatureFood?.toLowerCase().includes(trimmedQuery);

    return nameMatch || kannadaMatch || descMatch || regionMatch || categoryTextMatch || attractionMatch || foodMatch;
  });

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <div className="section-tag">
              <span>✨ {destinations.length > 0 ? `${destinations.length} Crown Jewels of Karunadu` : 'Crown Jewels of Karunadu'}</span>
            </div>
            {isLiveApi && (
              <div className="api-status-badge api-status-live" title={`Connected to ${API_BASE_URL}/api/destinations`}>
                <span className="live-pulse-dot"></span>
                <span>FastAPI Live: {destinations.length} Destinations</span>
              </div>
            )}
          </div>

          <h2 className="section-title">Explore Iconic Karnataka Destinations</h2>
          <p className="section-subtitle">
            Ancient stone capitals, royal courtyards, misty coffee hilltops, spiritual Arabian shores, and vibrant garden cities. Filter by category, search by name or landmark, and jump directly into the Trip Planner.
          </p>

          {/* Controls: Search Field and Category Filter Tabs */}
          {!isLoading && destinations.length > 0 && (
            <div className="destinations-filter-controls">
              {/* Search Field */}
              <div className="destination-search-wrapper">
                <div className="destination-search-box">
                  <span className="search-icon" aria-hidden="true">🔍</span>
                  <input
                    type="text"
                    className="destination-search-input"
                    placeholder="Search by destination name, region, attraction, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search destinations"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="btn-clear-search"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear destination search"
                      title="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="destination-filter-tabs" role="tablist" aria-label="Destination category filters">
                {destinationCategories.map((cat) => {
                  const count = getCategoryCount(cat.id);
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.icon && <span className="cat-icon" aria-hidden="true">{cat.icon}</span>}
                      <span>{cat.label}</span>
                      <span className="cat-count-pill">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Filter Results Summary */}
              <div className="filter-results-summary">
                <span className="results-count-text">
                  Showing <strong>{filteredDestinations.length}</strong> of <strong>{destinations.length}</strong> destinations
                  {activeCategory !== 'all' && (
                    <span className="summary-pill"> in {destinationCategories.find((c) => c.id === activeCategory)?.label}</span>
                  )}
                  {searchQuery && (
                    <span className="summary-pill"> matching &ldquo;{searchQuery}&rdquo;</span>
                  )}
                </span>
                {(activeCategory !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    className="btn-reset-filters"
                    onClick={handleResetFilters}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* LOADING STATE */}
        {isLoading && (
          <div className="destinations-loading-container" role="status" aria-live="polite">
            <div className="loading-spinner-wrapper-dest">
              <div className="dest-loading-ring"></div>
              <span className="dest-loading-icon">🏛️</span>
            </div>
            <h3 className="dest-loading-heading">Fetching Destinations from FastAPI</h3>
            <p className="dest-loading-sub">
              Querying <code>{API_BASE_URL}/api/destinations</code>...
            </p>
            {/* Skeleton placeholders */}
            <div className="destinations-skeleton-grid">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="destination-skeleton-card">
                  <div className="skeleton-media shimmer"></div>
                  <div className="skeleton-body">
                    <div className="skeleton-line-title shimmer"></div>
                    <div className="skeleton-line-desc shimmer"></div>
                    <div className="skeleton-line-sub shimmer"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {!isLoading && error && (
          <div className="destinations-error-card" role="alert">
            <div className="error-icon-box">⚠️</div>
            <div className="error-content">
              <h3 className="error-title">Could Not Connect to FastAPI Backend</h3>
              <p className="error-desc">
                We tried reaching <strong>{API_BASE_URL}/api/destinations</strong>, but the request was unsuccessful ({error}).
              </p>
              <p className="error-hint">
                Showing offline destinations while your FastAPI server reconnects on <strong>http://127.0.0.1:8001</strong>.
              </p>
              <div className="error-actions-group">
                <button
                  type="button"
                  className="btn-retry-dest"
                  onClick={handleRetry}
                >
                  <span>🔄 Retry Connection</span>
                </button>
                <button
                  type="button"
                  className="btn-fallback-dest"
                  onClick={handleUseOfflineFallback}
                >
                  <span>Use Offline Destinations</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LOADED DESTINATIONS GRID */}
        {!isLoading && destinations.length > 0 && (
          <>
            {filteredDestinations.length > 0 ? (
              <div className="destinations-grid">
                {filteredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id || destination.name}
                    destination={destination}
                    onSelect={onSelectDestination}
                  />
                ))}
              </div>
            ) : (
              /* EMPTY SEARCH RESULTS STATE */
              <div className="destinations-empty-state" role="status">
                <div className="empty-icon-wrap">🗺️</div>
                <h3 className="empty-title">No Destinations Found</h3>
                <p className="empty-desc">
                  No destinations match your search &ldquo;<strong>{searchQuery}</strong>&rdquo;
                  {activeCategory !== 'all' ? ` in category "${destinationCategories.find((c) => c.id === activeCategory)?.label}".` : '.'}
                </p>
                <button
                  type="button"
                  className="btn-clear-empty-search"
                  onClick={handleResetFilters}
                >
                  Clear Filters & Show All Destinations
                </button>
              </div>
            )}

            {/* Bottom Banner */}
            <div className="destinations-bottom-banner">
              <div className="bottom-banner-text">
                <h3>Want to combine multiple destinations in one seamless circuit?</h3>
                <p>Our Gemini AI calculates realistic routes, morning-to-night schedules, regional meals, and Google Maps landmarks.</p>
              </div>
              <a href="#trip-planner" className="btn-banner-link">
                <span>Open Custom Trip Planner</span>
                <span className="banner-arrow">→</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
