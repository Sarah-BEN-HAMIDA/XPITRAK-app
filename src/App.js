// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AdminServicesPage from "./pages/AdminServicesPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import EmployeesPage from "./pages/EmployeesPage";

import NotFoundPage from "./pages/NotFoundPage";
import RapportPage from "./pages/RapportPage";
import SalesManagementPage from "./pages/SalesManagementPage";
import ServiceSettingsPage from "./pages/ServiceSettingsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin-services" element={<AdminServicesPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/employees" element={<EmployeesPage />} />

        <Route path="/rapport" element={<RapportPage />} />
        <Route path="/sales-management" element={<SalesManagementPage />} />
        <Route path="/service-settings" element={<ServiceSettingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
