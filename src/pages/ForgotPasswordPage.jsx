import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage.css";
import logo from "../assets/milkyfy-logo.png"; // Ensure you have the logo

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendResetLink = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Simulating email verification and navigating to save password page
    setTimeout(() => {
      alert("Reset link sent successfully! Redirecting...");
      navigate("/save-password"); // Navigate to Save Password Page
    }, 1000);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <img src={logo} alt="MilkyFy Logo" className="forgot-logo" />
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-text">Enter your email to receive a reset link</p>
        <form onSubmit={handleSendResetLink}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="forgot-input"
          />
          {message && <p className="error-message">{message}</p>}
          <button type="submit" className="forgot-button">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
