import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
// Removed Link import because it's not used in this component
import "../assets/styles/NavbarAdmin.css"; // Ensure the correct path for CSS file

const NavbarAdmin = ({ toggleSidebar }) => {
  return (
    <nav className="navbar-dark">
      {/* Left section - Sidebar Icon, Logo, and Page Title */}
      <div className="navbar-left">
        <FontAwesomeIcon
          icon={faBars}
          className="navbar-icon sidebar-toggle-icon"
          onClick={toggleSidebar} // Toggle sidebar visibility
        />
        <img src="/logo192.png" alt="Logo" className="navbar-logo" />
        <h1 className="page-name">Admin Service</h1>
      </div>

      {/* Center section - Search Zone */}
      <div className="search-zone">
        <input type="text" className="search-input" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} className="search-button" />
      </div>

      {/* Right section - Alert Icon and User Icon */}
      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        <FontAwesomeIcon icon={faUserCog} className="navbar-icon" />
      </div>
    </nav>
  );
};

export default NavbarAdmin;
