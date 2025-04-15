import React, { useState } from "react";
import NavbarManager from "../components/NavbarManager";
import SidebarManager from "../components/SidebarManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons"; // Added faTimes for close icon
import "../assets/styles/ManagerSpace.css"; // Ensure correct path for your styles

// StatusItem component for rendering individual status messages
const StatusItem = ({ color, text }) => {
  return (
    <div className="status-item" style={{ backgroundColor: color }}>
      <span>{text}</span>
    </div>
  );
};

// StatusBar component to render the horizontal bar
const StatusBar = () => {
  return (
    <div className="status-bar">
      {/* Out of Stock */}
      <StatusItem
        color="#FF5733"
        text="**Chicken** is out of stock. Restock immediately!"
      />

      {/* Near Expiry */}
      <StatusItem
        color="#FFC300"
        text="**Milk**, will expire in 3 days. Consider discounting it!"
      />

      {/* Low Stock */}
      <StatusItem color="#4CAF50" text="**Rice**, has only 5 units left." />
    </div>
  );
};

// Legend component to display the legend at the bottom
const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="legend-dot" style={{ backgroundColor: "#FF5733" }} />
        <span>Out of stock</span>
      </div>
      <div className="legend-item">
        <div className="legend-dot" style={{ backgroundColor: "#FFC300" }} />
        <span>Near Expiry</span>
      </div>
      <div className="legend-item">
        <div className="legend-dot" style={{ backgroundColor: "#4CAF50" }} />
        <span>Low Stock</span>
      </div>
    </div>
  );
};

const ManagerSpacePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [auditTable, setAuditTable] = useState([
    {
      product: "Milk",
      quantitySystem: 100,
      quantityPhysical: 90,
      expirationSystem: "2025-05-01",
      expirationPhysical: "2025-04-15",
    },
    {
      product: "Yogurt",
      quantitySystem: 200,
      quantityPhysical: 210,
      expirationSystem: "2025-06-01",
      expirationPhysical: "2025-05-15",
    },
  ]);
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product: "Milk",
    quantitySystem: "",
    quantityPhysical: "",
    expirationSystem: "",
    expirationPhysical: "",
  });

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle closing the audit form
  const closeAuditForm = () => {
    setShowAuditForm(false);
  };

  // Handle adding product to table
  const handleAddProduct = () => {
    setAuditTable([
      ...auditTable,
      {
        product: newProduct.product,
        quantitySystem: newProduct.quantitySystem,
        quantityPhysical: newProduct.quantityPhysical,
        expirationSystem: newProduct.expirationSystem,
        expirationPhysical: newProduct.expirationPhysical,
      },
    ]);
    closeAuditForm(); // Close the form after adding
    setNewProduct({
      product: "Milk",
      quantitySystem: "",
      quantityPhysical: "",
      expirationSystem: "",
      expirationPhysical: "",
    }); // Clear the form after adding
  };

  // Remove Product from table
  const removeProduct = (index) => {
    const newTable = [...auditTable];
    newTable.splice(index, 1);
    setAuditTable(newTable);
  };

  // Calculate the difference between physical and system quantities
  const calculateDifference = (system, physical) => {
    return physical - system;
  };

  return (
    <div className="manager-space-page">
      {/* Navbar */}
      <NavbarManager toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <SidebarManager isSidebarVisible={isSidebarVisible} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarVisible ? "shifted" : ""}`}>
        <h1>Manager Space</h1>

        {/* Status Bar */}
        <StatusBar />

        {/* Inventory Audit */}
        <div className="inventory-audit">
          <h5>Perform a Physical Stock Count and Update Your System</h5>
          <button
            onClick={() => setShowAuditForm(!showAuditForm)}
            className="audit-button"
          >
            {showAuditForm ? "Close Audit Form" : "Open Audit Form"}
          </button>
        </div>

        {/* Show Audit Form Modal */}
        {showAuditForm && (
          <div className="audit-form-modal">
            <div className="audit-form">
              <div className="close-btn" onClick={closeAuditForm}>
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
              </div>
              <h5>Audit Form</h5>
              <label>Product:</label>
              <select
                value={newProduct.product}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, product: e.target.value })
                }
              >
                <option value="Milk">Milk</option>
                <option value="Yogurt">Yogurt</option>
              </select>
              <label>Quantity (System):</label>
              <input
                type="number"
                value={newProduct.quantitySystem}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    quantitySystem: e.target.value,
                  })
                }
              />
              <label>Quantity (Physical):</label>
              <input
                type="number"
                value={newProduct.quantityPhysical}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    quantityPhysical: e.target.value,
                  })
                }
              />
              <label>Expiration Date (System):</label>
              <input
                type="date"
                value={newProduct.expirationSystem}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    expirationSystem: e.target.value,
                  })
                }
              />
              <label>Expiration Date (Physical):</label>
              <input
                type="date"
                value={newProduct.expirationPhysical}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    expirationPhysical: e.target.value,
                  })
                }
              />
              <button onClick={handleAddProduct} className="add-product-btn">
                <FontAwesomeIcon icon={faPlus} /> Add to Table
              </button>
            </div>
          </div>
        )}

        {/* Inventory Audit Table */}
        <div className="audit-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity (System)</th>
                <th>Quantity (Physical)</th>
                <th>Difference</th>
                <th>Expiration (System)</th>
                <th>Expiration (Physical)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditTable.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.quantitySystem}</td>
                  <td>{item.quantityPhysical}</td>
                  <td>
                    {calculateDifference(
                      item.quantitySystem,
                      item.quantityPhysical
                    )}
                  </td>
                  <td>{item.expirationSystem}</td>
                  <td>{item.expirationPhysical}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="delete-icon"
                      onClick={() => removeProduct(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <Legend />
      </div>
    </div>
  );
};

export default ManagerSpacePage;
