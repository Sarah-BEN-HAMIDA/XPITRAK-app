import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTachometerAlt,
  faBell,
  faBox,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/SidebarManager.css";

const SidebarManager = ({ isSidebarVisible }) => {
  return (
    <div className={`sidebar-manager ${isSidebarVisible ? "visible" : ""}`}>
      <div className="back-to-manager">
        <Link to="/manager-space" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> Back to
          Manager Space
        </Link>
      </div>
      <ul>
        <li className="sidebar-item">
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/alerts">
            <FontAwesomeIcon icon={faBell} /> Alert
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/stock">
            <FontAwesomeIcon icon={faBox} /> Stock Management
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/overview">
            <FontAwesomeIcon icon={faChartBar} /> Overview
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarManager;
