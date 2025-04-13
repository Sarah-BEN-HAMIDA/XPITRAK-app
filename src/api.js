import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/login.css"; // Import the CSS for styling
import logo from "../assets/logo.png"; // Import logo image
import { FaUserCircle } from "react-icons/fa"; // Import icon for "Login Members"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-container">
      {/* Logo and XPITRACK text */}
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <div className="logo-text">XPITRACK</div>
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <div className="input-hint">Write your email address here</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-hint">Write your password here</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="divider"></div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {/* Icon and "Login Members" text */}
      <div className="login-footer">
        <div className="icon">
          <FaUserCircle />
        </div>
        <div className="login-header">Login Members</div>
      </div>
    </div>
  );
};

export default LoginPage;
