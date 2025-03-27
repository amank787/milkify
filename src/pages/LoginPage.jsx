import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/milkyfy-logo.png"; 

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added setError to update error state
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get stored credentials from localStorage (Replace with API call in real app)
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true"); // Save login state
      navigate("/home"); // Redirect to Home Page
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="MilkyFy Logo" className="login-logo" />
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <button onClick={() => navigate("/forgot-password")} className="forgot-password-link">
            Forgot Password?
          </button>
          <button onClick={() => navigate("/signup")} className="signup-link">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

//  Move export statement outside the component
export default LoginPage;
