import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./SavePasswordPage.css"; 
import logo from "../assets/milkyfy-logo.png"; 

function SavePasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert("Password changed successfully!");
    
    // Navigate to Login Page after saving password
    navigate("/login");
  };

  return (
    <div className="save-password-container">
      <div className="save-password-box">
        <img src={logo} alt="MilkyFy Logo" className="save-password-logo" />
        <h2 className="save-password-title">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="save-password-form">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="save-password-input"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="save-password-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="save-password-button">
            Save Password
          </button>
        </form>
        <div className="save-password-links">
          <button onClick={() => navigate("/Loginpage.js")} className="back-to-login">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavePasswordPage;
