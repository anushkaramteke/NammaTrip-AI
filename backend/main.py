import json
import logging
import os
import re
import urllib.parse
from pathlib import Path
from typing import List, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from google.genai import types
from pydantic import BaseModel, Field

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("nammatrip-backend")

# Supported Gemini models in google-genai v1beta (verified with API)
SUPPORTED_DEFAULT_MODEL = "gemini-3.5-flash-lite"
FALLBACK_MODELS = [
    "gemini-3.5-flash-lite",
    "gemini-3-flash-preview",
    "gemini-3.8-flash"
]


def sanitize_error_message(err: Exception) -> str:
    """Sanitize error messages to prevent exposing API keys, project IDs, or internal URLs."""
    raw = str(err)
    # Mask any API key or token query params
    clean = re.sub(r'(api_key|key)=([a-zA-Z0-9_\-]+)', r'\1=***', raw, flags=re.IGNORECASE)
    clean = re.sub(r'AIza[0-9A-Za-z-_]{35}', '***', clean)

    if "503" in clean or "high demand" in clean.lower() or "unavailable" in clean.lower():
        return "The Gemini AI model is temporarily experiencing high traffic. Please retry in a few moments."
    if "429" in clean or "resource_exhausted" in clean.lower() or "quota" in clean.lower():
        return "Gemini API rate limit or quota exceeded. Please wait a short while before retrying."
    if "404" in clean or "not_found" in clean.lower():
        return "The requested Gemini model is not supported or was retired for this API tier."
    return clean

# Load environment variables from backend/.env if present, otherwise fallback to root .env
env_path = Path(__file__).parent / ".env"
if env_path.exists():
    load_dotenv(dotenv_path=env_path)
else:
    load_dotenv()

app = FastAPI(title="NammaTrip AI API", version="1.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5175",
    ],
    allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------------------------------------------------
# Pydantic Schemas for Itinerary Generation
# -----------------------------------------------------------------------------

class ActivitySlot(BaseModel):
    time: str = Field(description="Approximate timing, e.g. 'Morning (07:30 AM – 11:30 AM)'")
    title: str = Field(description="Specific attraction, temple, or scenic landmark name in Karnataka")
    description: str = Field(description="Detailed 2-3 sentence description of the experience and sights")
    highlight: str = Field(description="Key cultural or scenic highlight")
    food: str = Field(description="Authentic local Karnataka food/drink recommendation nearby")
    estimated_cost: str = Field(description="Estimated cost range in INR for this slot, e.g. '₹200 – ₹450 (Est.)'")
    maps_query: str = Field(description="Search query for Google Maps, e.g. 'Virupaksha Temple Hampi Karnataka'")
    maps_url: Optional[str] = Field(default=None, description="Direct Google Maps search URL")


class DayPlan(BaseModel):
    day_number: int = Field(description="Day number (1 to 7)")
    day_title: str = Field(description="Theme/focus of the day")
    morning: ActivitySlot
    afternoon: ActivitySlot
    evening: ActivitySlot


class ItineraryRequest(BaseModel):
    starting_city: str = Field(default="Bengaluru", min_length=2, max_length=100)
    destination_id: Optional[str] = Field(default="karnataka")
    destination_name: Optional[str] = Field(default="Karnataka")
    number_of_days: int = Field(default=3, ge=1, le=7)
    budget_in_inr: int = Field(default=12000, gt=0)
    number_of_travellers: int = Field(default=2, ge=1, le=20)
    interests: List[str] = Field(default_factory=lambda: ["History", "Culture", "Food"])
    travel_pace: str = Field(default="Balanced")
    language: Optional[str] = Field(default="English")


class ItineraryResponse(BaseModel):
    is_ai_generated: bool = Field(default=True)
    destination_name: str
    destination_id: Optional[str] = None
    starting_city: str
    duration: int
    travellers: int
    total_budget: int
    per_person_budget: int
    daily_per_person: int
    budget_status: str
    budget_feasibility: str
    budget_disclaimer: str = Field(
        default="All budget figures, food prices, and transit fees are estimated approximations in INR for general planning. They do not represent live quotes, real-time ticket availability, traffic conditions, or hotel booking rates."
    )
    interests: List[str]
    pace: str
    language: str
    days: List[DayPlan]


# -----------------------------------------------------------------------------
# Endpoints
# -----------------------------------------------------------------------------

@app.get("/api/health")
def health_check():
    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip() or os.environ.get("GOOGLE_API_KEY", "").strip()
    key_configured = bool(gemini_key and gemini_key != "your_api_key_here")
    return {
        "status": "success",
        "message": "NammaTrip AI backend is running!",
        "gemini_configured": key_configured
    }


@app.get("/api/destinations")
def get_destinations():
    return [
        {
            "name": "Mysuru",
            "kannada_name": "ಮೈಸೂರು",
            "region": "Mysuru District, Southern Karnataka",
            "category": "Heritage",
            "description": "Explore Amba Vilas Palace, Chamundi Hills, and royal Wodeyar cultural heritage.",
            "attractions": ["Amba Vilas Palace", "Chamundeshwari Temple", "Devaraja Market", "Brindavan Gardens"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Mysore+Palace+Mysuru+Karnataka"
        },
        {
            "name": "Hampi",
            "kannada_name": "ಹಂಪಿ",
            "region": "Vijayanagara District, Central Karnataka",
            "category": "Heritage",
            "description": "Discover UNESCO ancient ruins, boulder-strewn landscapes, and legendary Vijayanagara monuments.",
            "attractions": ["Virupaksha Temple", "Vijaya Vittala Stone Chariot", "Matanga Hill", "Lotus Mahal"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Virupaksha+Temple+Hampi+Karnataka"
        },
        {
            "name": "Coorg",
            "kannada_name": "ಕೂರ್ಗ್ (ಕೊಡಗು)",
            "region": "Kodagu District, Western Ghats",
            "category": "Nature",
            "description": "Enjoy lush mist-covered coffee plantations, waterfalls, and warm Kodava hospitality.",
            "attractions": ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Namdroling Golden Temple"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Raja+Seat+Madikeri+Coorg+Karnataka"
        },
        {
            "name": "Gokarna",
            "kannada_name": "ಗೋಕರ್ಣ",
            "region": "Uttara Kannada District, Coastal Karnataka",
            "category": "Beaches",
            "description": "Explore serene Arabian Sea beaches, dramatic coastal cliffs, and sacred temple trails.",
            "attractions": ["Om Beach & Kudle Beach", "Mahabaleshwar Temple", "Half Moon & Paradise Treks", "Yana Rocks"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Om+Beach+Gokarna+Karnataka"
        },
        {
            "name": "Bengaluru",
            "kannada_name": "ಬೆಂಗಳೂರು",
            "region": "Bengaluru Urban, Southern Karnataka",
            "category": "Cities",
            "description": "Experience Karnataka's garden capital, Tudor-style palaces, lush botanical reserves, and iconic filter coffee.",
            "attractions": ["Bangalore Palace", "Lalbagh Botanical Garden", "Cubbon Park & Vidhana Soudha", "National Gallery of Modern Art"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Bangalore+Palace+Bengaluru+Karnataka"
        },
        {
            "name": "Chikkamagaluru",
            "kannada_name": "ಚಿಕ್ಕಮಗಳೂರು",
            "region": "Chikkamagaluru District, Western Ghats",
            "category": "Nature",
            "description": "Discover the birthplace of Indian coffee, highest mountain peaks, and breathtaking Western Ghats viewpoints.",
            "attractions": ["Mullayanagiri Peak", "Baba Budangiri & Manikyadhara", "Hebbe & Kallathigiri Falls", "Bhadra Wildlife Sanctuary"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Mullayanagiri+Peak+Chikkamagaluru+Karnataka"
        },
        {
            "name": "Udupi",
            "kannada_name": "ಉಡುಪಿ",
            "region": "Udupi District, Coastal Karavali",
            "category": "Beaches",
            "description": "Experience coastal temple serenity, volcanic columns of St. Mary's Island, and world-renowned Satvik Udupi cuisine.",
            "attractions": ["Sri Krishna Matha & Kanakana Kindi", "Malpe Beach & Sea Walk", "St. Mary's Island", "Kaup Beach & Lighthouse"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Matha+Udupi+Karnataka"
        },
        {
            "name": "Badami",
            "kannada_name": "ಬಾದಾಮಿ",
            "region": "Bagalkote District, Northern Karnataka",
            "category": "Heritage",
            "description": "Marvel at 6th-century rock-cut cave temples, glowing red sandstone cliffs, and the Chalukyan waters of Agastya Lake.",
            "attractions": ["Badami Cave Temples", "Bhutanatha Temple on Agastya Lake", "Badami Fort & Sandstone Canyons", "Banashankari Temple"],
            "maps_url": "https://www.google.com/maps/search/?api=1&query=Badami+Cave+Temples+Karnataka"
        }
    ]


@app.post("/api/plan", response_model=ItineraryResponse)
def generate_plan(req: ItineraryRequest):
    """
    Generate a structured, day-wise Karnataka travel itinerary using Google Gemini via google-genai SDK.
    Never exposes GEMINI_API_KEY to the client.
    """
    api_key = os.environ.get("GEMINI_API_KEY", "").strip() or os.environ.get("GOOGLE_API_KEY", "").strip()

    if not api_key or api_key in ("your_api_key_here", "YOUR_GEMINI_API_KEY"):
        logger.error("GEMINI_API_KEY is not configured in backend environment.")
        raise HTTPException(
            status_code=500,
            detail=(
                "GEMINI_API_KEY is not configured on the backend. "
                "Please copy backend/.env.example to backend/.env, set your Gemini API key, "
                "and ensure the backend reloads."
            )
        )

    # Prepare prompt for Gemini
    interests_str = ", ".join(req.interests) if req.interests else "Karnataka Heritage & Nature"
    per_person = req.budget_in_inr // max(req.number_of_travellers, 1)

    prompt = f"""
You are an expert, culturally grounded travel guide for Karnataka, India ("NammaTrip AI").
Generate a structured, geographically realistic {req.number_of_days}-day travel itinerary for {req.number_of_travellers} traveller(s).

Trip Specifications:
- Starting City in Karnataka: {req.starting_city}
- Primary Destination / Circuit: {req.destination_name} (ID: {req.destination_id})
- Duration: {req.number_of_days} Days (You MUST generate exactly {req.number_of_days} DayPlan items)
- Total Estimated Budget: ₹{req.budget_in_inr:,} INR (Approx ₹{per_person:,} INR per person)
- Travellers: {req.number_of_travellers}
- Key Interests: {interests_str}
- Pace: {req.travel_pace} (Relaxed = more chill time & leisurely food, Balanced = optimal sightseeing, Packed = comprehensive active tour)
- Language Context: {req.language} (keep names authentic in Karnataka culture)

Guidelines:
1. Routing: Build realistic routes from {req.starting_city} through {req.destination_name} without backtracking.
2. Structure: For every day from Day 1 to Day {req.number_of_days}, provide a distinct theme title, plus morning, afternoon, and evening activity slots.
3. Activity Slots:
   - Specific landmark or experience in Karnataka.
   - Recommended authentic local Karnataka dish/drink nearby (e.g. Davanagere Benne Dose, Mysore Pak, Coorg Akki Roti, Mangalore Neer Dosa, Maddur Vade, Kaveri filter coffee, etc.).
   - Estimated cost range in INR clearly labeled as estimate (e.g., "₹250 - ₹500 (Est.)").
   - A precise 'maps_query' that uniquely locates the landmark on Google Maps (e.g. 'Virupaksha Temple Hampi Karnataka').
4. Budget Status & Feasibility: Assess if ₹{req.budget_in_inr:,} INR is 'Backpacker / Economy', 'Comfort Explorer', or 'Heritage Luxury' and explain suitability.
5. All prices and activities must be clearly framed as AI estimates for planning inspiration, not live bookings or guaranteed availability.
"""

    user_model = os.environ.get("GEMINI_MODEL", "").strip()
    primary_model = user_model or SUPPORTED_DEFAULT_MODEL

    models_to_try = [primary_model]
    for fb in FALLBACK_MODELS:
        if fb not in models_to_try:
            models_to_try.append(fb)

    client = genai.Client(api_key=api_key)
    response = None
    last_error = None

    for model_name in models_to_try:
        try:
            logger.info("Attempting itinerary generation with Gemini model: %s", model_name)
            response = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_schema=ItineraryResponse,
                    temperature=0.7,
                ),
            )
            if response and response.text:
                logger.info("Successfully generated itinerary using model: %s", model_name)
                break
        except Exception as model_err:
            sanitized = sanitize_error_message(model_err)
            logger.warning("Gemini model '%s' failed: %s", model_name, sanitized)
            last_error = model_err

    if not response or not response.text:
        clean_detail = sanitize_error_message(last_error) if last_error else "Empty response from Gemini AI."
        raise HTTPException(
            status_code=502,
            detail=f"Google Gemini AI generation failed: {clean_detail}"
        )

    try:
        data_dict = json.loads(response.text)
        itinerary = ItineraryResponse.model_validate(data_dict)
    except Exception as parse_err:
        logger.error("Failed to parse Gemini JSON output: %s", parse_err)
        raise HTTPException(
            status_code=502,
            detail="Failed to parse structured itinerary from Gemini response."
        )

    # Ensure metadata integrity and generate Google Maps search links
    itinerary.is_ai_generated = True
    itinerary.destination_name = req.destination_name or itinerary.destination_name
    itinerary.destination_id = req.destination_id
    itinerary.starting_city = req.starting_city
    itinerary.duration = req.number_of_days
    itinerary.travellers = req.number_of_travellers
    itinerary.total_budget = req.budget_in_inr
    itinerary.per_person_budget = req.budget_in_inr // max(req.number_of_travellers, 1)
    itinerary.daily_per_person = itinerary.per_person_budget // max(req.number_of_days, 1)

    for day in itinerary.days:
        for slot in (day.morning, day.afternoon, day.evening):
            query = slot.maps_query or f"{slot.title} Karnataka"
            if not slot.maps_url or not slot.maps_url.startswith("http"):
                slot.maps_url = f"https://www.google.com/maps/search/?api=1&query={urllib.parse.quote_plus(query)}"

    return itinerary
