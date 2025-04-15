import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminServicesSidebar from "../components/AdminServicesSidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../assets/styles/SalesManagement.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesManagement = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar state

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [40, 100, 70, 120, 80, 150, 100],
        fill: false,
        borderColor: "#4CAF50",
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "Days" } },
      y: { title: { display: true, text: "Amount" }, min: 0 },
    },
  };

  return (
    <div className="sales-dashboard">
      <NavbarAdmin onToggleSidebar={toggleSidebar} />{" "}
      {/* Pass toggleSidebar to NavbarAdmin */}
      <AdminServicesSidebar isSidebarVisible={isSidebarVisible} />{" "}
      {/* Pass the state to AdminServicesSidebar */}
      <div className={`main-content ${isSidebarVisible ? "with-sidebar" : ""}`}>
        <h1>Sales Management</h1>

        {/* Filters Section */}
        <div className="filters">
          <label>
            Date: <input type="date" />
          </label>
          <label>
            Period:
            <select>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </label>
        </div>

        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <i className="fas fa-box"></i>
            <h3>Total Products</h3>
            <p>500</p>
          </div>
          <div className="card">
            <i className="fas fa-cogs"></i>
            <h3>Total in Stock</h3>
            <p>1,200</p>
          </div>
          <div className="card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Total Sales</h3>
            <p>$12,500</p>
          </div>
        </div>

        {/* Sales Over Time Chart */}
        <div className="charts">
          <h2>Sales Over Time</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;
