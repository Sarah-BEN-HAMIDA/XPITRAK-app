import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin"; // The navbar for admins
import AdminSidebar from "../components/AdminSidebar"; // Sidebar for admins

const AdminLayout = () => {
  return (
    <div>
      <NavbarAdmin />
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet /> {/* Render the child route components here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
