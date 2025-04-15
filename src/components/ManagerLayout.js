import React from "react";
import { Outlet } from "react-router-dom";
import NavbarManager from "../components/NavbarManager"; // The navbar for managers
import ManagerSidebar from "../components/ManagerSidebar"; // Sidebar for managers

const ManagerLayout = () => {
  return (
    <div>
      <NavbarManager />
      <div style={{ display: "flex" }}>
        <ManagerSidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet /> {/* Render the child route components here */}
        </div>
      </div>
    </div>
  );
};

export default ManagerLayout;
