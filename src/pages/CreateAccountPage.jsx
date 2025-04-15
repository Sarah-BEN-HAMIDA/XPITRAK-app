import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Icon for the user
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesomeIcon
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Eye icons
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const CreateAccountPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // New state to define whether the user is an admin
  const [isAdmin, setIsAdmin] = useState(false); // True for admin, False for regular user

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log({ name, email, password });

      // After successful form submission, navigate to the dashboard
      navigate("/dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="login-container">
      {/* Logo and brand name */}
      <div className="header">
        <img
          src="/logo192.png" // Updated path to point to the logo in the public folder
          alt="XPITRACK Logo"
          className="logo"
        />
        <span className="brand-name">XPITRACK</span>
      </div>

      {/* Create Account Form */}
      <div className="login-form-container">
        {/* User Icon */}
        <div className="login-header">
          <FaUser size={40} className="user-icon" />
          <h2>{isAdmin ? "Admin Registration" : "Create Account"}</h2>
        </div>

        {/* Form fields */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Admin logic: Set default password for admin */}
          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={
                  isAdmin
                    ? "Initial password (admin will change it)"
                    : "Enter your password"
                }
                required
                disabled={isAdmin} // Disable input if admin (set default)
              />
              <FontAwesomeIcon
                icon={isPasswordVisible ? faEyeSlash : faEye}
                className="password-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="password-container">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={
                  isAdmin
                    ? "Confirm your initial password"
                    : "Confirm your password"
                }
                required
                disabled={isAdmin} // Disable input if admin
              />
              <FontAwesomeIcon
                icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
                className="password-icon"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="login-button">
            {isAdmin ? "Create Admin Account" : "Create Account"}
          </button>

          <p className="create-account">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
