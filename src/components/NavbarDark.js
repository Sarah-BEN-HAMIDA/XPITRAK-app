import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/NavbarDark.css";

const NavbarDark = () => {
  return (
    <nav className="navbar-dark">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logo192.png" alt="Logo" />
        </div>

        {/* Title */}
        <div className="navbar-title">
          <Link to="/dashboard" className="navbar-title-link">
            <FontAwesomeIcon icon={faCogs} className="navbar-icon" />
            Dashboard
          </Link>
        </div>

        {/* Search Zone */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
          />
          <button className="navbar-search-btn">Search</button>
        </div>

        {/* User Icons */}
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          <FontAwesomeIcon icon={faCircleUser} className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDark;
