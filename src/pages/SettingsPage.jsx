import React, { useState } from "react";
import AdminServicesSidebar from "../components/AdminServicesSidebar"; // Import Sidebar
import NavbarAdmin from "../components/NavbarAdmin"; // Import Navbar
import "../assets/styles/SettingsPage.css"; // Import page-specific styles
import "../assets/styles/dashboard.css"; // If you want consistent dashboard styling

const SettingsPage = () => {
  // State for sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // State for the new employee form
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  const handleAddEmployeeSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !employeeEmail || !employeePassword) {
      alert("Please fill in all fields.");
      return;
    }
    // Example: Log the new employee details (replace with actual logic)
    console.log("New Employee Added:", {
      employeeName,
      employeeEmail,
      employeePassword,
    });
  };

  return (
    <div
      className={`settings-wrapper ${
        isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      {/* Navbar with sidebar toggle button */}
      <NavbarAdmin toggleSidebar={toggleSidebar} />

      {/* Sidebar Component */}
      <AdminServicesSidebar isSidebarVisible={isSidebarVisible} />

      {/* Content Area */}
      <div
        className={`settings-content ${
          isSidebarVisible ? "with-sidebar" : "without-sidebar"
        }`}
      >
        <h1 className="page-title">Add New Employee</h1>

        <div className="employee-add-form">
          <h2>Employee Information</h2>
          <form onSubmit={handleAddEmployeeSubmit}>
            <div className="input-group">
              <label htmlFor="employee-name">Employee Name</label>
              <input
                type="text"
                id="employee-name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="employee-email">Employee Email</label>
              <input
                type="email"
                id="employee-email"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="employee-password">Employee Password</label>
              <input
                type="password"
                id="employee-password"
                value={employeePassword}
                onChange={(e) => setEmployeePassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
