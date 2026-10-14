"""
NammaTrip AI - Backend Automated Test Suite
Tests API endpoints, schemas, validation rules, CORS headers, and security sanitization.
Run with: python -m unittest backend/test_api.py
"""

import unittest
from fastapi.testclient import TestClient
from backend.main import app, sanitize_error_message


class TestNammaTripAPI(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def test_01_health_endpoint(self):
        """Verify GET /api/health returns 200 and does NOT leak sensitive keys."""
        res = self.client.get("/api/health")
        self.assertEqual(res.status_code, 200)
        data = res.json()
        self.assertEqual(data.get("status"), "success")
        self.assertIn("gemini_configured", data)
        self.assertIsInstance(data["gemini_configured"], bool)
        # Security: ensure no raw key or token string is present in response
        res_text = res.text
        self.assertNotIn("AIza", res_text)
        self.assertNotIn("Bearer", res_text)

    def test_02_destinations_endpoint(self):
        """Verify GET /api/destinations returns all 8 destinations with rich metadata."""
        res = self.client.get("/api/destinations")
        self.assertEqual(res.status_code, 200)
        destinations = res.json()
        self.assertIsInstance(destinations, list)
        self.assertEqual(len(destinations), 8, f"Expected 8 destinations, got {len(destinations)}")

        expected_names = {
            "Mysuru", "Hampi", "Coorg", "Gokarna",
            "Bengaluru", "Chikkamagaluru", "Udupi", "Badami"
        }
        actual_names = {d["name"] for d in destinations}
        self.assertEqual(expected_names, actual_names)

        expected_categories = {"Heritage", "Nature", "Beaches", "Cities"}

        for d in destinations:
            # Check required fields
            self.assertIn("name", d)
            self.assertIn("kannada_name", d)
            self.assertIn("region", d)
            self.assertIn("category", d)
            self.assertIn("description", d)
            self.assertIn("attractions", d)
            self.assertIn("maps_url", d)

            # Check data validity
            self.assertTrue(len(d["name"]) > 1)
            self.assertTrue(len(d["kannada_name"]) > 1)
            self.assertIn(d["category"], expected_categories)
            self.assertIsInstance(d["attractions"], list)
            self.assertGreaterEqual(len(d["attractions"]), 2)
            self.assertTrue(d["maps_url"].startswith("https://www.google.com/maps/search/"))

    def test_03_plan_validation_invalid_days(self):
        """Verify POST /api/plan rejects duration < 1 and > 7 with 422."""
        # 0 days
        res_0 = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 0,
            "budget_in_inr": 10000,
            "number_of_travellers": 2
        })
        self.assertEqual(res_0.status_code, 422)

        # 8 days (exceeds max of 7)
        res_8 = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 8,
            "budget_in_inr": 10000,
            "number_of_travellers": 2
        })
        self.assertEqual(res_8.status_code, 422)

    def test_04_plan_validation_invalid_budget(self):
        """Verify POST /api/plan rejects budget <= 0 with 422."""
        res_neg = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 3,
            "budget_in_inr": -500,
            "number_of_travellers": 2
        })
        self.assertEqual(res_neg.status_code, 422)

        res_zero = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 3,
            "budget_in_inr": 0,
            "number_of_travellers": 2
        })
        self.assertEqual(res_zero.status_code, 422)

    def test_05_plan_validation_invalid_travellers(self):
        """Verify POST /api/plan rejects travellers < 1 or > 20 with 422."""
        res_0 = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 3,
            "budget_in_inr": 10000,
            "number_of_travellers": 0
        })
        self.assertEqual(res_0.status_code, 422)

        res_25 = self.client.post("/api/plan", json={
            "starting_city": "Bengaluru",
            "number_of_days": 3,
            "budget_in_inr": 10000,
            "number_of_travellers": 25
        })
        self.assertEqual(res_25.status_code, 422)

    def test_06_security_sanitization(self):
        """Verify error message sanitizer strips Google API keys and tokens."""
        fake_leak_err = Exception("Failed at url https://generativelanguage.googleapis.com/v1beta?key=AIzaSyD-sampleFakeKey1234567890abcdef")
        sanitized = sanitize_error_message(fake_leak_err)
        self.assertNotIn("AIzaSyD-sampleFakeKey1234567890abcdef", sanitized)
        self.assertIn("***", sanitized)

    def test_07_cors_headers(self):
        """Verify CORS headers allow requests from frontend Vite origins."""
        for origin in ["http://localhost:5174", "http://127.0.0.1:5174", "http://localhost:5173"]:
            res = self.client.options(
                "/api/destinations",
                headers={
                    "Origin": origin,
                    "Access-Control-Request-Method": "GET"
                }
            )
            self.assertEqual(res.status_code, 200, f"CORS preflight failed for {origin}")
            self.assertEqual(res.headers.get("access-control-allow-origin"), origin)


if __name__ == "__main__":
    unittest.main()
