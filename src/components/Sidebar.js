import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faArrowLeft, // ✅ Import the back arrow icon
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <nav>
        {/* 📁 Operations Section */}
        <div
          className="sidebar-toggle"
          role="button"
          tabIndex={0}
          onClick={() => toggleSection("operations")}
          onKeyDown={(e) => e.key === "Enter" && toggleSection("operations")}
          aria-expanded={openSection === "operations"}
        >
          Operations{" "}
          <FontAwesomeIcon
            icon={openSection === "operations" ? faChevronDown : faChevronRight}
          />
        </div>
        {openSection === "operations" && (
          <ul>
            <li>
              <Link to="/sales-management">Sales management</Link>
            </li>
            <li>
              <Link to="/stock">Stock management</Link>
            </li>
          </ul>
        )}

        {/* 👥 Space Employers Section */}
        <div
          className="sidebar-toggle"
          role="button"
          tabIndex={0}
          onClick={() => toggleSection("employers")}
          onKeyDown={(e) => e.key === "Enter" && toggleSection("employers")}
          aria-expanded={openSection === "employers"}
        >
          Space Employers{" "}
          <FontAwesomeIcon
            icon={openSection === "employers" ? faChevronDown : faChevronRight}
          />
        </div>
        {openSection === "employers" && (
          <ul>
            <li>
              <Link to="/admin-services">Admin service</Link>
            </li>
            <li>
              <Link to="/manage-space">Manage space</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
