import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SavePasswordPage from "./pages/SavePasswordPage"; // Import SavePasswordPage
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/save-password" element={<SavePasswordPage />} /> 
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
