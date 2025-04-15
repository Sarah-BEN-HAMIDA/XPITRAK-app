import React, { useState } from "react";
import "../assets/styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons"; // User icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const LoginPage = () => {
  // State for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false); // To toggle between login and account creation
  const [error, setError] = useState(""); // For displaying error message
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button while submitting

  const navigate = useNavigate(); // Initialize navigate function

  // Login function to authenticate the user
  const loginUser = async (email, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Create Account function for user registration
  const createAccount = async (userData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Account creation failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  // Handle Login Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Reset previous errors
    try {
      const data = await loginUser(email, password);
      console.log("Logged in successfully:", data);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setError("Invalid credentials, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Account Creation Submit
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Reset previous errors
    const userData = { email, password }; // Gather data for registration
    try {
      const data = await createAccount(userData);
      console.log("Account created successfully:", data);
      navigate("/dashboard"); // Redirect to dashboard after successful registration
    } catch (err) {
      setError("Account creation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      {/* Logo and brand name */}
      <div className="header">
        <img
          src="/logo192.png" // Path to logo
          alt="XPITRACK Logo"
          className="logo"
        />
        <span className="brand-name">XPITRACK</span>
      </div>

      <div className="login-form-container">
        <h2 className="login-header">
          <FontAwesomeIcon icon={faUser} className="user-icon" />{" "}
          {/* User Icon */}
          {isNewUser ? "Create Account" : "Member Login"}
        </h2>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error if exists */}
        <form onSubmit={isNewUser ? handleCreateAccount : handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Enter your Gmail</label>{" "}
            {/* Updated label */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter your password</label>{" "}
            {/* Updated label */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-options">
            {!isNewUser && (
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            )}
          </div>
          <button
            type="submit"
            className="login-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? isNewUser
                ? "Creating Account..."
                : "Logging in..."
              : isNewUser
              ? "Create Account"
              : "Login"}
          </button>
        </form>
        <div className="create-account">
          <p>
            {isNewUser ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            className="create-account-button"
            onClick={() => setIsNewUser(!isNewUser)}
            disabled={isSubmitting}
          >
            {isNewUser ? "Login" : "Create Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
