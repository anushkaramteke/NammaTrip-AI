export const sampleItineraries = [
  {
    id: 'heritage-trail',
    title: 'Vijayanagara & Hoysala Royal Circuit',
    route: 'Bengaluru ➔ Mysuru ➔ Hassan ➔ Hampi',
    days: '4 Days / 3 Nights',
    budgetEstimate: '₹9,800 per person',
    vibe: 'Heritage & Palaces',
    intensity: 'Moderate Walking',
    schedule: [
      {
        day: 'Day 1: Mysuru Royal Welcome',
        activities: [
          'Morning Vande Bharat train from Bengaluru to Mysuru',
          'Explore Mysore Palace interiors & royal armory',
          'Evening illuminated palace view & street food at Mylari'
        ]
      },
      {
        day: 'Day 2: Western Heritage to Hospet',
        activities: [
          'Chamundi Hill sunrise darshan',
          'Scenic express transit to Hospet (gateway to Hampi)',
          'Evening riverside sunset at Sanapur Lake'
        ]
      },
      {
        day: 'Day 3: Hampi Monolithic Wonders',
        activities: [
          'Dawn panorama atop Matanga Hill',
          'Guided tour of Vijaya Vittala Stone Chariot & musical pillars',
          'Coracle boat crossing on the Tungabhadra river'
        ]
      },
      {
        day: 'Day 4: Royal Enclosure & Return',
        activities: [
          'Queen’s Bath, Lotus Mahal and Elephant Stables',
          'Souvenir shopping for stone carvings & Lambani embroidery',
          'Overnight sleeper/train back to Bengaluru'
        ]
      }
    ]
  },
  {
    id: 'hills-and-coast',
    title: 'Misty Coffee Hills to Arabian Shrines',
    route: 'Bengaluru ➔ Coorg (Madikeri) ➔ Gokarna',
    days: '5 Days / 4 Nights',
    budgetEstimate: '₹12,400 per person',
    vibe: 'Nature & Coastal Trek',
    intensity: 'Active Trekking & Relax',
    schedule: [
      {
        day: 'Day 1: Into the Kodava Canopies',
        activities: [
          'Drive through coffee plantations to Madikeri',
          'Afternoon aroma walk through an organic Arabica estate',
          'Sunset at Raja’s Seat overlooking the Western Ghats'
        ]
      },
      {
        day: 'Day 2: Waterfalls & Kodava Cuisine',
        activities: [
          'Morning mist trek to Abbey Falls',
          'Dubare Elephant Camp interaction on riverbanks',
          'Authentic Kodava dinner with Akki Roti & local filter coffee'
        ]
      },
      {
        day: 'Day 3: Descent to the Karavali Coast',
        activities: [
          'Scenic Western Ghats drive towards coastal Gokarna',
          'Check-in at seaside stay near Kudle Beach',
          'Sunset stroll and fresh tender coconut on the beach'
        ]
      },
      {
        day: 'Day 4: Gokarna 5-Beach Cliff Trail',
        activities: [
          'Early morning cliff trek from Kudle to Om & Half Moon Beach',
          'Afternoon visit to ancient Mahabaleshwar Temple & Kotitheertha',
          'Sunset acoustic drum circle at Paradise Beach'
        ]
      },
      {
        day: 'Day 5: Coastal Flavours & Farewell',
        activities: [
          'Neer Dosa breakfast at coastal shacks',
          'Local Uttara Kannada cashew and spice shopping',
          'Return journey towards Goa airport or Bengaluru'
        ]
      }
    ]
  }
];

export const budgetTiers = [
  {
    tier: 'Backpacker / Budget',
    range: '₹1,200 – ₹1,800',
    unit: 'per day / person',
    stay: 'Hostels, homestay dorms & budget guesthouses (₹600 - ₹900)',
    transit: 'KSRTC Rajahamsa / Sarige state buses & passenger trains',
    food: 'Authentic local Darshinis, military hotels, tiffin centres (₹300)',
    activities: 'Self-guided temple walks, public beach treks & heritage passes'
  },
  {
    tier: 'Comfort Explorer (Recommended)',
    range: '₹3,000 – ₹4,500',
    unit: 'per day / person',
    stay: 'Boutique plantation homestays & 3-4★ heritage hotels (₹2,000)',
    transit: 'Self-drive rental car or AC KSRTC Airavat Club Class / cabs',
    food: 'Renowned heritage eateries, coastal shacks, traditional thalis (₹800)',
    activities: 'Certified archaeological guides, coracle boat rides, entry passes'
  },
  {
    tier: 'Royal Luxury & Heritage',
    range: '₹7,500 – ₹14,000+',
    unit: 'per day / person',
    stay: 'Royal palace hotels (Lalitha Mahal, Evolve Back, luxury coffee estates)',
    transit: 'Private chauffeur luxury SUV throughout Karnataka',
    food: 'Curated royal multi-course dining, plantation barbecue & private chefs',
    activities: 'Private heritage historian tours, wildlife safaris at Kabini & boat charters'
  }
];
