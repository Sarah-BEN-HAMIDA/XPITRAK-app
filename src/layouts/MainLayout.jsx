// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
