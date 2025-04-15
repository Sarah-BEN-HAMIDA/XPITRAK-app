import React, { useState } from "react";
import NavbarDark from "../components/NavbarDark";
import Sidebar from "../components/Sidebar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../assets/styles/dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  labels: ["Milk", "Cheese", "Yogurt", "Butter"],
  datasets: [
    {
      data: [30, 25, 20, 25],
      backgroundColor: ["#FFB6C1", "#C8E6C9", "#FFF176", "#81D4FA"],
      hoverBackgroundColor: ["#FF80AB", "#A5D6A7", "#FFEB3B", "#4FC3F7"],
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
      },
    },
  },
};

const Card = ({ title, currentValue, color, barColor }) => (
  <div className="card" style={{ backgroundColor: color }}>
    <div className="card-header">
      <h3>{title}</h3>
    </div>
    <div className="card-body">
      <p>Current Value</p>
      <strong>${currentValue}</strong>
      <div className="card-bar" style={{ backgroundColor: barColor }} />
    </div>
  </div>
);

const PillButton = ({ text }) => <div className="pill-button">{text}</div>;

const ReadMore = () => (
  <div className="read-more">
    <span>Read More</span>
    <span className="plus-sign">+</span>
  </div>
);

const StatisticsBar = () => (
  <div className="statistics-bar">
    <div className="stat-item">
      <strong>Sales</strong>
      <p>+20% this month</p>
    </div>
    <div className="stat-item">
      <strong>Stock</strong>
      <p>+15% this month</p>
    </div>
    <div className="stat-item">
      <strong>Returns</strong>
      <p>-5% this month</p>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="recent-activity">
    <h4>Recent Activity</h4>
    <ul>
      <li>Product XYZ added to stock.</li>
      <li>Product ABC's expiration date is nearing.</li>
      <li>Stock levels for Cheese are low.</li>
    </ul>
  </div>
);

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-page">
      <NavbarDark onSidebarToggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />

      <div className={`main-content ${isSidebarOpen ? "" : "full-width"}`}>
        <div className="dashboard">
          <StatisticsBar />

          <div className="dashboard-cards">
            <Card
              title="Milk And Derivatives"
              currentValue="151.74"
              color="#8E54E9"
              barColor="#C58DFC"
            />
            <Card
              title="Cheese"
              currentValue="177.90"
              color="#FBC02D"
              barColor="#FFD700"
            />
            <Card
              title="Yogurt"
              currentValue="145.93"
              color="#2ED573"
              barColor="#A5D6A7"
            />
          </div>

          <div className="pie-chart-and-buttons">
            <div className="pie-chart-container">
              <h3>The Most Product in Promotion</h3>
              <div className="pie-chart-wrapper">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>

            <div className="pill-button-container">
              <PillButton text="Get insight to optimize stock" />
              <PillButton text="Optimize stock rotation and minimize waste" />
              <PillButton text="Overview of upcoming expirations" />
              <PillButton text="Expiring soon" />
            </div>
          </div>

          <RecentActivity />
          <ReadMore />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
