/**
 * NammaTrip AI - API Service
 * Connects to the local FastAPI backend.
 * Default URL: http://127.0.0.1:8001
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8001';

/**
 * Fetch destinations from the FastAPI backend: GET /api/destinations
 * Returns array of { name: string, description: string }
 */
export async function fetchDestinations() {
  const url = `${API_BASE_URL}/api/destinations`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Server returned HTTP ${response.status} (${response.statusText})`);
  }

  const data = await response.json();
  
  if (!Array.isArray(data)) {
    throw new Error('Unexpected data format: expected an array of destinations');
  }

  return data;
}

/**
 * Helper to normalize slot data from backend.
 */
function normalizeSlot(slot) {
  if (!slot) return null;
  const title = slot.title || 'Sightseeing';
  const query = slot.maps_query || slot.mapsQuery || `${title} Karnataka`;
  const defaultMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return {
    time: slot.time || '',
    title,
    description: slot.description || '',
    highlight: slot.highlight || '',
    food: slot.food || '',
    estimatedCost: slot.estimated_cost || slot.estimatedCost || 'Estimated in INR',
    mapsQuery: query,
    mapsUrl: (slot.maps_url && slot.maps_url.startsWith('http')) ? slot.maps_url : defaultMapsUrl
  };
}

/**
 * Generate AI-powered Karnataka itinerary: POST /api/plan
 * Sends travel criteria and returns structured day-wise itinerary with morning,
 * afternoon, and evening slots, local food, estimated costs, and Google Maps links.
 */
export async function generateTripPlan(params) {
  const url = `${API_BASE_URL}/api/plan`;

  const payload = {
    starting_city: params.startingCity || 'Bengaluru',
    destination_id: params.destinationId || 'karnataka',
    destination_name: params.destinationName || 'Karnataka',
    number_of_days: Number(params.duration) || 3,
    budget_in_inr: Number(params.budget) || 12000,
    number_of_travellers: Number(params.travellers) || 2,
    interests: Array.isArray(params.interests) ? params.interests : ['History', 'Culture'],
    travel_pace: params.pace || 'Balanced',
    language: params.language || 'English'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorDetail = `Backend returned HTTP ${response.status} (${response.statusText})`;
    try {
      const errJson = await response.json();
      if (errJson && errJson.detail) {
        errorDetail = errJson.detail;
      }
    } catch {
      // Non-JSON error body fallback
    }
    const err = new Error(errorDetail);
    err.status = response.status;
    throw err;
  }

  const rawData = await response.json();

  // Normalize backend snake_case response to match frontend convention
  return {
    isAiGenerated: rawData.is_ai_generated ?? true,
    isDemo: false,
    destinationName: rawData.destination_name || params.destinationName,
    destinationId: rawData.destination_id || params.destinationId,
    startingCity: rawData.starting_city || params.startingCity,
    duration: rawData.duration || params.duration,
    travellers: rawData.travellers || params.travellers,
    totalBudget: rawData.total_budget || params.budget,
    perPersonBudget: rawData.per_person_budget || Math.round(params.budget / (params.travellers || 1)),
    dailyPerPerson: rawData.daily_per_person || Math.round(params.budget / ((params.travellers || 1) * (params.duration || 1))),
    budgetStatus: rawData.budget_status || 'Comfort Explorer',
    budgetFeasibility: rawData.budget_feasibility || 'Balanced for Karnataka regional travel',
    budgetDisclaimer: rawData.budget_disclaimer || 'All budget figures, food prices, and transit fees are estimated approximations in INR for general planning. They do not represent live quotes, real-time ticket availability, traffic conditions, or hotel booking rates.',
    interests: rawData.interests || params.interests,
    pace: rawData.pace || params.pace,
    language: rawData.language || params.language,
    days: (rawData.days || []).map((day) => ({
      dayNumber: day.day_number ?? day.dayNumber,
      dayTitle: day.day_title ?? day.dayTitle,
      morning: normalizeSlot(day.morning),
      afternoon: normalizeSlot(day.afternoon),
      evening: normalizeSlot(day.evening)
    }))
  };
}

