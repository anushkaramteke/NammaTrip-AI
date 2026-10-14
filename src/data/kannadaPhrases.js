/**
 * NammaTrip AI - Curated Kannada Travel Phrases Data
 * Essential cultural and communicative phrases for travelers across Karnataka.
 * Categorized into: greetings, transport, food, shopping, directions, emergencies.
 * Includes Kannada script, English phonetic pronunciation, English meaning, Hindi meaning,
 * and situational context.
 */

export const phraseCategoryMeta = {
  greetings: {
    id: 'greetings',
    en: 'Greetings',
    hi: 'अभिवादन',
    kn: 'ಶುಭಾಶಯಗಳು',
    icon: '🙏'
  },
  transport: {
    id: 'transport',
    en: 'Transport',
    hi: 'यातायात',
    kn: 'ಸಾರಿಗೆ',
    icon: '🛺'
  },
  food: {
    id: 'food',
    en: 'Food & Dining',
    hi: 'खान-पान',
    kn: 'ಊಟ-ಉಪಾಹಾರ',
    icon: '🍛'
  },
  shopping: {
    id: 'shopping',
    en: 'Shopping',
    hi: 'खरीदारी',
    kn: 'ಶಾಪಿಂಗ್',
    icon: '🛍️'
  },
  directions: {
    id: 'directions',
    en: 'Directions',
    hi: 'दिशा-निर्देश',
    kn: 'ದಾರಿ & ವಿಳಾಸ',
    icon: '🧭'
  },
  emergencies: {
    id: 'emergencies',
    en: 'Emergencies',
    hi: 'आपातकालीन',
    kn: 'ತುರ್ತು ಸಹಾಯ',
    icon: '🚨'
  }
};

export const kannadaPhrasesData = [
  // ==========================================
  // 1. GREETINGS (ಶುಭಾಶಯಗಳು)
  // ==========================================
  {
    id: 1,
    category: 'greetings',
    kannada: 'ನಮಸ್ಕಾರ',
    phonetic: 'Namaskāra',
    english: 'Hello / Greetings',
    hindi: 'नमस्ते / प्रणाम',
    situation: 'Universal respectful greeting with folded hands; creates instant warmth anywhere in Karnataka.',
    tag: 'Essential'
  },
  {
    id: 2,
    category: 'greetings',
    kannada: 'ಧನ್ಯವಾದಗಳು',
    phonetic: 'Dhanyavādagalu',
    english: 'Thank you very much',
    hindi: 'बहुत-बहुत धन्यवाद',
    situation: 'Say this to shopkeepers, drivers, and homestay hosts to express sincere gratitude.',
    tag: 'Politeness'
  },
  {
    id: 3,
    category: 'greetings',
    kannada: 'ಊಟ ಆಯ್ತಾ?',
    phonetic: 'Oota aaythā?',
    english: 'Did you have food? (Friendly check-in)',
    hindi: 'खाना हो गया? (हाल-चाल पूछना)',
    situation: 'The quintessential Karnataka conversation opener equivalent to asking "How are you doing today?".',
    tag: 'Local Touch'
  },
  {
    id: 4,
    category: 'greetings',
    kannada: 'ಹೇಗಿದ್ದೀರಾ?',
    phonetic: 'Hēgiddīra?',
    english: 'How are you? (Polite / Respectful)',
    hindi: 'आप कैसे हैं?',
    situation: 'Polite inquiry for elders, guides, hotel hosts, and new acquaintances.',
    tag: 'Respect'
  },
  {
    id: 5,
    category: 'greetings',
    kannada: 'ಶುಭ ಮುಂಜಾನೆ / ಶುಭ ದಿನ',
    phonetic: 'Shubha munjāne / Shubha dina',
    english: 'Good morning / Good day',
    hindi: 'शुभ प्रभात / शुभ दिन',
    situation: 'Warm greeting for morning temple visits, sunrise treks, and hotel staff.',
    tag: 'Morning'
  },
  {
    id: 6,
    category: 'greetings',
    kannada: 'ಮತ್ತೆ ಸಿಗೋಣ',
    phonetic: 'Matte sigōna',
    english: 'See you again / Goodbye',
    hindi: 'फिर मिलेंगे / अलविदा',
    situation: 'Friendly send-off when parting ways with friendly locals or checking out of a homestay.',
    tag: 'Farewell'
  },

  // ==========================================
  // 2. TRANSPORT (ಸಾರಿಗೆ)
  // ==========================================
  {
    id: 7,
    category: 'transport',
    kannada: 'ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ',
    phonetic: 'Illi nillisi',
    english: 'Please stop here',
    hindi: 'कृपया यहाँ रोकें',
    situation: 'Use with auto-rickshaws, cabs, or private buses when reaching your destination or photo stop.',
    tag: 'Commute'
  },
  {
    id: 8,
    category: 'transport',
    kannada: 'ಮೀಟರ್ ಹಾಕಿ',
    phonetic: 'Meter hāki',
    english: 'Please turn on the meter',
    hindi: 'कृपया मीटर चालू करें',
    situation: 'Standard polite request when hiring an auto-rickshaw in Bengaluru, Mysuru, or Mangaluru.',
    tag: 'Auto-Rickshaw'
  },
  {
    id: 9,
    category: 'transport',
    kannada: 'ಬಸ್ ನಿಲ್ದಾಣಕ್ಕೆ ಹೋಗಬೇಕು',
    phonetic: 'Bus nildānakke hōgabēku',
    english: 'I need to go to the bus station',
    hindi: 'मुझे बस स्टैंड जाना है',
    situation: 'Telling your cab or auto driver your intercity transit hub destination.',
    tag: 'Transit'
  },
  {
    id: 10,
    category: 'transport',
    kannada: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?',
    phonetic: 'Railway nildāna ellide?',
    english: 'Where is the railway station?',
    hindi: 'रेलवे स्टेशन कहाँ है?',
    situation: 'Asking pedestrians or traffic police for navigation towards the train terminal.',
    tag: 'Navigation'
  },
  {
    id: 11,
    category: 'transport',
    kannada: 'ನಿಧಾನವಾಗಿ ಚಲಿಸಿ / ನಿಧಾನವಾಗಿ ಓಡಿಸಿ',
    phonetic: 'Nidhānavāgi ōdisi',
    english: 'Please drive slowly and carefully',
    hindi: 'कृपया गाड़ी धीरे चलाएं',
    situation: 'Great when navigating steep ghat curves in Coorg, Western Ghats, or Kudremukha.',
    tag: 'Safety'
  },
  {
    id: 12,
    category: 'transport',
    kannada: 'ಎಷ್ಟು ಹೊತ್ತು ಆಗುತ್ತೆ?',
    phonetic: 'Eshtu hottu āgutte?',
    english: 'How long will it take to reach?',
    hindi: 'पहुँचने में कितना समय लगेगा?',
    situation: 'Asking drivers or conductors about travel time and road conditions.',
    tag: 'Timing'
  },

  // ==========================================
  // 3. FOOD & DINING (ಊಟ & ಉಪಾಹಾರ)
  // ==========================================
  {
    id: 13,
    category: 'food',
    kannada: 'ಒಂದು ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಕೊಡಿ',
    phonetic: 'Ondhu bisi filter coffee kodi',
    english: 'Please give one hot filter coffee',
    hindi: 'कृपया एक गरम फिल्टर कॉफी दें',
    situation: 'Ordering Karnataka’s iconic frothy brass-davara filter coffee in traditional darshinis.',
    tag: 'Morning Ritual'
  },
  {
    id: 14,
    category: 'food',
    kannada: 'ತುಂಬಾ ರುಚಿಯಾಗಿದೆ / ಚೆನ್ನಾಗಿದೆ',
    phonetic: 'Thumbā ruchiyāgide / Chennāgide',
    english: 'It is very delicious / wonderful!',
    hindi: 'यह बहुत स्वादिष्ट / बढ़िया है!',
    situation: 'Expressing genuine praise to the chef or homestay host after enjoying a regional Karnataka meal.',
    tag: 'Compliments'
  },
  {
    id: 15,
    category: 'food',
    kannada: 'ಖಾರ ಕಡಿಮೆ ಮಾಡಿ',
    phonetic: 'Khāra kadime mādi',
    english: 'Please make it less spicy',
    hindi: 'कृपया तीखा कम रखें',
    situation: 'Instructing kitchen staff or street food vendors when ordering dose, sambar, or curries.',
    tag: 'Dining'
  },
  {
    id: 16,
    category: 'food',
    kannada: 'ಕುಡಿಯುವ ನೀರು ಕೊಡಿ',
    phonetic: 'Kudiyuva neeru kodi',
    english: 'Please provide drinking water',
    hindi: 'कृपया पीने का पानी दें',
    situation: 'Requesting drinking water at restaurants, thali messes, or roadside cafes.',
    tag: 'Essentials'
  },
  {
    id: 17,
    category: 'food',
    kannada: 'ಬೆಣ್ಣೆ ದೋಸೆ / ಮೈಸೂರು ಪಾಕ್ ಇದೆಯಾ?',
    phonetic: 'Benne Dose / Mysore Pak ideyā?',
    english: 'Do you have Davanagere Benne Dose or Mysore Pak?',
    hindi: 'क्या बटर डोसा या मैसूर पाक है?',
    situation: 'Inquiring about Karnataka’s trademark heritage snacks and royal sweets.',
    tag: 'Local Delicacy'
  },
  {
    id: 18,
    category: 'food',
    kannada: 'ಬಿಲ್ ಕೊಡಿ',
    phonetic: 'Bill kodi',
    english: 'Please bring the bill / check',
    hindi: 'कृपया बिल दीजिए',
    situation: 'Polite request to the cashier or server at the conclusion of dining.',
    tag: 'Payment'
  },

  // ==========================================
  // 4. SHOPPING (ಶಾಪಿಂಗ್)
  // ==========================================
  {
    id: 19,
    category: 'shopping',
    kannada: 'ಇದು ಎಷ್ಟು? / ಬೆಲೆ ಎಷ್ಟು?',
    phonetic: 'Idhu eshtu? / Bele eshtu?',
    english: 'How much does this cost?',
    hindi: 'यह कितने का है? / इसका दाम क्या है?',
    situation: 'When browsing Mysore silk sarees, Channapatna wooden toys, or Coorg coffee beans.',
    tag: 'Pricing'
  },
  {
    id: 20,
    category: 'shopping',
    kannada: 'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ',
    phonetic: 'Swalpa kadime mādi',
    english: 'Please reduce the price slightly',
    hindi: 'कृपया थोड़ा कम कीजिए',
    situation: 'Friendly bargaining at local street bazaars and souvenir stalls.',
    tag: 'Bargaining'
  },
  {
    id: 21,
    category: 'shopping',
    kannada: 'ಬೇರೆ ಬಣ್ಣ ಇದೆಯಾ?',
    phonetic: 'Bēre banna ideyā?',
    english: 'Do you have another colour / shade?',
    hindi: 'क्या कोई दूसरा रंग है?',
    situation: 'Asking for different color choices when buying traditional Karnataka handloom textiles.',
    tag: 'Colors'
  },
  {
    id: 22,
    category: 'shopping',
    kannada: 'ಖರೀದಿಸಲು ಒಳ್ಳೆಯ ಅಂಗಡಿ ಎಲ್ಲಿದೆ?',
    phonetic: 'Kharīdisalu olleya angadi ellide?',
    english: 'Where is a good shop to buy this?',
    hindi: 'खरीदारी के लिए अच्छी दुकान कहाँ है?',
    situation: 'Asking locals for recommendations on authentic state emporiums and artisan shops.',
    tag: 'Markets'
  },
  {
    id: 23,
    category: 'shopping',
    kannada: 'ಕಾರ್ಡ್ / ಯುಪಿಐ ಸ್ವೀಕರಿಸುತ್ತೀರಾ?',
    phonetic: 'Card / UPI svīkarisuttīra?',
    english: 'Do you accept card or UPI / GPay / PhonePe?',
    hindi: 'क्या कार्ड या यूपीआई चलेगा?',
    situation: 'Checking cashless payment options at handicraft stalls and heritage shops.',
    tag: 'Payment'
  },

  // ==========================================
  // 5. DIRECTIONS (ದಾರಿ & ವಿಳಾಸ)
  // ==========================================
  {
    id: 24,
    category: 'directions',
    kannada: 'ದಾರಿ ಎಲ್ಲಿದೆ?',
    phonetic: 'Dāri ellide?',
    english: 'Where is the road / way to...?',
    hindi: 'का रास्ता कहाँ है?',
    situation: 'Asking locals for the route to Virupaksha Temple, Abbey Falls, or Om Beach.',
    tag: 'Orientation'
  },
  {
    id: 25,
    category: 'directions',
    kannada: 'ನೇರವಾಗಿ ಹೋಗಿ',
    phonetic: 'Nēravāgi hōgi',
    english: 'Go straight ahead',
    hindi: 'सीधे जाइए',
    situation: 'Crucial directional term when listening to local navigation advice.',
    tag: 'Direction'
  },
  {
    id: 26,
    category: 'directions',
    kannada: 'ಬಲಗಡೆ ತಿರುಗಿ / ಎಡಗಡೆ ತಿರುಗಿ',
    phonetic: 'Balagade tirugi / Edagade tirugi',
    english: 'Turn right / Turn left',
    hindi: 'दाएं मुड़ें / बाएं मुड़ें',
    situation: 'Guidance cues for turning at cross-roads and junctions.',
    tag: 'Turning'
  },
  {
    id: 27,
    category: 'directions',
    kannada: 'ಇಲ್ಲಿಂದ ಎಷ್ಟು ದೂರ?',
    phonetic: 'Illinda eshtu dūra?',
    english: 'How far is it from here?',
    hindi: 'यहाँ से कितनी दूर है?',
    situation: 'Checking if a viewpoint or monument is walkable or requires vehicle transit.',
    tag: 'Distance'
  },
  {
    id: 28,
    category: 'directions',
    kannada: 'ಹತ್ತಿರದಲ್ಲಿ ಹೋಟೆಲ್ ಇದೆಯಾ?',
    phonetic: 'Hattiradalli hotel ideyā?',
    english: 'Is there a restaurant / hotel nearby?',
    hindi: 'क्या पास में कोई होटल / भोजनालय है?',
    situation: 'Locating nearby dining spots or stays while exploring heritage ruins or hill trails.',
    tag: 'Landmark'
  },

  // ==========================================
  // 6. EMERGENCIES & HELP (ತುರ್ತು ಸಹಾಯ)
  // ==========================================
  {
    id: 29,
    category: 'emergencies',
    kannada: 'ದಯಮಾಡಿ ನನಗೆ ಸಹಾಯ ಮಾಡಿ',
    phonetic: 'Dayamāḍi nanage sahāya mādi',
    english: 'Please help me',
    hindi: 'कृपया मेरी मदद कीजिए',
    situation: 'When you are lost, need urgent assistance, or have a travel breakdown.',
    tag: 'Urgent Help'
  },
  {
    id: 30,
    category: 'emergencies',
    kannada: 'ಆಸ್ಪತ್ರೆ / ಔಷಧಿ ಅಂಗಡಿ ಎಲ್ಲಿದೆ?',
    phonetic: 'Āspatre / Aushadhi angadi ellide?',
    english: 'Where is the hospital / pharmacy?',
    hindi: 'अस्पताल / दवाई की दुकान कहाँ है?',
    situation: 'Locating medical care or pharmacy store in a sudden health emergency.',
    tag: 'Medical'
  },
  {
    id: 31,
    category: 'emergencies',
    kannada: 'ಪೊಲೀಸ್ ಠಾಣೆ ಎಲ್ಲಿದೆ?',
    phonetic: 'Police thāne ellide?',
    english: 'Where is the police station?',
    hindi: 'पुलिस स्टेशन कहाँ है?',
    situation: 'Seeking tourist police assistance or reporting a lost item.',
    tag: 'Safety'
  },
  {
    id: 32,
    category: 'emergencies',
    kannada: 'ಕನ್ನಡ ಸ್ವಲ್ಪ ಗೊತ್ತು',
    phonetic: 'Kannaḍa swalpa gothu',
    english: 'I know a little bit of Kannada',
    hindi: 'मुझे थोड़ी कन्नड़ आती है',
    situation: 'Guaranteed to melt hearts and elicit a radiant welcoming smile everywhere in Karnataka!',
    tag: 'Heart Winner'
  }
];

export const companionTranslations = {
  English: {
    tag: '🗣️ Pillar 3 • Cultural Connection',
    title: 'Kannada Companion',
    scriptSub: '(ಕನ್ನಡ ಮಿತ್ರ)',
    subtitle: 'Travel like a welcomed guest, not just an observer. A few heartfelt words of Kannada bridge miles and bring instant warm smiles across autorickshaws, tea stalls, and heritage corridors.',
    searchPlaceholder: 'Search by Kannada script, English phonetic, or meaning...',
    allCategories: 'All Categories',
    meaningLabel: 'Meaning',
    hindiLabel: 'Hindi Meaning',
    situationLabel: 'When to use',
    copyBtnTitle: 'Copy phrase and pronunciation',
    copiedToast: 'Copied phrase & pronunciation to clipboard!',
    listenBtnTitle: 'Listen to pronunciation',
    emptyTitle: 'No matching Kannada phrases found',
    emptySubtitle: "Try searching with keywords like 'coffee', 'auto', 'stop', 'help', or 'namaskara', or select a different category.",
    clearSearch: 'Clear Search',
    totalPhrasesLabel: 'phrases available',
    proverbTitle: '"ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ"',
    proverbMeaning: '("May glorious Kannada triumph, may glorious Kannada prosper!") — A timeless 2,000-year-old expression celebrating Karnataka’s language and warm hospitality.'
  },
  Hindi: {
    tag: '🗣️ स्तम्भ 3 • सांस्कृतिक जुड़ाव',
    title: 'कन्नड़ साथी (Kannada Companion)',
    scriptSub: '(ಕನ್ನಡ ಮಿತ್ರ)',
    subtitle: 'कर्नाटक में एक सम्मानित अतिथि की तरह यात्रा करें। कन्नड़ के कुछ आत्मीय शब्द ऑटो रिक्शा, चाय की दुकानों और ऐतिहासिक स्थलों पर तुरंत अपनेपन की मुस्कान ला देते हैं।',
    searchPlaceholder: 'कन्नड़ लिपि, उच्चारण या अर्थ खोजें...',
    allCategories: 'सभी श्रेणियाँ',
    meaningLabel: 'अंग्रेज़ी अर्थ (English)',
    hindiLabel: 'हिन्दी अर्थ (Hindi)',
    situationLabel: 'उपयोग का संदर्भ',
    copyBtnTitle: 'वाक्यांश और उच्चारण कॉपी करें',
    copiedToast: 'क्लिपबोर्ड पर कॉपी हो गया!',
    listenBtnTitle: 'उच्चारण सुनें',
    emptyTitle: 'कोई मेल खाता वाक्यांश नहीं मिला',
    emptySubtitle: "'कॉफी', 'ऑटो', 'रुकिए', 'मदद', या 'नमस्कार' जैसे शब्दों से खोजें या श्रेणी बदलें।",
    clearSearch: 'खोज साफ़ करें',
    totalPhrasesLabel: 'वाक्यांश उपलब्ध',
    proverbTitle: '"ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ"',
    proverbMeaning: '("समृद्ध कन्नड़ विजयी हो, समृद्ध कन्नड़ फले-फूले!") — कर्नाटक की 2000 वर्ष पुरानी भाषा और आतिथ्य सत्कार के प्रति अनूठा सम्मान।',
  },
  Kannada: {
    tag: '🗣️ ಆಧಾರಸ್ತಂಭ 3 • ಸಾಂಸ್ಕೃತಿಕ ಸಂಪರ್ಕ',
    title: 'ಕನ್ನಡ ಮಿತ್ರ (Kannada Companion)',
    scriptSub: '(ಕನ್ನಡ ಪ್ರವಾಸ ಮಾರ್ಗದರ್ಶಿ)',
    subtitle: 'ಕರ್ನಾಟಕದಲ್ಲಿ ಕೇವಲ ಪ್ರವಾಸಿಗರಾಗಿರದೆ, ಆತ್ಮೀಯ ಅತಿಥಿಯಾಗಿ ಸಂಚರಿಸಿ. ಆಟೋ, ಚಹಾ ಅಂಗಡಿ ಮತ್ತು ಪಾರಂಪರಿಕ ತಾಣಗಳಲ್ಲಿ ಕನ್ನಡದ ಕೆಲವು ಮಧುರ ಮಾತುಗಳು ಸ್ಥಳೀಯರ ಮುಖದಲ್ಲಿ ನಗು ತರುತ್ತವೆ.',
    searchPlaceholder: 'ಕನ್ನಡ ಅಕ್ಷರಗಳು, ಉಚ್ಚಾರಣೆ ಅಥವಾ ಅರ್ಥ ಹುಡುಕಿ...',
    allCategories: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು',
    meaningLabel: 'ಇಂಗ್ಲಿಷ್ ಅರ್ಥ (English)',
    hindiLabel: 'ಹಿಂದಿ ಅರ್ಥ (Hindi)',
    situationLabel: 'ಬಳಕೆಯ ಸಂದರ್ಭ',
    copyBtnTitle: 'ವಾಕ್ಯವನ್ನು ನಕಲಿಸಿ',
    copiedToast: 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ಯಶಸ್ವಿಯಾಗಿ ನಕಲಿಸಲಾಗಿದೆ!',
    listenBtnTitle: 'ಉಚ್ಚಾರಣೆ ಕೇಳಿ',
    emptyTitle: 'ಯಾವುದೇ ವಾಕ್ಯಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
    emptySubtitle: "'ಕಾಫಿ', 'ಆಟೋ', 'ನಿಲ್ಲಿಸಿ', 'ಸಹಾಯ' ಅಥವಾ 'ನಮಸ್ಕಾರ' ಮುಂತಾದ ಪದಗಳಿಂದ ಹುಡುಕಿ ನೋಡಿ.",
    clearSearch: 'ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ',
    totalPhrasesLabel: 'ವಾಕ್ಯಗಳು ಲಭ್ಯವಿದೆ',
    proverbTitle: '"ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ"',
    proverbMeaning: '("ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ") — ಕನ್ನಡ ನಾಡು, ನುಡಿ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಮೇಲಿನ ಸಾರ್ವಕಾಲಿಕ ಪ್ರೀತಿಯ ಉದ್ಘೋಷ.'
  }
};
