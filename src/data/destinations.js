/**
 * Destination presentation presets and helpers for NammaTrip AI.
 * When the FastAPI backend (http://127.0.0.1:8001/api/destinations) is reachable,
 * destination names and descriptions are sourced dynamically from the API.
 */

export const destinationCategories = [
  { id: 'all', label: 'All Destinations', icon: '✨' },
  { id: 'heritage', label: 'Heritage', icon: '🏛️' },
  { id: 'nature', label: 'Nature', icon: '🌿' },
  { id: 'beaches', label: 'Beaches', icon: '🌊' },
  { id: 'cities', label: 'Cities', icon: '🏙️' }
];

export const destinationVisualPresets = {
  mysuru: {
    id: 'mysuru',
    name: 'Mysuru',
    kannadaName: 'ಮೈಸೂರು',
    category: 'Royal Heritage & Culture',
    categoryType: 'heritage',
    region: 'Mysuru District, Southern Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #b45309 0%, #1c5239 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'September to March (Dasara in Oct)',
    budgetRange: '₹2,200 - ₹4,800 / day',
    rating: 4.8,
    attractions: [
      'Amba Vilas Palace',
      'Chamundeshwari Temple',
      'Devaraja Market',
      'Brindavan Gardens'
    ],
    highlights: [
      'Amba Vilas Palace Sunday illumination (100k bulbs)',
      'Scenic ascent to Chamundeshwari Temple atop Chamundi Hill',
      'Authentic Mysore Pak tasting at Guru Sweet Mart',
      'Century-old Devaraja Spice & Flower Bazaar'
    ],
    aiTip: 'AI Route Tip: Book Mysore Palace light & sound show tickets 2 days prior during festive weekends to avoid long queues.',
    signatureFood: 'Mylari Dosa with white butter & melt-in-mouth Mysore Pak',
    mapsQuery: 'Mysore Palace Mysuru Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mysore+Palace+Mysuru+Karnataka'
  },
  hampi: {
    id: 'hampi',
    name: 'Hampi',
    kannadaName: 'ಹಂಪಿ',
    category: 'UNESCO World Heritage',
    categoryType: 'heritage',
    region: 'Vijayanagara District, Central Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b7d4?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #c85a32 0%, #7c2d12 100%)',
    idealDays: '3 - 4 Days',
    bestTime: 'October to February',
    budgetRange: '₹1,800 - ₹3,500 / day',
    rating: 4.9,
    attractions: [
      'Virupaksha Temple',
      'Vijaya Vittala Stone Chariot',
      'Matanga Hill',
      'Lotus Mahal'
    ],
    highlights: [
      'Virupaksha Temple & Sacred Bazaar',
      'Iconic Vijaya Vittala Stone Chariot',
      'Sunset hike atop Matanga Hill for panoramic valley views',
      'Coracle boat ride on Tungabhadra River'
    ],
    aiTip: 'AI Route Tip: Visit Vijaya Vittala at 7:30 AM to beat the mid-day Deccan sun and enjoy acoustic musical pillars with fewer crowds.',
    signatureFood: 'Crispy Davanagere Benne Dose & Mango Lassi at riverside shacks',
    mapsQuery: 'Virupaksha Temple Hampi Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Virupaksha+Temple+Hampi+Karnataka'
  },
  coorg: {
    id: 'coorg',
    name: 'Coorg',
    kannadaName: 'ಕೂರ್ಗ್ (ಕೊಡಗು)',
    category: 'Western Ghats & Nature',
    categoryType: 'nature',
    region: 'Kodagu District, Western Ghats',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
    idealDays: '3 - 4 Days',
    bestTime: 'October to March (Monsoons for waterfalls)',
    budgetRange: '₹2,500 - ₹5,500 / day',
    rating: 4.9,
    attractions: [
      'Abbey Falls',
      "Raja's Seat",
      'Dubare Elephant Camp',
      'Namdroling Golden Temple'
    ],
    highlights: [
      'Walking tours through aromatic Arabica estates',
      'Abbey Falls & Iruppu Falls in the lush canopy',
      'Panoramic sunset vista from Raja’s Seat',
      'Elephant interaction at Dubare Camp on the Kaveri'
    ],
    aiTip: 'AI Route Tip: Stay in a traditional Kodava estate homestay for authentic hospitality and home-brewed filter coffee at dawn.',
    signatureFood: 'Akki Roti with bamboo shoot curry & fresh estate filter coffee',
    mapsQuery: 'Raja Seat Madikeri Coorg Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Raja+Seat+Madikeri+Coorg+Karnataka'
  },
  gokarna: {
    id: 'gokarna',
    name: 'Gokarna',
    kannadaName: 'ಗೋಕರ್ಣ',
    category: 'Karavali Coast & Beaches',
    categoryType: 'beaches',
    region: 'Uttara Kannada District, Coastal Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1607558355677-f8e28e4695b7?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #0e7490 0%, #155e75 100%)',
    idealDays: '2 - 4 Days',
    bestTime: 'October to March',
    budgetRange: '₹1,500 - ₹3,200 / day',
    rating: 4.7,
    attractions: [
      'Om Beach & Kudle Beach',
      'Mahabaleshwar Temple',
      'Half Moon & Paradise Treks',
      'Yana Rock Formations'
    ],
    highlights: [
      'Famous 5-Beach Cliff Trek (Kudle to Paradise)',
      'Sacred Mahabaleshwar Temple & Kotitheertha Tank',
      'Sunset drum circles & acoustic music at Om Beach',
      'Dolphin spotting on peaceful boat cruises'
    ],
    aiTip: 'AI Route Tip: Start the cliff trek from Kudle to Half Moon Beach by 6:45 AM before the coastal humidity picks up.',
    signatureFood: 'Mangalore-style Neer Dosa with coconut chutney & coastal curry',
    mapsQuery: 'Om Beach Gokarna Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Om+Beach+Gokarna+Karnataka'
  },
  bengaluru: {
    id: 'bengaluru',
    name: 'Bengaluru',
    kannadaName: 'ಬೆಂಗಳೂರು',
    category: 'Garden City & Silicon Capital',
    categoryType: 'cities',
    region: 'Bengaluru Urban, Southern Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #1e3a8a 0%, #15803d 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'Year-round (October to March ideal)',
    budgetRange: '₹2,500 - ₹6,000 / day',
    rating: 4.8,
    attractions: [
      'Bangalore Palace',
      'Lalbagh Botanical Garden',
      'Cubbon Park & Vidhana Soudha',
      'National Gallery of Modern Art'
    ],
    highlights: [
      'Tudor-style Bangalore Palace royal quarters & vintage gallery',
      'Morning walk through 240-acre Lalbagh and iconic Glass House',
      'Historic filter coffee & crispy benne dose at heritage tiffin rooms',
      'Stroll through bamboo groves in Cubbon Park & grand Vidhana Soudha'
    ],
    aiTip: 'AI Route Tip: Take Namma Metro Purple Line to skip traffic between MG Road, Cubbon Park, and Vidhana Soudha.',
    signatureFood: 'Vidyarthi Bhavan Masale Dose & Brahmin’s Coffee Bar filter kaapi',
    mapsQuery: 'Bangalore Palace Bengaluru Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bangalore+Palace+Bengaluru+Karnataka'
  },
  chikkamagaluru: {
    id: 'chikkamagaluru',
    name: 'Chikkamagaluru',
    kannadaName: 'ಚಿಕ್ಕಮಗಳೂರು',
    category: 'Coffee Hills & Western Ghats',
    categoryType: 'nature',
    region: 'Chikkamagaluru District, Western Ghats',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'September to March (Monsoons for waterfalls)',
    budgetRange: '₹2,200 - ₹5,000 / day',
    rating: 4.9,
    attractions: [
      'Mullayanagiri Peak (1,930m)',
      'Baba Budangiri & Manikyadhara',
      'Hebbe & Kallathigiri Falls',
      'Bhadra Wildlife Sanctuary'
    ],
    highlights: [
      'Sunrise trek to Mullayanagiri, the highest peak in Karnataka (1,930m)',
      'Historic Baba Budangiri hills, the birthplace of coffee in India',
      'Jeep trail to pristine multi-tier Hebbe Falls inside coffee estates',
      'Estate homestay walks with fresh Arabica bean harvest & cupping'
    ],
    aiTip: 'AI Route Tip: Start your ascent to Mullayanagiri by 6:00 AM to catch the cloud carpet before mist envelopes the ridge.',
    signatureFood: 'Malnad Kadubu with spicy bamboo shoot curry & fresh estate filter brew',
    mapsQuery: 'Mullayanagiri Peak Chikkamagaluru Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mullayanagiri+Peak+Chikkamagaluru+Karnataka'
  },
  udupi: {
    id: 'udupi',
    name: 'Udupi',
    kannadaName: 'ಉಡುಪಿ',
    category: 'Coastal Temples & Karavali Beaches',
    categoryType: 'beaches',
    region: 'Udupi District, Coastal Karavali',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'October to March',
    budgetRange: '₹1,800 - ₹4,000 / day',
    rating: 4.8,
    attractions: [
      'Sri Krishna Matha & Kanakana Kindi',
      'Malpe Beach & Sea Walk',
      "St. Mary's Island (Basalt Columns)",
      'Kaup Beach & Historic Lighthouse'
    ],
    highlights: [
      'Darshan at 13th-century Sri Krishna Matha through Kanaka’s Window',
      'Ferry to UNESCO-listed columnar basalt rocks of St. Mary’s Island',
      'Climb the 120-year-old Kaup Lighthouse for panoramic Arabian sunset',
      'Evening stroll along Malpe Sea Walk and golden sandy shoreline'
    ],
    aiTip: 'AI Route Tip: Visit St. Mary’s Island on morning ferries between 9:30 AM and 11:30 AM when the sea is calm and tides are low.',
    signatureFood: 'Authentic Satvik Udupi Thali, Goli Baje & Mangalore Buns with coconut chutney',
    mapsQuery: 'Sri Krishna Matha Udupi Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Matha+Udupi+Karnataka'
  },
  badami: {
    id: 'badami',
    name: 'Badami',
    kannadaName: 'ಬಾದಾಮಿ',
    category: 'Chalukya Cave Temples & Heritage',
    categoryType: 'heritage',
    region: 'Bagalkote District, Northern Karnataka',
    heroImage: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #9a3412 0%, #7c2d12 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'October to February',
    budgetRange: '₹1,600 - ₹3,600 / day',
    rating: 4.9,
    attractions: [
      'Badami Rock-Cut Cave Temples',
      'Bhutanatha Temple on Agastya Lake',
      'Badami Sandstone Fort & Canyons',
      'Banashankari Temple & Pattadakal'
    ],
    highlights: [
      'Four monolithic 6th-century rock-cut cave temples with Nataraja carving',
      'Photogenic Bhutanatha Temple reflected in serene Agastya Lake',
      'Hike through dramatic red sandstone cliffs to Badami Northern Fort',
      'Day excursion to UNESCO World Heritage Pattadakal and Aihole cradle'
    ],
    aiTip: 'AI Route Tip: Explore Cave 1 and Bhutanatha Temple in late afternoon when golden sunlight illuminates the warm red sandstone.',
    signatureFood: 'North Karnataka Jolada Rotti meal with Yennegai (stuffed brinjal) & Shenga Chutney',
    mapsQuery: 'Badami Cave Temples Karnataka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Badami+Cave+Temples+Karnataka'
  }
};

/**
 * Merge an API destination item { name, description, ... } with UI styling metadata.
 * Ensures the API's name and description are always the source of truth.
 */
export function enrichDestinationFromApi(apiItem) {
  if (!apiItem || !apiItem.name) return null;

  // Normalized key (e.g. "Mysuru" -> "mysuru", "Bengaluru" -> "bengaluru")
  const key = apiItem.name.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const preset = destinationVisualPresets[key] || {
    id: key,
    name: apiItem.name,
    kannadaName: apiItem.kannada_name || apiItem.kannadaName || 'ಕರ್ನಾಟಕ',
    category: apiItem.category || 'Karnataka Destination',
    categoryType: 'heritage',
    region: apiItem.region || 'Karnataka, India',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b7d4?auto=format&fit=crop&w=1000&q=80',
    fallbackGradient: 'linear-gradient(135deg, #1c5239 0%, #0f2d20 100%)',
    idealDays: '2 - 3 Days',
    bestTime: 'October to March',
    budgetRange: '₹2,000 - ₹4,000 / day',
    rating: 4.8,
    attractions: apiItem.attractions || ['Historic landmarks', 'Local cultural sights'],
    highlights: ['Scenic landmarks & cultural immersion', 'Local culinary heritage'],
    aiTip: 'AI Route Tip: Early morning visits offer the best light and cooler weather.',
    signatureFood: 'Authentic regional Karnataka thali and filter coffee',
    mapsQuery: `${apiItem.name} Karnataka`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${apiItem.name} Karnataka`)}`
  };

  const mapsQuery = preset.mapsQuery || `${apiItem.name} Karnataka`;
  const defaultMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  return {
    ...preset,
    id: preset.id || key,
    name: apiItem.name,                                     // Sourced from API
    description: apiItem.description || preset.highlights[0], // Sourced from API
    tagline: apiItem.description || preset.highlights[0],   // Displayed on card
    kannadaName: apiItem.kannada_name || apiItem.kannadaName || preset.kannadaName,
    region: apiItem.region || preset.region,
    category: preset.category || apiItem.category,
    categoryType: preset.categoryType || (apiItem.category ? apiItem.category.toLowerCase() : 'heritage'),
    attractions: (apiItem.attractions && apiItem.attractions.length > 0) ? apiItem.attractions : preset.attractions,
    mapsUrl: apiItem.maps_url || preset.mapsUrl || defaultMapsUrl
  };
}

/**
 * Fallback static destinations used only if the backend API cannot be reached.
 * All 8 iconic destinations are pre-populated so user experience is always rich.
 */
export const fallbackDestinations = [
  enrichDestinationFromApi({
    name: 'Mysuru',
    description: 'Explore Amba Vilas Palace, Chamundi Hills, and royal Wodeyar cultural heritage.'
  }),
  enrichDestinationFromApi({
    name: 'Hampi',
    description: 'Discover UNESCO ancient ruins, boulder-strewn landscapes, and legendary Vijayanagara monuments.'
  }),
  enrichDestinationFromApi({
    name: 'Coorg',
    description: 'Enjoy lush mist-covered coffee plantations, waterfalls, and warm Kodava hospitality.'
  }),
  enrichDestinationFromApi({
    name: 'Gokarna',
    description: 'Explore serene Arabian Sea beaches, dramatic coastal cliffs, and sacred temple trails.'
  }),
  enrichDestinationFromApi({
    name: 'Bengaluru',
    description: "Experience Karnataka's garden capital, Tudor-style palaces, lush botanical reserves, and iconic filter coffee."
  }),
  enrichDestinationFromApi({
    name: 'Chikkamagaluru',
    description: 'Discover the birthplace of Indian coffee, highest mountain peaks, and breathtaking Western Ghats viewpoints.'
  }),
  enrichDestinationFromApi({
    name: 'Udupi',
    description: "Experience coastal temple serenity, volcanic columns of St. Mary's Island, and world-renowned Satvik Udupi cuisine."
  }),
  enrichDestinationFromApi({
    name: 'Badami',
    description: 'Marvel at 6th-century rock-cut cave temples, glowing red sandstone cliffs, and the Chalukyan waters of Agastya Lake.'
  })
].filter(Boolean);

export const destinationsData = fallbackDestinations;
