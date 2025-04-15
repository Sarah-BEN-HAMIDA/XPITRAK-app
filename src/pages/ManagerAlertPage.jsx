import React, { useState } from "react";
import NavbarManager from "../components/NavbarManager";
import SidebarManager from "../components/SidebarManager";
import "../assets/styles/ManagerAlert.css";

const ManagerAlertPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const alertProducts = [
    {
      product: "Milk",
      category: "Dairy",
      expirationDate: "2025-04-15",
      snag: "Expiring in 2 days",
    },
    {
      product: "Yogurt",
      category: "Dairy",
      expirationDate: "2025-04-16",
      snag: "Expiring in 3 days",
    },
    {
      product: "Chicken",
      category: "Meat",
      expirationDate: "2025-04-14",
      snag: "Expiring tomorrow",
    },
    {
      product: "Lettuce",
      category: "Vegetables",
      expirationDate: "2025-04-13",
      snag: "Expired today",
    },
    {
      product: "Bread",
      category: "Bakery",
      expirationDate: "2025-04-14",
      snag: "Expiring tomorrow",
    },
  ];

  return (
    <div className="manager-alert-page">
      <NavbarManager toggleSidebar={toggleSidebar} />
      <SidebarManager isSidebarVisible={isSidebarVisible} />

      <div className={`main-content ${isSidebarVisible ? "shifted" : ""}`}>
        <h2 className="page-title">Product Expiration Alerts</h2>
        <div className="alert-table-container">
          <table className="alert-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Expiration Date</th>
                <th>Snag</th>
              </tr>
            </thead>
            <tbody>
              {alertProducts.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.category}</td>
                  <td>{item.expirationDate}</td>
                  <td>{item.snag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerAlertPage;
