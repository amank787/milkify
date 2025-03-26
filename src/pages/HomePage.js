import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; 

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    navigate("/login"); // Redirect to Login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Dairy Management System 🐄</h1>
      <p>This is your dashboard. Manage everything here!</p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
