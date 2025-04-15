import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import NavbarDark from "./NavbarDark"; // Optional navbar component
import "../assets/styles/header.css"; // Your custom styles

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <header className="header">
      {/* Navbar (optional) */}
      <NavbarDark />

      {/* Logo and Dashboard Title */}
      <div className="logo-title-container">
        <div className="logo-container">
          <img src="/logo192.png" alt="XPITRACK Logo" className="logo" />
        </div>
        <div className="title-container">
          <FontAwesomeIcon icon={faTachometerAlt} className="dashboard-icon" />
          <h1>Dashboard</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-zone">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Notification and User Icons */}
      <div className="icons-zone">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCircleUser} className="icon" />
      </div>
    </header>
  );
};

export default Header;
