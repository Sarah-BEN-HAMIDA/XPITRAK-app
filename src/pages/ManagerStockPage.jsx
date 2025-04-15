import React, { useState } from "react";
import NavbarManager from "../components/NavbarManager";
import SidebarManager from "../components/SidebarManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons"; // Add 'plus' icon for adding
import "../assets/styles/ManagerStockPage.css";

const ManagerStockPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [productsOverview, setProductsOverview] = useState([
    {
      name: "Milk",
      category: "Dairy",
      quantity: 20,
      expiration: "2025-04-18",
      snag: "Close to expiry",
    },
    {
      name: "Rice",
      category: "Grains",
      quantity: 50,
      expiration: "2025-10-01",
      snag: "None",
    },
    // More products...
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newDetails, setNewDetails] = useState({
    quantity: "",
    expiration: "",
    snag: "",
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    expiration: "",
    quantity: "",
  });

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle product selection
  const handleProductSelect = (e) => {
    const productName = e.target.value;
    const product = productsOverview.find((p) => p.name === productName);
    setSelectedProduct(product);
    setNewDetails({
      quantity: product.quantity,
      expiration: product.expiration,
      snag: product.snag,
    });
  };

  // Handle edit change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setNewDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited product
  const handleSaveEdit = () => {
    const updatedProducts = productsOverview.map((product) =>
      product.name === selectedProduct.name
        ? { ...product, ...newDetails }
        : product
    );
    setProductsOverview(updatedProducts);
    setIsEditing(false); // Stop editing
  };

  // Delete a product
  const handleDeleteProduct = () => {
    const updatedProducts = productsOverview.filter(
      (product) => product.name !== selectedProduct.name
    );
    setProductsOverview(updatedProducts);
    setSelectedProduct(null); // Deselect after deleting
  };

  // Handle new product input change
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.quantity &&
      newProduct.expiration
    ) {
      setProductsOverview([
        ...productsOverview,
        { ...newProduct, snag: "None" }, // Default snag
      ]);
      setNewProduct({
        name: "",
        category: "",
        expiration: "",
        quantity: "",
      }); // Reset form after adding
    } else {
      alert("Please fill all fields to add a product.");
    }
  };

  return (
    <div className="manager-stock-page">
      <NavbarManager toggleSidebar={toggleSidebar} />
      <SidebarManager isSidebarVisible={isSidebarVisible} />

      <div className="main-content">
        <h1>Manager Stock Page</h1>

        {/* Product Selection */}
        <select
          onChange={handleProductSelect}
          value={selectedProduct?.name || ""}
        >
          <option value="">Select a product</option>
          {productsOverview.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>

        {/* Product Details */}
        {selectedProduct && (
          <div className="product-details">
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p>
              <strong>Quantity:</strong> {selectedProduct.quantity}
            </p>
            <p>
              <strong>Expiration Date:</strong> {selectedProduct.expiration}
            </p>
            <p>
              <strong>Snag:</strong> {selectedProduct.snag}
            </p>
          </div>
        )}

        {/* Edit Product Details */}
        {selectedProduct && isEditing && (
          <div className="edit-product">
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={newDetails.quantity}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="date"
                name="expiration"
                value={newDetails.expiration}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Snag:
              <input
                type="text"
                name="snag"
                value={newDetails.snag}
                onChange={handleEditChange}
              />
            </label>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        )}

        {/* Add New Product Form */}
        <div className="add-product-form">
          <h2>Add New Product</h2>
          <label>
            Product Name:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="date"
              name="expiration"
              value={newProduct.expiration}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleNewProductChange}
            />
          </label>
          <button onClick={handleAddProduct}>
            <FontAwesomeIcon icon={faPlusCircle} /> Add Product
          </button>
        </div>

        {/* Action Buttons */}
        {selectedProduct && !isEditing && (
          <div className="action-buttons">
            <button onClick={() => setIsEditing(true)}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button onClick={handleDeleteProduct}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerStockPage;
