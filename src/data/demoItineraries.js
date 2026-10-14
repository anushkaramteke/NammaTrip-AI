/**
 * Curated Demo Itinerary Generator for NammaTrip AI
 * Frontend Demo Stage - Clearly labelled sample data structured by Morning, Afternoon & Evening.
 */

export const destinationActivities = {
  hampi: [
    {
      dayTitle: 'Vijayanagara Dawn & Sacred Riverside Temples',
      morning: {
        time: 'Morning (06:30 AM – 11:30 AM)',
        title: 'Matanga Hill Sunrise & Sacred Virupaksha Darshan',
        description: 'Ascend Matanga Hill for a 360° golden panoramic sunrise across the boulder-strewn landscape. Walk down through Hampi Bazaar to the ancient Virupaksha Temple.',
        highlight: 'Iconic panoramic photo stop & sacred elephant blessings',
        food: 'Breakfast: Crispy Davanagere Benne Dose & hot filter coffee at Mango Tree'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Underground Shiva Temple & Zenana Enclosure',
        description: 'Explore the cooler subterranean Sanctum of Prasanna Virupaksha. Proceed to the Queen’s Bath, Lotus Mahal, and the colossal Elephant Stables.',
        highlight: 'Intricate Indo-Islamic and Vijayanagara stone architecture',
        food: 'Lunch: Traditional South Indian plantain leaf meals'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Tungabhadra Coracle Ride & Hemakuta Sunset',
        description: 'Board a traditional round wicker coracle boat on the swirling Tungabhadra River. Finish at Hemakuta Hill as twilight turns the monolithic pillars crimson.',
        highlight: 'Serene acoustic river crossing & boulder sunset glow',
        food: 'Dinner: Woodfired pizza & fresh lime soda at riverside cafes'
      }
    },
    {
      dayTitle: 'Architectural Marvels & Musical Wonders',
      morning: {
        time: 'Morning (07:30 AM – 12:00 PM)',
        title: 'Vijaya Vittala Temple & The Stone Chariot',
        description: 'Take an electric buggy to the pinnacle of Vijayanagara craftsmanship. Marvel at the world-famous Stone Chariot and the acoustic musical pillars of the Ranga Mantapa.',
        highlight: 'World Heritage Stone Chariot (depicted on the ₹50 currency note)',
        food: 'Breakfast: Idli-vada with fiery roasted peanut chutney'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Royal Enclosure, Stepped Tank & Archaeological Museum',
        description: 'Wander through the Mahanavami Dibba platform, view the geometric symmetry of the Pushkarani stepped tank, and inspect relics at the Kamalapura Museum.',
        highlight: 'Intricate underground water aqueduct engineering',
        food: 'Lunch: Karnataka Jolada Rotti meal with brinjal curry'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Sanapur Lake Boulder Trail & Hippie Island Sunset',
        description: 'Cross over to the northern bank. Relax beside the tranquil turquoise waters of Sanapur Lake surrounded by granitic rock formations.',
        highlight: 'Cliff jumping spots & relaxed acoustic drum vibes',
        food: 'Dinner: Israeli shakshuka and falafel plate at bohemian garden cafes'
      }
    },
    {
      dayTitle: 'Anegundi Heritage & Mythological Trails',
      morning: {
        time: 'Morning (07:00 AM – 11:30 AM)',
        title: 'Anjanadri Hill Climb (Birthplace of Hanuman)',
        description: 'Climb the 575 stone stairs of Anjanadri Hill for panoramic views of emerald paddy fields juxtaposed against granite hillocks.',
        highlight: 'Spiritual hill breeze and sweeping 360-degree valley views',
        food: 'Breakfast: Fresh tender coconut water and hot onion pakoras'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Anegundi Medieval Village & Pampa Sarovar',
        description: 'Walk through older-than-Hampi Anegundi village, visiting local artisan craft shops weaving banana-fiber handicrafts and rural pottery.',
        highlight: 'Community craft co-ops and peaceful lotus tanks',
        food: 'Lunch: Home-cooked North Karnataka meals at rural homestays'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:00 PM)',
        title: 'Malyavanta Raghunatha Sunset & Continuous Bhajan',
        description: 'Visit the summit temple of Malyavanta Hill where priests maintain non-stop Ramayana chanting day and night in a meditative stone sanctum.',
        highlight: 'Uninterrupted sacred chants echoing over twilight boulders',
        food: 'Dinner: Light tiffin with Set Dose and spiced buttermilk'
      }
    },
    {
      dayTitle: 'Hidden Monoliths & Artisans of Kamalapur',
      morning: {
        time: 'Morning (08:00 AM – 12:00 PM)',
        title: 'Sasivekalu & Kadalekalu Colossal Ganesha Sculptures',
        description: 'Marvel at single-boulder monolithic Ganesha sculptures and the giant Lakshmi Narasimha monolith towering 6.7 meters high.',
        highlight: 'Monolithic single-rock carving mastery',
        food: 'Breakfast: Crispy Paddu with mint and coconut chutney'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Hazara Rama Temple Reliefs & Kings Balance',
        description: 'Inspect the 1,000 stone Ramayana bas-reliefs decorating the private temple walls of Vijayanagara emperors.',
        highlight: 'Detailed battle and procession stone carvings',
        food: 'Lunch: Thali meal at local Karnataka State Tourism hotel'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Tungabhadra Dam & Illuminated Gardens',
        description: 'Short drive to Hospet to view the reservoir waters and lush musical fountains during sunset.',
        highlight: 'Sprawling reservoir breeze and fountain lights',
        food: 'Dinner: North Karnataka thali with shenga holige (peanut sweet flatbread)'
      }
    },
    {
      dayTitle: 'Daroji Sloth Bear Sanctuary & Wilderness Trail',
      morning: {
        time: 'Morning (08:30 AM – 12:30 PM)',
        title: 'Daroji Wildlife Sanctuary Scrub Forest Safari',
        description: 'Venture into Asia’s first protected sloth bear reserve. Observe Indian sloth bears, leopard tracks, and endemic star tortoises in dry scrub rock habitat.',
        highlight: 'Wild sloth bear foraging sightings from cliffside watchtowers',
        food: 'Breakfast: Packed picnic breakfast with dry fruits and fresh fruit'
      },
      afternoon: {
        time: 'Afternoon (01:30 PM – 04:30 PM)',
        title: 'Lambani Tribe Handicrafts & Embroidery Studio',
        description: 'Meet local Banjara / Lambani craftswomen in Sandur, famous for vibrant geometric mirror-work embroidery protected with a GI tag.',
        highlight: 'Traditional textile heritage and artisan direct purchase',
        food: 'Lunch: Traditional millet rotis with spicy lentil curry'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Stargazing Over Ancient Ruined Pavilions',
        description: 'Experience the clear pollution-free Deccan night sky with silhouettes of ancient ruined pillars framed by the Milky Way.',
        highlight: 'Dark sky astrophotography & ancient silence',
        food: 'Dinner: Campfire dinner with South Indian biryani'
      }
    },
    {
      dayTitle: 'Tungabhadra River Canals & Village Cycling',
      morning: {
        time: 'Morning (07:00 AM – 11:30 AM)',
        title: 'Heritage Bicycle Trail Through Banana Plantations',
        description: 'Rent mountain bicycles and cycle along the ancient Vijayanagara irrigation canals, passing green paddy fields and hidden stone shrines.',
        highlight: 'Gentle morning cycling along ancient stone water channels',
        food: 'Breakfast: Hot buns and filter coffee at a village tea stall'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Pottery Workshop with Local Artisans',
        description: 'Hands-on session learning classical red terracotta clay pottery techniques passed down through generations.',
        highlight: 'Handmade terracotta souvenir to take home',
        food: 'Lunch: Traditional vegetarian feast served on banana leaf'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Sunset Farewell Walk at Riverside Ruins',
        description: 'Final meditative sunset walk along the riverside pavilions between Virupaksha and Vittala.',
        highlight: 'Quiet evening river breeze with temple bells in the distance',
        food: 'Dinner: Celebratory South Indian meal with Mysore Pak dessert'
      }
    },
    {
      dayTitle: 'Grand Hampi Finale & Souvenir Hunting',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Antique & Stone Carving Bazaar Walk',
        description: 'Explore the local markets in Kamalapura for small stone sculptures, leather shadow puppets, and handmade jewellery.',
        highlight: 'Authentic local handicrafts shopping',
        food: 'Breakfast: Crispy Masala Dose with fresh filter coffee'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Archival Photography Session & Local Library',
        description: 'Capture your favourite monument angles with soft afternoon light and visit the archaeological research centre.',
        highlight: 'Professional memory preservation of Vijayanagara',
        food: 'Lunch: Light south Indian meal with curd rice and pickle'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Departure Preparation & Vande Bharat / Sleeper Transit',
        description: 'Transit to Hospet Junction for evening return express train or luxury KSRTC sleeper bus back to Bengaluru.',
        highlight: 'Relaxing journey with unforgettable memories of Karunadu',
        food: 'Dinner: Comfort dinner at Hospet station cafe'
      }
    }
  ],

  mysuru: [
    {
      dayTitle: 'Royal Splendour of the Wodeyars',
      morning: {
        time: 'Morning (08:30 AM – 12:30 PM)',
        title: 'Grand Amba Vilas (Mysore) Palace Guided Tour',
        description: 'Enter the magnificent Indo-Saracenic palace. Admire the stained glass ceilings of the Kalyana Mantapa, the Golden Throne, and royal portraits.',
        highlight: 'Royal Durbar Hall with carved mahogany ceilings & gold leaf work',
        food: 'Breakfast: Melt-in-mouth Mylari Masala Dosa with white butter'
      },
      afternoon: {
        time: 'Afternoon (01:30 PM – 04:30 PM)',
        title: 'Jaganmohan Palace Art Gallery & Sandalwood Factory',
        description: 'Browse priceless oil paintings by Raja Ravi Varma and visit the Government Sandalwood Oil Factory to inhale Mysore’s fragrant legacy.',
        highlight: 'Original Raja Ravi Varma masterpiece "Glow of Hope"',
        food: 'Lunch: Royal Mysuru thali with Bisibelebath and appalam'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Devaraja Flower Market & Palace Illumination',
        description: 'Walk through 120-year-old Devaraja Market packed with jasmine garlands, kumkuma powder, and incense. Conclude with the dazzling palace light-up.',
        highlight: 'Over 100,000 incandescent bulbs lighting the palace against the night sky',
        food: 'Dinner: Fresh hot Mysore Pak at the historic Guru Sweet Mart'
      }
    },
    {
      dayTitle: 'Sacred Heights & Ancient Island Capital',
      morning: {
        time: 'Morning (06:30 AM – 11:00 AM)',
        title: 'Chamundi Hill Sunrise Darshan & Nandi Monolith',
        description: 'Climb or drive up Chamundi Hill for morning blessings at Sri Chamundeshwari Temple. Visit the giant 5-meter monolithic Nandi bull statue on the descent.',
        highlight: 'Panoramic morning view of Mysore city bathed in sunrise',
        food: 'Breakfast: Steamed idlis with coconut chutney & hot filter coffee'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Historic Srirangapatna & Tipu’s Summer Palace',
        description: 'Excursion to the island fortress of Srirangapatna: Dariya Daulat Bagh (Summer Palace) painted with teak murals, Gumbaz mausoleum, and Ranganathaswamy temple.',
        highlight: 'Persian-style teak architecture with intricate floral frescoes',
        food: 'Lunch: Traditional vegetarian feast with Rasam and Obbattu'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Ranganathittu Bird Sanctuary & Kaveri Boat Cruise',
        description: 'Cruise the Kaveri river islets to spot nesting painted storks, spoonbills, and basking marsh crocodiles in lush bamboo grooves.',
        highlight: 'Silent rowing boat drift alongside exotic migratory birds',
        food: 'Dinner: Mysore-style puliyogare (tamarind rice) and payasa'
      }
    },
    {
      dayTitle: 'Royal Silk, Woodcarving & Brindavan Fountains',
      morning: {
        time: 'Morning (09:00 AM – 12:30 PM)',
        title: 'Karnataka Silk Industries Corporation (KSIC) Weaving Tour',
        description: 'Witness master weavers spinning pure gold zari threads and mulberry silk into prestigious GI-tagged Mysore Silk sarees.',
        highlight: 'Live Jacquard loom weaving demonstrations',
        food: 'Breakfast: Crispy uddina vade and spicy coconut sambar'
      },
      afternoon: {
        time: 'Afternoon (01:30 PM – 04:30 PM)',
        title: 'Rosewood Inlay Artisan Workshops & Mysore Zoo',
        description: 'Visit hereditary woodcraft guilds practicing rosewood marquetry. Stroll through the lush 150-year-old Sri Chamarajendra Zoological Gardens.',
        highlight: 'Handmade rosewood inlay panels & lush botanical tree canopy',
        food: 'Lunch: Hearty South Indian lunch with curd rice and mango pickle'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Brindavan Gardens Musical Dancing Fountains',
        description: 'Walk across the terrace gardens below the Krishnarajasagara (KRS) Dam as musical water fountains dance to synchronized rhythms.',
        highlight: 'Illuminated musical water fountain show',
        food: 'Dinner: Chaats and churmuri by the garden promenade'
      }
    },
    {
      dayTitle: 'Somnathpura Hoysala Marvel & Kaveri Waterfalls',
      morning: {
        time: 'Morning (08:00 AM – 12:00 PM)',
        title: 'Chennakesava Temple Somnathpura (UNESCO Gem)',
        description: 'Marvel at 13th-century star-shaped Hoysala soapstone temple carving featuring intricate friezes of elephants, warriors, and celestial dancers.',
        highlight: 'Pinnacle of Hoysala filigree stone carving',
        food: 'Breakfast: Chow-chow bath (sweet Kesari bath + spicy Khara bath)'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Shivanasamudra Twin Waterfalls (Gaganachukki & Bharachukki)',
        description: 'Witness the Kaveri River plunging through rocky chasms into foaming white gorges, site of Asia’s first hydroelectric power plant.',
        highlight: 'Roaring twin cascades framed by forested cliffs',
        food: 'Lunch: Authentic rural Karnataka country meals'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Talakadu Sand-Buried Temples Trail',
        description: 'Explore the mysterious desert-like sand dunes on the Kaveri river banks burying over 30 ancient Shiva temples.',
        highlight: 'Curious folklore and sand-excavated stone shrines',
        food: 'Dinner: Mysore masala dosa and hot badam milk'
      }
    },
    {
      dayTitle: 'Forest Retreat & Wildlife Gateway',
      morning: {
        time: 'Morning (06:00 AM – 11:30 AM)',
        title: 'Bandipur / Nagarahole National Park Morning Safari',
        description: 'Early morning open-jeep safari into the Nilgiri Biosphere reserve to spot wild Asian elephants, gaur, spotted deer, and tigers.',
        highlight: 'Majestic wild tusker encounters in teak forests',
        food: 'Breakfast: Forest resort buffet with fruit and dosas'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Kabini Riverfront Nature Walk',
        description: 'Peaceful naturalist-led walk along the Kabini backwaters observing osprey, kingfishers, and smooth-coated otters.',
        highlight: 'Tranquil jungle river vistas',
        food: 'Lunch: Traditional Karnataka thali with kosambari'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Campfire Cultural Folk Performance',
        description: 'Enjoy regional Dollu Kunitha and Yakshagana folk dance performances under the starlit canopy.',
        highlight: 'Rhythmic drumbeats of traditional Karnataka folk art',
        food: 'Dinner: Barbecue and local millet dishes'
      }
    },
    {
      dayTitle: 'Heritage Palaces & Royal Mansions of Mysore',
      morning: {
        time: 'Morning (08:30 AM – 12:00 PM)',
        title: 'Lalitha Mahal Palace Heritage Walk',
        description: 'Visit the gleaming white Renaissance palace built in 1921 for the Viceroy of India, designed after St. Paul’s Cathedral in London.',
        highlight: 'Grand Italian marble staircase and crystal chandeliers',
        food: 'Breakfast: Royal breakfast spread in the palace dining hall'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Cheluvamba & Karanji Lake Butterfly Park',
        description: 'Walk through India’s largest walk-through aviary at Karanji Lake, home to peacocks, pelicans, and colourful butterfly species.',
        highlight: 'Walk-through canopy aviary and wooden watchtower',
        food: 'Lunch: Healthy organic millet thali'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'St. Philomena’s Neo-Gothic Cathedral & Evening Walk',
        description: 'Visit one of Asia’s tallest cathedrals inspired by Cologne Cathedral, with stained glass windows depicting biblical scenes.',
        highlight: 'Towering 175-foot twin spires glowing at dusk',
        food: 'Dinner: Street-side churmuri and Mysore filter coffee'
      }
    },
    {
      dayTitle: 'Mysuru Sweet Farewells & Craft Treasures',
      morning: {
        time: 'Morning (09:00 AM – 12:00 PM)',
        title: 'Traditional Sweet & Sandalwood Souvenir Shopping',
        description: 'Stock up on authentic Mysore Pak, fragrant sandalwood soap, incense sticks (agarbatti), and aromatic Channapatna wooden toys.',
        highlight: 'Locally crafted GI-certified gifts',
        food: 'Breakfast: Rava Idli with ghee and potato saagu'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:00 PM)',
        title: 'Farewell Royal Lunch & Packing',
        description: 'Relaxed final royal lunch overlooking the Chamundi slopes before heading to the railway station or highway.',
        highlight: 'Calm reflection on Mysore’s aristocratic charm',
        food: 'Lunch: Signature royal vegetarian platter'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:00 PM)',
        title: 'Express Vande Bharat Transit to Bengaluru',
        description: 'Comfortable 2-hour Vande Bharat express rail journey connecting Mysuru back to Bengaluru.',
        highlight: 'High-speed comfortable transit through Karnataka countryside',
        food: 'Dinner: Evening snack service with tea on board'
      }
    }
  ],

  coorg: [
    {
      dayTitle: 'Into the Fragrant Kodava Coffee Canopies',
      morning: {
        time: 'Morning (08:00 AM – 12:00 PM)',
        title: 'Guided Arabica & Robusta Coffee Plantation Walk',
        description: 'Walk through century-old shaded coffee estates under silver oak and rosewood canopies. Learn about bean harvesting, black pepper vines, and cardamom pods.',
        highlight: 'Fresh coffee blossom aromas & bean-to-cup brewing secrets',
        food: 'Breakfast: Steamed Akki Roti with spicy bamboo shoot (kalale) curry'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Abbey Falls Forest Hike & Madikeri Fort',
        description: 'Trek down stone paths to Abbey Falls as it cascades over granite boulders into the Kaveri. Tour the 17th-century Madikeri Fort with its stone elephant sentinels.',
        highlight: 'Roaring forest waterfall framed by hanging footbridges',
        food: 'Lunch: Traditional Kodava vegetarian thali with kadambuttu (rice dumplings)'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Raja’s Seat Sunset Over the Western Ghats',
        description: 'Sit in the seasonal garden pavilion once favored by Kodava kings to watch twilight mist envelope the valleys of the Western Ghats.',
        highlight: 'Layered mountain silhouettes disappearing into purple clouds',
        food: 'Dinner: Kodava curry with hot steamed noolputtu (string hoppers)'
      }
    },
    {
      dayTitle: 'Sacred River Springs & Kodava Culture',
      morning: {
        time: 'Morning (07:30 AM – 11:30 AM)',
        title: 'Talacauvery (Birthplace of River Kaveri) & Brahmagiri',
        description: 'Drive along scenic winding mountain roads to Talacauvery at 1,276m elevation. Climb the steps of Brahmagiri Peak for a breathtaking border view of Kerala and Karnataka.',
        highlight: 'Sacred Kundike holy spring tank and mountain ridge panorama',
        food: 'Breakfast: Warm set dosas with fresh coconut chutney'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Bhagamandala Triveni Sangama & Honey Museum',
        description: 'Visit the holy confluence of Kaveri, Kannike, and mythological Sujyothi rivers. Discover Coorg’s famous wild honey extraction tradition at the local apiary.',
        highlight: 'Kerala-style copper-roofed temples & wild Coorg honey tasting',
        food: 'Lunch: Wholesome mountain rice with wild mushroom curry'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Plantation Homestay Bonfire & Stargazing',
        description: 'Gather around an estate campfire under crisp mountain skies. Listen to Kodava folklore and guitar music while sipping fresh estate-brewed filter coffee.',
        highlight: 'Chilly mountain air by glowing embers with cricket serenades',
        food: 'Dinner: Homestyle barbecue with fresh local spices'
      }
    },
    {
      dayTitle: 'River Elephants & The Golden Tibetan Monastery',
      morning: {
        time: 'Morning (07:30 AM – 11:30 AM)',
        title: 'Dubare Elephant Camp River Crossing & Interaction',
        description: 'Cross the Kaveri River in a motorboat to the Dubare Elephant Camp. Watch mahouts gently bathe Asian elephants in the morning shallows.',
        highlight: 'Close-up interaction with majestic gentle giants',
        food: 'Breakfast: South Indian breakfast buffet at riverfront resort'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Namdroling Monastery (The Golden Temple) Bylakuppe',
        description: 'Step into India’s second-largest Tibetan settlement. Admire three towering 40-foot gilded statues of Buddha, Guru Padmasambhava, and Amitayus with Tibetan monks chanting.',
        highlight: 'Intricate thangka paintings and reverberating prayer bells',
        food: 'Lunch: Steamed Tibetan vegetable momos and piping hot Thukpa soup'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Kaveri Nisargadhama Bamboo Island Stroll',
        description: 'Walk across a hanging rope bridge to an ecological island forest carpeted with bamboo groves, deer park, and treehouses.',
        highlight: 'Crossing wooden suspension bridge over clear flowing river',
        food: 'Dinner: Homemade banana cake and spiced filter coffee'
      }
    },
    {
      dayTitle: 'Tadiandamol Summit Trek (Highest Peak of Coorg)',
      morning: {
        time: 'Morning (06:30 AM – 12:30 PM)',
        title: 'Tadiandamol Peak Hike (1,748m Elevation)',
        description: 'Trek through shola grasslands and mist-covered forest trails to reach Coorg’s highest vantage point overlooking the Arabian Sea horizon on clear days.',
        highlight: 'Walking among shifting clouds along rolling green ridgelines',
        food: 'Breakfast: Energy trail snacks, boiled eggs/sprouts, and fruit'
      },
      afternoon: {
        time: 'Afternoon (01:30 PM – 04:30 PM)',
        title: 'Nalknad Palace Heritage Visit',
        description: 'Visit the hidden 18th-century two-storeyed palace built by Dodda Veerarajendra, nestled in dense jungle with ancient wall murals.',
        highlight: 'Historic hideout architecture of Kodava royalty',
        food: 'Lunch: Traditional Coorg rice feast'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Relaxation & Ayurvedic Herbal Foot Therapy',
        description: 'Unwind your muscles with traditional Kerala-Karnataka Ayurvedic oil therapy at an estate wellness centre.',
        highlight: 'Rejuvenating herbal massage after the mountain trek',
        food: 'Dinner: Warm comforting herbal soup and light kheer'
      }
    },
    {
      dayTitle: 'Iruppu Falls & Brahmagiri Wildlife Trails',
      morning: {
        time: 'Morning (08:00 AM – 12:00 PM)',
        title: 'Iruppu Waterfalls (Lakshmana Tirtha River)',
        description: 'Hike through Brahmagiri forest sanctuary to the thunderous Iruppu Falls. Wash away fatigue in the sacred cool spray of mountain waters.',
        highlight: 'Pristine rainforest canopy and sacred mountain cascades',
        food: 'Breakfast: Neer Dosa with sweet coconut jaggery mixture'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Nagarahole South Forest Border Safari',
        description: 'Drive along the Coorg-Nagarahole forest border to spot deer herds, peacock displays, and Malabar giant squirrels.',
        highlight: 'Malabar giant squirrel sightings high in the jungle canopy',
        food: 'Lunch: Rustic rural Karnataka country meal'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Local Spice Farm Shopping & Cardamom Tasting',
        description: 'Visit organic farm shops to buy direct green cardamom, bird’s eye chilies, cinnamon bark, and fresh roasted Arabica beans.',
        highlight: 'Purchasing freshly harvested spices right from the growers',
        food: 'Dinner: Warm Coorg dinner with Kodava hospitality'
      }
    },
    {
      dayTitle: 'Mandalpatti 4x4 Jeep Safari & Mist Viewpoints',
      morning: {
        time: 'Morning (06:00 AM – 11:30 AM)',
        title: 'Off-Road 4x4 Jeep Ascent to Mandalpatti',
        description: 'Take a thrilling 4x4 open jeep ride through bumpy rocky terrain to Mandalpatti ("Mugilu-pete" / Market of Clouds) overlooking endless valley waves.',
        highlight: 'Spectacular windswept mountain viewpoints above cloud blankets',
        food: 'Breakfast: Steamed idlis and spicy podi at a hill shack'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Chelavara Falls & Polybetta Tea Gardens',
        description: 'Visit the natural tortoise-shaped rock waterfall of Chelavara, followed by a walk through Coorg’s rare rolling tea gardens.',
        highlight: 'Unusual tea garden landscape nestled within coffee territory',
        food: 'Lunch: Fresh estate lunch with garden vegetables'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Sunset Coffee Roastery Demonstration',
        description: 'Tour an artisanal micro-roastery to witness beans roasted to light, medium, and dark profiles.',
        highlight: 'Hands-on pour-over and French press cupping session',
        food: 'Dinner: Continental and Kodava fusion dinner'
      }
    },
    {
      dayTitle: 'Farewell Coorg: Mist in Your Heart',
      morning: {
        time: 'Morning (08:30 AM – 12:00 PM)',
        title: 'Final Morning Balcony Coffee & Forest Bird Watching',
        description: 'Enjoy a leisurely breakfast watching hornbills and woodpeckers dart through estate jackfruit and silver oak trees.',
        highlight: 'Peaceful morning symphony of Western Ghats birdcalls',
        food: 'Breakfast: Estate special Akki Roti with homemade honey'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Madikeri Heritage Souvenir Pickup & Chocolates',
        description: 'Pick up handmade Coorg chocolates, coffee liqueurs/beans, and traditional Kodava knives (Peeche Kathi souvenir models).',
        highlight: 'Filling your bags with the fragrant bounty of Coorg',
        food: 'Lunch: Traditional lunch in Madikeri town'
      },
      evening: {
        time: 'Evening (05:00 PM – 09:00 PM)',
        title: 'Scenic Ghat Descent Towards Mysore / Bangalore Highway',
        description: 'Drive down the winding scenic Sampaje or Kushalnagar ghat road as twilight sets over the foothills.',
        highlight: 'Smooth, scenic highway return with peaceful memories',
        food: 'Dinner: Maddur Vade and coffee at highway food stops'
      }
    }
  ],

  gokarna: [
    {
      dayTitle: 'Sacred Shrines & The Pristine Om Beach',
      morning: {
        time: 'Morning (07:00 AM – 11:30 AM)',
        title: 'Ancient Mahabaleshwar Temple & Kotitheertha Tank',
        description: 'Visit the 4th-century classical Dravidian Mahabaleshwar Temple housing the legendary Atmalinga. Walk around Kotitheertha holy lake reflecting ancient carved mathas.',
        highlight: 'Sacred Atmalinga darshan & sacred coastal temple bells',
        food: 'Breakfast: Soft Neer Dosa with sweet coconut chutney & ginger tea'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Kudle Beach Relaxation & Shaded Cafe Chill',
        description: 'Walk down to the wide golden crescent of Kudle Beach. Relax under thatched seaside shacks watching surfers and gentle waves.',
        highlight: 'Warm Arabian sea breeze & barefoot beachcombing',
        food: 'Lunch: Fresh coastal fish/vegetable thali with Kokum kadi'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Om Beach Sunset & Acoustic Drum Gathering',
        description: 'Head to Om Beach, naturally sculpted in the sacred "ॐ" symbol. Scramble up the black volcanic rocks to watch the sun melt into the Arabian Sea.',
        highlight: 'Unmistakable Om-shaped twin bays and fiery coastal sunset',
        food: 'Dinner: Woodfired garlic naan, coastal curry & fresh tender coconut'
      }
    },
    {
      dayTitle: 'The Famous 5-Beach Cliff Trekking Trail',
      morning: {
        time: 'Morning (06:30 AM – 11:30 AM)',
        title: 'Cliff Trail: Kudle to Om & Half Moon Beach',
        description: 'Embark on the iconic coastal cliff trek. Hike through red laterite cliffs and thorny coastal shrub, enjoying aerial views of turquoise bays.',
        highlight: 'Panoramic cliffside ocean views and secluded cove swimming',
        food: 'Breakfast: Banana pancakes and black coffee at Half Moon shack'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Paradise Beach (Full Moon Beach) Secret Cove',
        description: 'Scramble over rocky boulders to reach Paradise Beach, accessible only on foot or by local fishing boat. Swim in calm waters sheltered by headlands.',
        highlight: 'Secluded pristine beach without motor vehicle access',
        food: 'Lunch: Fresh coconut water, fruit salad, and coastal tiffin'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Fishing Boat Sunset Cruise Back to Gokarna',
        description: 'Catch a traditional motorized fishing boat from Paradise Beach back to Om Beach. Spot playful Indo-Pacific humpback dolphins skipping alongside the boat.',
        highlight: 'Dolphin sightings and coastal cliffs viewed from the sea',
        food: 'Dinner: Karavali special ghee roast curry with appam'
      }
    },
    {
      dayTitle: 'Monolithic Yana Rocks & Coastal Fortress',
      morning: {
        time: 'Morning (07:30 AM – 12:00 PM)',
        title: 'Yana Monolithic Black Karst Rock Towers',
        description: 'Excursion into the lush Western Ghats forest to Yana. Marvel at the two colossal solid black crystalline limestone monoliths: Bhairaveshwara Shikhara (120m) and Mohini Shikhara.',
        highlight: 'Walking through a cool cave sanctuary between massive black peaks',
        food: 'Breakfast: Mangalore Buns (sweet banana pooris) with spicy chutney'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Mirjan Fort 16th-Century Laterite Citadel',
        description: 'Explore the moss-covered ramparts of Mirjan Fort on the banks of Aghanashini River, historically ruled by Queen Chennabhairadevi ("Pepper Queen").',
        highlight: 'Picturesque laterite circular watchtowers covered in emerald moss',
        food: 'Lunch: Authentic Uttara Kannada thali with sol kadi'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Gokarna Main Beach Sunset & Temple Bazaar Walk',
        description: 'Return to Gokarna Main Beach for sunset. Wander the town market for seashell jewellery, organic spices, and brass lamps.',
        highlight: 'Atmospheric temple chariot (Ratha) square with street lamps',
        food: 'Dinner: Mangalorean Neer Dosa and filter coffee'
      }
    },
    {
      dayTitle: 'Aghanashini Estuary & Tadadi Fishing Harbour',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Tadadi Port & Mangrove Boardwalk',
        description: 'Visit the natural estuary where the Aghanashini river meets the sea. Watch fishermen bring in morning catches and walk along lush mangrove paths.',
        highlight: 'Rich coastal estuarine birdlife & fishing boats',
        food: 'Breakfast: Steamed rice kadubu with chutney'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Belekan Beach Hidden Bay Hike',
        description: 'Hike to tranquil Belekan Beach, the starting point of the coastal trek, renowned for its calm fishing village atmosphere.',
        highlight: 'Untouched rural coastal Karnataka life',
        food: 'Lunch: Fresh home-cooked coastal meals'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Cliffside Sunset Yoga & Meditation',
        description: 'Join a gentle sunset yoga and breathwork session atop the laterite cliffs overlooking the endless ocean horizon.',
        highlight: 'Meditative calmness with crashing waves below',
        food: 'Dinner: Vegetarian Mediterranean platter at beach cafe'
      }
    },
    {
      dayTitle: 'Murudeshwara Colossal Shiva Excursion',
      morning: {
        time: 'Morning (07:30 AM – 12:00 PM)',
        title: 'World’s 2nd Tallest Shiva Statue & Raja Gopura',
        description: 'Day drive south along the coast to Murudeshwara. Climb the 20-storey Raja Gopura via lift to view the gigantic 123-foot Shiva statue surrounded by the sea.',
        highlight: 'Breathtaking 123-foot Shiva statue perched on Kanduka Hill',
        food: 'Breakfast: Coastal coastal breakfast at temple town'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Murudeshwara Beach & Sea Wall Walk',
        description: 'Stroll along the beach promenade and visit the sea-encircled fortress remains.',
        highlight: 'Arabian sea crashing against basalt sea walls',
        food: 'Lunch: Coastal thali with fish curry or paneer ghee roast'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'Scenic Coastal Highway Return to Gokarna',
        description: 'Drive along Highway 66 with ocean views and setting sun reflecting on coastal backwaters.',
        highlight: 'Sunset highway drive alongside coconut groves',
        food: 'Dinner: Candlelit dinner on Kudle Beach sand'
      }
    },
    {
      dayTitle: 'Water Sports & Beach Hopping Day',
      morning: {
        time: 'Morning (08:30 AM – 12:00 PM)',
        title: 'Om Beach Kayaking & Stand-Up Paddleboarding',
        description: 'Rent sea kayaks or SUP boards to glide through the calm morning waters inside the sheltered Om Beach cove.',
        highlight: 'Gliding on clear turquoise waters under morning sun',
        food: 'Breakfast: Tropical smoothie bowl and fresh toast'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Bioluminescence Awareness & Coastal Ecology',
        description: 'Learn about marine bioluminescence and coastal wildlife conservation from local naturalist volunteers.',
        highlight: 'Fascinating marine insights into the Karavali ecosystem',
        food: 'Lunch: Fresh coconut water and light lunch at Namaste Cafe'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Night Walk on Beach under Starry Skies',
        description: 'Listen to the rhythmic ocean roar under a canopy of stars on Kudle Beach.',
        highlight: 'Stargazing by the soothing crash of waves',
        food: 'Dinner: Woodfired pizza and coastal desserts'
      }
    },
    {
      dayTitle: 'Farewell Gokarna: Shrines & Sea Memories',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Morning Dip & Souvenir Spice Shopping',
        description: 'Take a final refreshing morning swim in the sea and buy authentic Uttara Kannada cashews, spices, and handmade soaps.',
        highlight: 'Last seaside dip and premium cashew nut shopping',
        food: 'Breakfast: Piping hot Neer Dosa with jaggery syrup'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 03:30 PM)',
        title: 'Check-out & Relaxed Garden Cafe Farewell',
        description: 'Pack bags and enjoy a quiet conversation overlooking the beach with local travelers.',
        highlight: 'Savouring peaceful memories of Karnataka’s coastline',
        food: 'Lunch: Light south Indian meal with sweet payasa'
      },
      evening: {
        time: 'Evening (04:30 PM – 08:00 PM)',
        title: 'Transit to Gokarna Road Station / Dabolim / Hubballi',
        description: 'Board your train or pre-booked cab towards Hubballi, Goa, or Bengaluru.',
        highlight: 'Relaxed journey reminiscing golden sands and ancient shrines',
        food: 'Dinner: Highway snacks with tea and Maddur Vade'
      }
    }
  ],

  bengaluru: [
    {
      dayTitle: 'Royal Bengaluru & Heritage Gardens',
      morning: {
        time: 'Morning (08:30 AM – 12:00 PM)',
        title: 'Bangalore Palace & Tudor-Style Royal Grounds',
        description: 'Tour the 19th-century royal palace inspired by Windsor Castle. Admire stained glass, wood carvings, and memorabilia of the Wadiyar dynasty.',
        highlight: 'Tudor-style stone turrets and royal gallery paintings',
        food: 'Breakfast: Crispy Vidyarthi Bhavan Masale Dose & hot filter kaapi'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Lalbagh Botanical Garden & Historic Glass House',
        description: 'Stroll through 240 acres of century-old tropical trees, lotus ponds, and the iconic 1889 cast-iron Glass House modeled on Crystal Palace.',
        highlight: '3,000-million-year-old Peninsular Gneiss rock formation',
        food: 'Lunch: Traditional South Indian thali at historic Mavalli Tiffin Room (MTR)'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Cubbon Park Stroll & Grand Vidhana Soudha',
        description: 'Walk under bamboo canopies in Cubbon Park and view the illuminated Neo-Dravidian granite facade of Karnataka’s state legislature.',
        highlight: 'Glowing Vidhana Soudha illuminated against the twilight sky',
        food: 'Dinner: CTR (Shri Sagar) Butter Masala Dose and filter coffee'
      }
    },
    {
      dayTitle: 'Art, Heritage & Science Innovations',
      morning: {
        time: 'Morning (09:00 AM – 12:30 PM)',
        title: 'National Gallery of Modern Art (NGMA) & Manikyavelu Mansion',
        description: 'Explore modern Indian art masterpieces by Raja Ravi Varma, Amrita Sher-Gil, and Jamini Roy in a colonial heritage garden mansion.',
        highlight: 'Pristine garden cafe under century-old banyan trees',
        food: 'Breakfast: Brahmin’s Coffee Bar idli-vada with spicy coconut chutney'
      },
      afternoon: {
        time: 'Afternoon (01:30 PM – 04:30 PM)',
        title: 'Visvesvaraya Museum & Jawaharlal Nehru Planetarium',
        description: 'Experience hands-on science exhibits celebrating Bharat Ratna Sir M. Visvesvaraya, pioneer of Karnataka’s modern engineering.',
        highlight: 'Interactive engine demonstrations and space theater show',
        food: 'Lunch: Traditional Karnataka plantain leaf meal'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:30 PM)',
        title: 'MG Road, Brigade Road & Heritage Bookstore Walk',
        description: 'Browse legendary independent bookstores like Higginbothams and Blossom Book House along Bengaluru’s historic high street.',
        highlight: 'Vibrant urban cultural pulse and heritage colonial arcades',
        food: 'Dinner: Mysore Pak and artisanal desserts on Church Street'
      }
    },
    {
      dayTitle: 'Historic Temples & Silk Bazaar Trails',
      morning: {
        time: 'Morning (07:30 AM – 11:30 AM)',
        title: 'Bull Temple (Dodda Basavana Gudi) & Bugle Rock',
        description: 'Visit the monolithic 16th-century sacred Nandi bull carved from single granite boulder in historic Basavanagudi.',
        highlight: 'Ancient Kempegowda watchtower atop 3-billion-year-old Bugle Rock',
        food: 'Breakfast: Mangalore Buns & filter kaapi at local darshini'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Chickpet Silk Weavers & Avenue Road Heritage Walk',
        description: 'Explore the 400-year-old marketplace founded by Kempegowda I, shopping for pure Mysore silk sarees and brass artifacts.',
        highlight: 'Authentic bustling bazaar lanes filled with silk jacquard looms',
        food: 'Lunch: South Indian rice feast with Rasam and Obbattu'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Sankey Tank Twilight Breeze & Lakeside Walk',
        description: 'Enjoy a peaceful evening walk along the perimeter of the 1882 heritage reservoir lake, watching pelicans and egrets at dusk.',
        highlight: 'Cool lakeside breeze and tranquil water reflections',
        food: 'Dinner: Street-side churmuri & warm spiced badam milk'
      }
    }
  ],

  chikkamagaluru: [
    {
      dayTitle: 'Highest Peak & Coffee Canopy Trails',
      morning: {
        time: 'Morning (06:00 AM – 11:30 AM)',
        title: 'Sunrise Trek to Mullayanagiri Peak (1,930m)',
        description: 'Climb stone steps to the highest point in Karnataka. Witness rolling green ridgelines emerging from shifting morning cloud blankets.',
        highlight: 'Standing above cloud blankets at Karnataka’s highest summit',
        food: 'Breakfast: Steamed Malnad Kadubu & freshly roasted estate filter brew'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Baba Budangiri Shrines & Manikyadhara Falls',
        description: 'Visit the sacred cave shrine venerated by both Sufi and Hindu devotees, birthplace of Indian coffee where Baba Budan planted seven magical beans in 1670.',
        highlight: 'Historic cradle of Indian coffee culture & sacred mountain spring',
        food: 'Lunch: Traditional Malnad vegetarian meal with Akki Roti'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Estate Coffee Roastery Cupping & Tasting',
        description: 'Tour a working shaded coffee plantation to observe wet-milling, sun-drying patios, and artisanal pour-over tasting.',
        highlight: 'Single-origin Arabica cupping with expert estate growers',
        food: 'Dinner: Warm estate-grown dinner with homemade jackfruit payasam'
      }
    },
    {
      dayTitle: 'Forest Waterfalls & Wilderness Safari',
      morning: {
        time: 'Morning (07:30 AM – 12:00 PM)',
        title: '4x4 Jeep Safari to Hebbe Waterfalls',
        description: 'Off-road jeep adventure through dense coffee estates to the thunderous two-tier Hebbe Falls plunging 168 meters through mossy gorges.',
        highlight: 'Bathing in the natural herb-infused mountain pool below the falls',
        food: 'Breakfast: Hot podi idlis & fresh tender coconut'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Kallathigiri Falls & Ancient Veerabhadra Shrine',
        description: 'Visit the cascading falls where water streams down a sculpted stone cave temple dedicated to Lord Shiva.',
        highlight: 'Cave shrine nestled directly behind falling water sheets',
        food: 'Lunch: Home-cooked Malnad lunch with bamboo shoot curry'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Bhadra Reservoir Sunset & Lakeside Campfire',
        description: 'Watch the sun sink behind misty peaks of Bhadra Wildlife Sanctuary with river terns flying over backwater islands.',
        highlight: 'Campfire glow under crisp starlit Western Ghats skies',
        food: 'Dinner: Barbecue and local millet dishes by the bonfire'
      }
    },
    {
      dayTitle: 'Hoysala Architectural Wonders & Quiet Lakes',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Belavadi Veeranarayana Hoysala Temple',
        description: 'Marvel at the trikuta (triple-shrine) 13th-century soapstone masterpiece with 108 intricately lathed lathe-turned pillars.',
        highlight: 'Pristine, crowd-free Hoysala stone architecture mastery',
        food: 'Breakfast: Set Dose with vegetable sagu and filter coffee'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Hirekolale Lake Tranquil Reflection Walk',
        description: 'Relax along the scenic lake bund mirroring the steep slopes of Mullayanagiri against sapphire skies.',
        highlight: 'Picture-postcard lake reflections framed by mountain peaks',
        food: 'Lunch: Traditional country meals with mango curry'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Spice Bazaar Walk & Fresh Coffee Bean Shopping',
        description: 'Stock up on freshly roasted Peaberry and Arabica beans, wild honey, and whole green cardamom.',
        highlight: 'Purchasing premium single-origin coffee directly from source',
        food: 'Dinner: Mysore Pak and hot spiced badam milk'
      }
    }
  ],

  udupi: [
    {
      dayTitle: 'Sacred Krishna Matha & Columnar Island Wonders',
      morning: {
        time: 'Morning (07:00 AM – 11:30 AM)',
        title: 'Sri Krishna Matha Darshan via Kanakana Kindi',
        description: 'Visit the 13th-century monastery founded by philosopher Madhvacharya. View the deity through the sacred nine-holed silver window (Kanaka’s Window).',
        highlight: 'Spiritual temple chanting & holy Madhwa Sarovara tank',
        food: 'Breakfast: Traditional Satvik Udupi breakfast with hot Goli Baje'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Malpe Beach & Sea Walk Jetty',
        description: 'Walk along the paved scenic sea walk flanked by the Arabian Sea on one side and the serene Udyavara river on the other.',
        highlight: 'Gentle sea breezes and fishing trawlers gliding past',
        food: 'Lunch: Soft Neer Dosa with coconut chutney & coastal curry'
      },
      evening: {
        time: 'Evening (04:30 PM – 08:30 PM)',
        title: 'Ferry to St. Mary’s Island (Hexagonal Basalt Columns)',
        description: 'Cruise to the unique geological monument of columnar basaltic lava rocks formed 88 million years ago when Madagascar split from India.',
        highlight: 'Walking among world-famous natural hexagonal volcanic columns',
        food: 'Dinner: Authentic Udupi Brahmin thali served on plantain leaf'
      }
    },
    {
      dayTitle: 'Historic Lighthouses & Estuary Trails',
      morning: {
        time: 'Morning (07:30 AM – 11:30 AM)',
        title: 'Kaup Beach & 120-Year-Old Historic Lighthouse Climb',
        description: 'Ascend the 1901 stone lighthouse built atop black coastal boulders for panoramic 360° views of crashing Arabian waves.',
        highlight: 'Dramatic coastal boulder formations and vintage lighthouse lamp',
        food: 'Breakfast: Mangalore Buns with spicy coconut chutney'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Delta Beach (Kodi Bengre) Swarna Estuary Hike',
        description: 'Visit the secluded sand spit where the Swarna River meets the Arabian Sea, flanked by dense coconut palms and mangrove shacks.',
        highlight: 'Peaceful coastal confluence without commercial crowds',
        food: 'Lunch: Karavali special country lunch with Kokum kadi'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Backwater Kayaking & Sunset Drift',
        description: 'Paddle through sheltered estuarine mangroves as twilight bathes the water in rose gold hues.',
        highlight: 'Silent kayaking beneath dense mangrove canopies',
        food: 'Dinner: Crispy Masala Dosa at century-old Mitra Samaj'
      }
    },
    {
      dayTitle: 'Jain Monoliths & Heritage Artisans',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Karkala Gommateshwara Monolith (42-Foot Colossus)',
        description: 'Excursion to Karkala to marvel at the 1432 monolithic single-granite Bahubali colossus standing atop a rocky hill.',
        highlight: 'Monumental 42-foot single-stone carving with lake views',
        food: 'Breakfast: Steamed Moode idlis in screwpine leaves'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Moodabidri 1,000-Pillared Thousand Pillar Temple',
        description: 'Tour Tribhuvana Tilaka Chudamani, renowned for its carved granite pillars where no two pillars share the same design.',
        highlight: 'Extravagant wood & stone carved pillared hallways',
        food: 'Lunch: Satvik feast with Rasam, Kosambari & Hayagreeva sweet'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:30 PM)',
        title: 'Car Street Bazaar Shopping & Temple Chariot Glow',
        description: 'Stroll around Car Street for brass lamps, sandalwood carvings, and Udupi banana chips fried in pure coconut oil.',
        highlight: 'Atmospheric temple square illuminated by brass lamps',
        food: 'Dinner: Mysore Pak and fresh coconut water'
      }
    }
  ],

  badami: [
    {
      dayTitle: 'Chalukyan Rock-Cut Caves & Sacred Agastya Lake',
      morning: {
        time: 'Morning (07:30 AM – 11:30 AM)',
        title: 'Badami Cave Temples (Caves 1 to 4) Exploration',
        description: 'Explore four breathtaking 6th-century rock-cut cave shrines. Marvel at Cave 1’s 18-armed dancing Nataraja portraying 81 classical dance postures.',
        highlight: '18-armed Nataraja bas-relief and monumental red sandstone pillars',
        food: 'Breakfast: North Karnataka Jolada Rotti with Yennegai & spicy chutney'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:30 PM)',
        title: 'Bhutanatha Temples Mirroring Agastya Lake',
        description: 'Walk around the tranquil greenish waters of sacred Agastya Lake to the 7th-century Bhutanatha temple jutting into the water.',
        highlight: 'Golden sandstone temple mirrored in the still waters of Agastya Lake',
        food: 'Lunch: Traditional Lingayat vegetarian feast with Sajje Rotti'
      },
      evening: {
        time: 'Evening (05:00 PM – 08:00 PM)',
        title: 'Badami Northern Fort Sandstone Canyon Hike',
        description: 'Hike through dramatic narrow red sandstone chasms to the Upper Shivalaya and ancient granaries overlooking the town.',
        highlight: 'Sunset panoramic view across the canyon and valley',
        food: 'Dinner: Crispy Mirchi Bajji with roasted puffed rice (Girmit)'
      }
    },
    {
      dayTitle: 'UNESCO Jewels: Pattadakal & The Cradle of Aihole',
      morning: {
        time: 'Morning (08:00 AM – 12:00 PM)',
        title: 'Pattadakal UNESCO World Heritage Complex',
        description: 'Visit the royal coronation site of Chalukyan kings featuring 10 major 8th-century temples harmoniously blending Dravidian and Nagara styles.',
        highlight: 'Virupaksha and Mallikarjuna temples with Ramayana stone friezes',
        food: 'Breakfast: Steamed rice paddu with spicy peanut chutney'
      },
      afternoon: {
        time: 'Afternoon (01:00 PM – 04:30 PM)',
        title: 'Aihole: Cradle of Indian Temple Architecture',
        description: 'Explore over 120 stone temples dating back to 450 AD, including the apsidal Durga Temple with its Buddhist-chaitya style layout.',
        highlight: 'Apsidal Durga Temple and intricate Lad Khan temple stone lattices',
        food: 'Lunch: Traditional North Karnataka oota on plantain leaf'
      },
      evening: {
        time: 'Evening (05:30 PM – 08:00 PM)',
        title: 'Banashankari Temple & Haridra Tirtha',
        description: 'Visit the revered temple of goddess Banashankari featuring an expansive colonnaded sacred pool (Haridra Tirtha) with stone lamp towers.',
        highlight: 'Reflections of stone deepastambhas in the water tank',
        food: 'Dinner: Jowar roti with shenga holige (peanut flatbread)'
      }
    },
    {
      dayTitle: 'Hidden Springs & Master Saree Weavers',
      morning: {
        time: 'Morning (08:00 AM – 11:30 AM)',
        title: 'Mahakuta Temple & Natural Sacred Spring Pool',
        description: 'Visit the serene woodland Shiva temple complex where crystal-clear natural mountain springs feed the sacred Papavinasha tank.',
        highlight: 'Swimming in the ancient carved freshwater temple tank',
        food: 'Breakfast: Hot dosas with spicy tomato-onion chutney'
      },
      afternoon: {
        time: 'Afternoon (12:30 PM – 04:00 PM)',
        title: 'Guledgudda / Ilkal GI Saree Weavers Tour',
        description: 'Observe master weavers handloom legendary Ilkal sarees famous for distinctive "tope teni" red and white pallu embroidery.',
        highlight: 'Centuries-old pit loom weaving demonstrations',
        food: 'Lunch: Authentic rural Karnataka meal with spiced curd'
      },
      evening: {
        time: 'Evening (04:30 PM – 08:00 PM)',
        title: 'Badami Archaeological Museum & Farewell Sunset',
        description: 'Inspect priceless Chalukyan stone sculptures and prehistoric cave paintings before departing towards Hubballi.',
        highlight: 'Intricately sculpted Lajja Gauri and makara stone toranas',
        food: 'Dinner: Hot tea and Dharwad Peda for the journey'
      }
    }
  ]
};

/**
 * Generate a Demo Itinerary for the requested parameters
 */
export function generateDemoItinerary({
  destinationId = 'hampi',
  startingCity = 'Bengaluru',
  duration = 3,
  budget = 12000,
  travellers = 2,
  interests = ['History', 'Culture'],
  pace = 'Balanced',
  language = 'English'
}) {
  // Normalize destination
  const destKey = destinationActivities[destinationId] ? destinationId : 'hampi';
  const allDaysForDest = destinationActivities[destKey];
  
  // Pick requested number of days (1 to 7)
  const numDays = Math.min(Math.max(parseInt(duration, 10) || 3, 1), 7);
  const selectedDays = allDaysForDest.slice(0, numDays).map((dayData, index) => ({
    dayNumber: index + 1,
    dayTitle: dayData.dayTitle,
    morning: dayData.morning,
    afternoon: dayData.afternoon,
    evening: dayData.evening
  }));

  const totalBudget = parseInt(budget, 10) || 12000;
  const numTravellers = Math.max(parseInt(travellers, 10) || 1, 1);
  const perPersonBudget = Math.round(totalBudget / numTravellers);
  const dailyPerPerson = Math.round(perPersonBudget / numDays);

  // Friendly budget feasibility assessment
  let budgetStatus = 'Comfort Explorer';
  let budgetFeasibility = 'Comfortably balanced for mid-range stays, KSRTC AC transit & regional cuisine';
  if (dailyPerPerson < 1500) {
    budgetStatus = 'Backpacker / Economy';
    budgetFeasibility = 'Ideal for hostels/guesthouses, public bus transit & local messes';
  } else if (dailyPerPerson > 5000) {
    budgetStatus = 'Heritage Luxury';
    budgetFeasibility = 'Accommodates boutique resorts, private AC cab transit & fine heritage dining';
  }

  // Destination Display Name
  const destNames = {
    hampi: 'Hampi (Vijayanagara Heritage)',
    mysuru: 'Mysuru (Palaces & Culture)',
    coorg: 'Coorg (Western Ghats & Coffee Hills)',
    gokarna: 'Gokarna (Karavali Beaches & Shrines)',
    bengaluru: 'Bengaluru (Garden City & Silicon Capital)',
    chikkamagaluru: 'Chikkamagaluru (Coffee Hills & Western Ghats)',
    udupi: 'Udupi (Coastal Temples & Karavali Beaches)',
    badami: 'Badami (Chalukya Cave Temples & Heritage)'
  };

  return {
    isDemo: true,
    destinationName: destNames[destKey] || 'Karnataka Heritage Circuit',
    destinationId: destKey,
    startingCity: startingCity || 'Bengaluru',
    duration: numDays,
    travellers: numTravellers,
    totalBudget,
    perPersonBudget,
    dailyPerPerson,
    budgetStatus,
    budgetFeasibility,
    interests: interests.length > 0 ? interests : ['Heritage', 'Nature'],
    pace,
    language,
    days: selectedDays
  };
}
