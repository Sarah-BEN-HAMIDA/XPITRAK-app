import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AdminServicesSidebar from "../components/AdminServicesSidebar";
import NavbarAdmin from "../components/NavbarAdmin";

import "../assets/styles/dashboard.css";
import "../assets/styles/NavbarAdmin.css";
import "../assets/styles/employees.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initialEmployees = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Manager" },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "Stock Manager",
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "samwilson@example.com",
    role: "Employee",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emilydavis@example.com",
    role: "Service Head",
  },
];

const timeSpentData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Time Spent (hrs)",
      data: [5, 7, 8, 6, 9, 4, 3],
      backgroundColor: "#FFB6C1",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Time Spent by Users in App",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.label}: ${tooltipItem.raw} hours`,
      },
    },
  },
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [error, setError] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.role) {
      setError("All fields are required.");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(newEmployee.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const newId = employees.length + 1;
    setEmployees([...employees, { id: newId, ...newEmployee }]);
    setNewEmployee({ name: "", email: "", role: "" });
    setError("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee({
      name: employee.name,
      email: employee.email,
      role: employee.role,
    });
  };

  const handleSaveChanges = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === editingEmployee.id ? { ...emp, ...newEmployee } : emp
      )
    );
    setEditingEmployee(null);
    setNewEmployee({ name: "", email: "", role: "" });
  };

  return (
    <div
      className={`employees-wrapper ${
        isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <NavbarAdmin toggleSidebar={toggleSidebar} />
      <AdminServicesSidebar isSidebarVisible={isSidebarVisible} />

      <div
        className={`employees-content ${
          isSidebarVisible ? "with-sidebar" : "without-sidebar"
        }`}
      >
        <div className="content-container">
          <h2>Manage Employees</h2>

          <div className="add-employee-section">
            <h3>{editingEmployee ? "Edit Employee" : "Add New Employee"}</h3>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newEmployee.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={newEmployee.role}
                onChange={handleInputChange}
              />
              {editingEmployee ? (
                <button onClick={handleSaveChanges}>Save Changes</button>
              ) : (
                <button onClick={handleAddEmployee}>Add Employee</button>
              )}
            </div>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                    <td>
                      <button onClick={() => handleEdit(employee)}>Edit</button>
                      <button onClick={() => handleDelete(employee.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="chart-container">
            <Bar data={timeSpentData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
