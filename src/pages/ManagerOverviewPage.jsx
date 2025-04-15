import React, { useState } from "react";
import NavbarManager from "../components/NavbarManager";
import SidebarManager from "../components/SidebarManager";
import "../assets/styles/ManagerSpace.css";
import "../assets/styles/ManagerOverviewPage.css";

const ManagerOverviewPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const productData = [
    {
      product: "Milk",
      category: "Dairy",
      expiration: "2025-04-20",
      quantity: 30,
      snag: "Near expiry",
      status: "Near Expiration",
    },
    {
      product: "Eggs",
      category: "Poultry",
      expiration: "2025-04-25",
      quantity: 50,
      snag: "Cracked shells",
      status: "Safe",
    },
    {
      product: "Yogurt",
      category: "Dairy",
      expiration: "2025-04-18",
      quantity: 20,
      snag: "Outdated label",
      status: "Close to Expiration",
    },
    {
      product: "Bread",
      category: "Bakery",
      expiration: "2025-04-15",
      quantity: 15,
      snag: "Mold found",
      status: "Near Expiration",
    },
    {
      product: "Rice",
      category: "Grains",
      expiration: "2026-01-01",
      quantity: 100,
      snag: "Damaged packaging",
      status: "Far from Expiration",
    },
    {
      product: "Tomatoes",
      category: "Vegetables",
      expiration: "2025-04-14",
      quantity: 25,
      snag: "Bruised skin",
      status: "Close to Expiration",
    },
    {
      product: "Cheese",
      category: "Dairy",
      expiration: "2025-05-10",
      quantity: 40,
      snag: "Slight discoloration",
      status: "Safe",
    },
    {
      product: "Butter",
      category: "Dairy",
      expiration: "2025-06-01",
      quantity: 60,
      snag: "Leaky packaging",
      status: "Safe",
    },
    {
      product: "Chicken",
      category: "Meat",
      expiration: "2025-04-19",
      quantity: 10,
      snag: "Freezer burn",
      status: "Near Expiration",
    },
    {
      product: "Apples",
      category: "Fruits",
      expiration: "2025-04-28",
      quantity: 35,
      snag: "Soft spots",
      status: "Safe",
    },
    {
      product: "Onions",
      category: "Vegetables",
      expiration: "2025-05-01",
      quantity: 45,
      snag: "Peeling skin",
      status: "Safe",
    },
    {
      product: "Flour",
      category: "Baking",
      expiration: "2025-12-31",
      quantity: 70,
      snag: "Contamination risk",
      status: "Far from Expiration",
    },
    {
      product: "Sugar",
      category: "Baking",
      expiration: "2025-10-15",
      quantity: 80,
      snag: "Moisture inside pack",
      status: "Safe",
    },
    {
      product: "Canned Beans",
      category: "Canned Goods",
      expiration: "2026-02-20",
      quantity: 90,
      snag: "Dented can",
      status: "Far from Expiration",
    },
    {
      product: "Oil",
      category: "Pantry",
      expiration: "2026-01-01",
      quantity: 55,
      snag: "Sticky bottle",
      status: "Safe",
    },
  ];

  return (
    <div className="manager-space-page">
      <NavbarManager toggleSidebar={toggleSidebar} />
      <SidebarManager isSidebarVisible={isSidebarVisible} />

      <div className={`main-content ${isSidebarVisible ? "shifted" : ""}`}>
        <h1 className="overview-title">Product Overview</h1>

        <div className="overview-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Expiration Date</th>
                <th>Quantity</th>
                <th>Snag</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.category}</td>
                  <td>{item.expiration}</td>
                  <td>{item.quantity}</td>
                  <td>{item.snag}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerOverviewPage;
