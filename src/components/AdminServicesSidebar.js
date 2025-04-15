import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTachometerAlt,
  faUsers,
  faChartLine,
  faClipboardList,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/SidebarManager.css";

const AdminServicesSidebar = ({ isSidebarVisible }) => {
  return (
    <div
      className={`admin-services-sidebar ${isSidebarVisible ? "visible" : ""}`}
    >
      <div className="back-to-manager">
        <Link to="/admin-services" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> Back to
          Admin Services
        </Link>
      </div>
      <ul>
        <li className="sidebar-item">
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>

        <li className="sidebar-item">
          <Link to="/employees">
            <FontAwesomeIcon icon={faUsers} /> Employees
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/sales-management">
            <FontAwesomeIcon icon={faChartLine} /> Sales Management
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/rapport">
            <FontAwesomeIcon icon={faClipboardList} /> Rapport
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} /> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminServicesSidebar;
