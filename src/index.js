// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot for React 18
import App from "./App"; // Import the main App component
import "./index.css"; // Global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
