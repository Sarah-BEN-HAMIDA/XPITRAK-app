import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import the dashboard icon
import "../assets/styles/header.css"; // Assuming you have this CSS file

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query when the user types
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchQuery); // Add your search logic here
    // You can call an API or filter data based on searchQuery
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/logo192.png" // Updated path to point to the logo in the public folder
          alt="XPITRACK Logo"
          className="logo"
        />
      </div>

      {/* Icon before the title */}
      <div className="title-container">
        <FontAwesomeIcon icon={faTachometerAlt} className="dashboard-icon" />{" "}
        {/* Dashboard Icon */}
        <h1>Dashboard</h1>
      </div>

      {/* Search Zone */}
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

      {/* Icons after the search zone */}
      <div className="icons-zone">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCircleUser} className="icon" />
      </div>
    </header>
  );
};

export default Header;
