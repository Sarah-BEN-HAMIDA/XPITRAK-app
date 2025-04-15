import React, { useState } from "react";
import AdminServicesSidebar from "../components/AdminServicesSidebar";
import NavbarAdmin from "../components/NavbarAdmin";
import "../assets/styles/rapport.css"; // Make sure this path is correct

const RapportPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [reportType, setReportType] = useState("stock");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [alertSettings, setAlertSettings] = useState({
    product: "",
    minThreshold: "",
    expiration: "",
    alertDestination: "",
  });

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleGenerateReport = () => {
    alert("Generating report...");
  };

  return (
    <div
      className={`rapport-wrapper ${
        isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <NavbarAdmin toggleSidebar={toggleSidebar} />
      <AdminServicesSidebar isSidebarVisible={isSidebarVisible} />

      <div
        className={`rapport-content ${
          isSidebarVisible ? "with-sidebar" : "without-sidebar"
        }`}
      >
        <div className="content-container">
          <h2>Generate and Visualize Report</h2>

          <div className="alert-settings">
            <h3>Alert Settings</h3>
            <div className="form-group">
              <input
                type="text"
                name="product"
                placeholder="Select Product (Milk, etc.)"
                value={alertSettings.product}
                onChange={(e) =>
                  setAlertSettings({
                    ...alertSettings,
                    product: e.target.value,
                  })
                }
              />
              <input
                type="number"
                name="minThreshold"
                placeholder="Minimum Threshold"
                value={alertSettings.minThreshold}
                onChange={(e) =>
                  setAlertSettings({
                    ...alertSettings,
                    minThreshold: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="expiration"
                placeholder="Expiration"
                value={alertSettings.expiration}
                onChange={(e) =>
                  setAlertSettings({
                    ...alertSettings,
                    expiration: e.target.value,
                  })
                }
              />
              <select
                name="alertDestination"
                value={alertSettings.alertDestination}
                onChange={(e) =>
                  setAlertSettings({
                    ...alertSettings,
                    alertDestination: e.target.value,
                  })
                }
              >
                <option value="">Select Alert Destination</option>
                <option value="stockManager">Stock Manager</option>
                <option value="manager">Manager</option>
              </select>
            </div>
          </div>

          <div className="separator-line"></div>

          <div className="generate-report">
            <h3>Generate Report</h3>
            <div className="form-group">
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="stock">Stock</option>
                <option value="sales">Sales</option>
              </select>
              <input
                type="text"
                placeholder="Category (e.g., Drinks, Food)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="Product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <button onClick={handleGenerateReport}>Generate Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapportPage;
