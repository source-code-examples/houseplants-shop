// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hintergrundbild */}
      <div className="landing-background">
        <div className="overlay">
          <h1 className="company-name">Planty Places</h1>

          {/* Absatz über die Firma */}
          <p className="company-description">
            We bring fresh greenery into your <br />
            home – sustainable, stylish, and easy to care for.
          </p>

          {/* Get Started Button */}
          <button
            className="get-started-btn"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
