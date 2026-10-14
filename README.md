# NammaTrip AI

> Intelligent, culturally grounded travel planning for Karnataka, India.  
> Hackathon Edition -- Built with React 19, Vite, FastAPI, and Google Gemini AI.

---

## Project Overview

NammaTrip AI is a full-stack, AI-powered travel planning platform purpose-built for the state of Karnataka. Drawing inspiration from Karunadu's rich heritage, misty Western Ghats, and sun-soaked coastal shores, NammaTrip AI generates customized day-by-day travel schedules, hyper-local budget estimates in Indian Rupees (INR / Rs.), landmark locations with direct Google Maps links, printable A4 bilingual PDFs, and an interactive Kannada phrasebook companion.

The application features a culturally authentic design palette inspired by Karnataka's identity:

- **Forest Green** (`#143d2b`)
- **Warm Ivory** (`#fcfbf7`)
- **Terracotta** (`#c65328`)
- **Muted Gold** (`#d97706`)

---

## Problem Statement

- **Problem Area:** Karnataka Tourism and AI Itinerary Generation
- **Track / Problem ID:** [To be confirmed / Team Specified]

Planning a multi-day trip across Karnataka is currently fragmented and time-consuming:

1. **Information Silos:** Travelers must consult dozens of independent blogs, state tourism portals, transit timetables, and review sites just to assemble a single multi-day circuit.
2. **Unrealistic Routing:** Generic global AI travel tools lack regional awareness. They frequently suggest itineraries that ignore steep Western Ghats curves, monsoon roadblocks, temple darshan queues, or Sunday palace lighting schedules.
3. **Language and Cultural Barriers:** Visitors often miss out on authentic cultural immersion due to hesitation with the local language, lacking quick access to common conversational Kannada phrases.
4. **Unpredictable Expenses:** Lack of transparent budget benchmarks leaves travelers vulnerable to tourist markups and inaccurate cost expectations.

---

## Solution Overview

NammaTrip AI resolves these challenges through a unified, Karnataka-first travel engine:

1. **Algorithmic Regional Routing:** Couples Google Gemini AI with realistic Karnataka transit logic (Vande Bharat rail connections, KSRTC Airavat buses, and optimal travel windows).
2. **Transparent Travel Economics:** Calculates realistic per-person and group budget estimates across accommodation, transit, food, and activities.
3. **Cultural Companion:** Provides a 32-phrase travel phrasebook with Kannada script, phonetic English pronunciation, English and Hindi translations, and audio pronunciation.
4. **Offline Accessibility:** Features 1-click A4 printable PDF exports with intelligent page breaks and native Kannada typography support.

---

## Verified Features

All features listed below are fully implemented and verified in the source code:

### 1. Interactive Trip Planner

- **Starting City:** Customizable starting location (defaults to Bengaluru, with quick presets for Mysuru, Mangaluru, and Hubballi).
- **Duration:** 1 to 7 days with range slider and quick-select buttons.
- **Group Size:** 1 to 20 travelers with dynamic persona hints (Solo, Couple, Family, Group).
- **Budget in INR (Rs.):** Numeric budget validation with per-person calculations and budget feasibility tier indicators.
- **Travel Interests:** Multi-select chips for Nature, History, Beaches, Food, Adventure, and Culture.
- **Travel Pace:** Relaxed, Balanced, or Packed.
- **Language Preference:** English, Kannada, or Hindi.

### 2. Google Gemini AI Itinerary Generation (POST /api/plan)

- Connects to the official `google-genai` Python SDK on the backend.
- Uses `gemini-3.5-flash-lite` with automatic fallback to `gemini-3-flash-preview` and `gemini-3.8-flash`.
- Generates day-by-day itineraries with distinct daily theme titles.
- Each day contains Morning, Afternoon, and Evening slots with:
  - Activity title and detailed sightseeing description.
  - Key cultural or scenic highlight tag.
  - Authentic local Karnataka dish or beverage recommendation (such as Davanagere Benne Dose, Coorg Akki Roti, Mysuru Mylari Dosa, Mangaluru Neer Dosa, or Jolada Rotti Oota).
  - Estimated cost in INR (Rs.) clearly labeled as an approximation.
  - Direct Google Maps search link.
- Evaluates budget tier feasibility: Backpacker / Economy, Comfort Explorer, or Heritage Luxury.

### 3. Curated Offline Demo Mode

- If the backend is temporarily unreachable or GEMINI_API_KEY is not configured, users can click **View Curated Demo Preview Instead** to view complete, day-by-day itineraries for all 8 destinations without breaking the user experience.

### 4. Destination Explorer (Explore Karnataka)

- 8 curated Karnataka destinations:
  - **Mysuru** (Royal Heritage and Culture)
  - **Hampi** (UNESCO World Heritage)
  - **Coorg** (Western Ghats and Nature)
  - **Gokarna** (Karavali Coast and Beaches)
  - **Bengaluru** (Garden City and Silicon Capital)
  - **Chikkamagaluru** (Coffee Hills and Western Ghats)
  - **Udupi** (Coastal Temples and Karavali Beaches)
  - **Badami** (Chalukya Cave Temples and Heritage)
- Served dynamically from the FastAPI backend (`GET /api/destinations`) with offline fallback support.
- Category filter tabs with live item count badges:
  - All Destinations (8)
  - Heritage (3)
  - Nature (2)
  - Beaches (2)
  - Cities (1)
- Real-time search bar filtering destinations by name, Kannada script, region, attractions, culinary specialty, or description.
- Direct **Google Maps** search link on every destination card.
- **Plan a Trip Here** button that smoothly scrolls to the Trip Planner, preselects the destination pill, and activates matching travel interest presets.

### 5. Kannada Companion

- 32 curated travel phrases grouped into 6 categories:
  - Greetings (6 phrases)
  - Transport (6 phrases)
  - Food and Dining (6 phrases)
  - Shopping (5 phrases)
  - Directions (5 phrases)
  - Emergencies and Help (4 phrases)
- Displays Kannada script, phonetic English pronunciation, English meaning, Hindi meaning, and situational context notes.
- Audio pronunciation using browser SpeechSynthesis.
- One-click copy-to-clipboard button with visual confirmation toast.
- Trilingual UI language toggle (English, Hindi, Kannada) updating all headers, labels, and cultural proverbs.

### 6. Printable A4 PDF Export

- Generates printable A4 PDF itineraries via client-side `jsPDF` and `html2canvas`.
- High-DPI 2x retina rasterization ensures crisp Kannada typography.
- Automatic page-break detection calculates block heights in millimeters to prevent day cards from splitting across pages.
- Running header with Kannada branding (`NammaTrip AI - Karnataka Travel Itinerary`).
- Running footer with dynamic page numbering (`Page X of Y`).
- Safe direct file download: `NammaTrip-<destination>-<days>Days.pdf`.

---

## Technology Stack

### Frontend

- **Framework:** React 19 (`react`, `react-dom` v19.2.8)
- **Build Tool and Dev Server:** Vite 8 (`vite` v8.3.0) with `@vitejs/plugin-react` v6.1.1
- **Styling:** Pure CSS3 with custom design tokens, CSS variables, and responsive grid/flexbox layouts
- **PDF Generation:** `jspdf` v4.2.1 and `html2canvas` v1.4.1
- **Code Linter:** `oxlint` v1.81.0 (Oxc-based high-speed linter, passing with 0 warnings and 0 errors)

### Backend

- **Framework:** FastAPI (`fastapi` >= 0.115.0)
- **ASGI Server:** Uvicorn (`uvicorn` >= 0.30.0)
- **Data Validation:** Pydantic v2 (`pydantic` >= 2.8.0)
- **Environment Management:** Python-dotenv (`python-dotenv` >= 1.0.0)
- **AI SDK:** Official Google GenAI SDK (`google-genai` >= 2.30.0)
- **Gemini Models:** `gemini-3.5-flash-lite` (primary), with fallbacks to `gemini-3-flash-preview` and `gemini-3.8-flash`
- **Testing:** Python `unittest` with `fastapi.testclient.TestClient` and `httpx` v0.28.1

---

## Project Structure

```text
Nammatrip-AI-new/
|-- backend/
|   |-- .env.example          # Template for backend environment variables
|   |-- .env                  # Local backend secrets (git-ignored)
|   |-- main.py               # FastAPI application, endpoints, and Gemini integration
|   |-- requirements.txt      # Python dependencies
|   `-- test_api.py           # Automated backend test suite (unittest)
|-- public/                   # Static public assets
|-- src/
|   |-- assets/               # Images and icons
|   |-- components/           # React components and scoped stylesheets
|   |   |-- AIFeaturesSection.jsx / .css   # Algorithmic routing showcase
|   |   |-- BudgetEstimator.jsx / .css     # Interactive cost calculator
|   |   |-- CTASection.jsx / .css          # Quick prompt banner
|   |   |-- DestinationCard.jsx            # Individual destination card
|   |   |-- DestinationSection.jsx / .css  # Destination directory and search
|   |   |-- Footer.jsx / .css              # Footer component
|   |   |-- Hero.jsx / .css                # Hero section with interactive vibe cards
|   |   |-- KannadaCompanion.jsx / .css    # Language and cultural phrase companion
|   |   |-- Navbar.jsx / .css              # Header navigation and mobile drawer
|   |   `-- TripPlannerSection.jsx / .css  # Trip planner form, result view, and PDF trigger
|   |-- data/
|   |   |-- demoItineraries.js             # Curated fallback demo itineraries
|   |   |-- destinations.js                # 8 curated destinations and presets
|   |   |-- itinerarySample.js             # Budget tier data and sample circuits
|   |   `-- kannadaPhrases.js              # 32 bilingual phrases and translations
|   |-- services/
|   |   |-- api.js                         # Frontend API client for FastAPI
|   |   `-- pdfGenerator.js                # Client-side A4 PDF exporter
|   |-- App.css
|   |-- App.jsx               # Root application component
|   |-- index.css             # Global typography, color tokens, and resets
|   `-- main.jsx              # Application entry point
|-- .gitignore                # Git exclusion rules (.env, node_modules, dist, .venv)
|-- .oxlintrc.json            # Oxlint configuration
|-- index.html                # HTML entry point
|-- package.json              # Frontend scripts and dependencies
|-- README.md                 # Project documentation
`-- vite.config.js            # Vite configuration
```

---

## Prerequisites

Before running NammaTrip AI locally, ensure you have:

- **Node.js:** v18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm:** v9.0.0 or higher (included with Node.js)
- **Python:** v3.10 or higher ([Download Python](https://www.python.org/))
- **Google Gemini API Key:** A free API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

---

## Installation and Setup

### 1. Clone or Open the Repository

```bash
cd Nammatrip-AI-new
```

### 2. Backend Setup (FastAPI)

1. Open a terminal and navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Create a Python virtual environment:
   - On Windows (PowerShell):
     ```powershell
     python -m venv .venv
     .venv\Scripts\Activate.ps1
     ```
   - On macOS / Linux:
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   Copy the example file to `.env`:
   - On Windows (PowerShell):
     ```powershell
     Copy-Item .env.example .env
     ```
   - On macOS / Linux:
     ```bash
     cp .env.example .env
     ```

   Open `backend/.env` and insert your Gemini API key:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   GEMINI_MODEL=gemini-3.5-flash-lite
   ```

5. Start the FastAPI backend server:
   ```bash
   uvicorn main:app --reload --host 127.0.0.1 --port 8001
   ```
   The backend will be live at `http://127.0.0.1:8001`.  
   Interactive API documentation is available at `http://127.0.0.1:8001/docs`.

### 3. Frontend Setup (React + Vite)

1. Open a second terminal window and navigate to the project root:

   ```bash
   cd Nammatrip-AI-new
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or `http://localhost:5174` if port 5173 is in use).

---

## Backend API Endpoints

The FastAPI backend exposes the following REST endpoints:

### GET /api/health

- **Description:** Health check and Gemini configuration status.
- **Response Example:**
  ```json
  {
    "status": "success",
    "message": "NammaTrip AI backend is running!",
    "gemini_configured": true
  }
  ```

### GET /api/destinations

- **Description:** Returns the 8 curated Karnataka destinations with Kannada names, categories, descriptions, key attractions, and Google Maps queries.
- **Response:** Array of destination objects.

### POST /api/plan

- **Description:** Generates an AI-tailored travel plan using Google Gemini via the `google-genai` SDK.
- **Request Body Schema:**
  ```json
  {
    "starting_city": "Bengaluru",
    "destination_id": "hampi",
    "destination_name": "Hampi",
    "number_of_days": 3,
    "budget_in_inr": 12000,
    "number_of_travellers": 2,
    "interests": ["History", "Culture", "Food"],
    "travel_pace": "Balanced",
    "language": "English"
  }
  ```
- **Validation Rules:**
  - `starting_city`: 2 to 100 characters.
  - `number_of_days`: Integer between 1 and 7.
  - `budget_in_inr`: Integer greater than 0.
  - `number_of_travellers`: Integer between 1 and 20.
  - `travel_pace`: String (Relaxed, Balanced, Packed).

---

## Testing and Quality Verification

### Run Backend Automated Tests

The backend includes an automated test suite verifying health status, destination schema completeness, input validation, CORS headers, and security sanitization:

```bash
python -m unittest backend/test_api.py -v
```

### Run Frontend Linter

```bash
npm run lint
```

_(Executes `oxlint` with 0 warnings and 0 errors)._

### Build Frontend for Production

```bash
npm run build
```

_(Produces optimized client bundle in the `dist/` directory)._

---

## How to Use the Application

1. **Explore Destinations:** Scroll to the **Explore Karnataka** section. Filter by category (Heritage, Nature, Beaches, Cities) or search by name or attraction.
2. **Preselect a Destination:** Click **Plan a Trip Here** on any card (such as Chikkamagaluru). The page smoothly scrolls to the Trip Planner with that destination highlighted and relevant interests preselected.
3. **Configure Your Journey:** Set your starting city, trip duration (1-7 days), budget in INR (Rs.), number of travelers, pace, and language.
4. **Generate AI Itinerary:** Click **Generate My Itinerary**. Gemini AI creates a day-by-day plan with Morning, Afternoon, and Evening activities, local culinary stops, estimated costs, and Google Maps search buttons.
5. **Download PDF:** Click **Download Itinerary as PDF** to save an A4 printable itinerary with clear day breaks and Kannada script support.
6. **Learn Local Phrases:** Scroll to the **Kannada Companion** section. Click the speaker icon to listen to pronunciation, click the copy icon to copy phrases, and toggle the UI between English, Hindi, and Kannada.

---

## Privacy, Security, and Disclaimers

- **API Key Protection:** The `GEMINI_API_KEY` is read strictly on the backend from `backend/.env`. It is never bundled into client JavaScript or exposed in responses.
- **Git Hygiene:** All `.env` files, virtual environments, and build artifacts are explicitly excluded in `.gitignore`.
- **Error Sanitization:** Backend errors pass through `sanitize_error_message`, which uses regex pattern matching to mask Google API key strings (`AIza...`, `key=...`) before sending error details to the client.
- **No User Tracking:** NammaTrip AI does not use third-party analytics trackers or store personal travel data.
- **Cost Estimates Notice:** All budget figures, food prices, and transit fees are estimated approximations in INR for planning inspiration. They do not represent live quotes, real-time ticket availability, traffic conditions, or hotel booking rates.

---

## Limitations and Future Roadmap

### Current Limitations

- **Estimation Baseline:** Costs and transit durations are planning estimates rather than live ticket booking quotes.
- **Speech Synthesis:** Voice playback relies on the client browser's SpeechSynthesis API, which depends on installed operating system voice packs.
- **Demo Mode:** When offline or without an API key, the app presents curated demo plans rather than live AI generation.

### Future Roadmap

- **Live Transit Integration:** Real-time seat availability for KSRTC Airavat buses and Indian Railways trains.
- **Interactive Routing Map:** Leaflet or Mapbox integration showing day-by-day route paths and pinpoints.
- **Progressive Web App (PWA):** Offline itinerary storage for remote Western Ghats areas with limited network connectivity.
- **Crowdsourced Recommendations:** Verified local tips submitted by community travelers and homestay hosts.

---

## Contributors

- **[Team / Contributor Name]** -- Full-Stack Development, AI Prompt Engineering, UI/UX Design
- **[Contributor Name]** -- Backend Architecture, API Testing, Documentation

---

## License

This project was developed for the **Karnataka AI Hackathon 2026**.  
Licensed under the [MIT License](LICENSE) -- free to use for educational and exploratory travel purposes.  
_Made with pride for Karnataka Tourism._
