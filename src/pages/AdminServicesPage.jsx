import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminServicesSidebar from "../components/AdminServicesSidebar";
import "../assets/styles/AdminServicesPage.css";

const AdminServicesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-services-page">
      <NavbarAdmin onSidebarToggle={toggleSidebar} />
      <AdminServicesSidebar isOpen={isSidebarOpen} />

      <main className={isSidebarOpen ? "" : "full-width"}>
        <h1>Admin Dashboard</h1>

        {/* Overview Cards */}
        <div className="overview-sales">
          <div className="card">
            <h3>Total Sales</h3>
            <p>$42,000</p>
            <span>+12% from last month</span>
          </div>
          <div className="card">
            <h3>Total Purchases</h3>
            <p>$25,000</p>
            <span>+8% from last month</span>
          </div>
          <div className="card">
            <h3>Total Returns</h3>
            <p>$3,200</p>
            <span>-5% from last month</span>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-box">
            <h2>Sales Trends</h2>
            {/* Replace with your chart component */}
            <div style={{ height: "200px", backgroundColor: "#ecf0f1" }}>
              Chart Placeholder
            </div>
          </div>
          <div className="chart-box">
            <h2>Deals of the Year</h2>
            {/* Replace with your pie chart component */}
            <div style={{ height: "200px", backgroundColor: "#ecf0f1" }}>
              Pie Chart Placeholder
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-sales-progress">
          <h2>Product Sales Progress</h2>
          <div className="tabs">
            <button className="tab-btn">Product A</button>
            <button className="tab-btn">Product B</button>
            <button className="tab-btn">Product C</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Tab content goes here...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminServicesPage;
