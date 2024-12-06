import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "./SelectRole.css";

const SelectRole = () => {
  const [role, setRole] = useState(""); // State to store the selected role
  const navigate = useNavigate(); // Navigation hook

  // Check if the user is authenticated via token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token is found, redirect to login page (to enforce authentication)
      alert("Please log in first!");
      navigate("/login");
    }
  }, [navigate]);

  const handleRoleSelection = async () => {
    // Save selected role to localStorage before navigating to the profile creation page
    if (role) {
      localStorage.setItem("selectedRole", role); // Store selected role in localStorage
    }

    const token = localStorage.getItem("token");

    // Send role to backend API
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/save-role", 
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // If the role is successfully saved, navigate to the corresponding profile creation page
      if (response.status === 200) {
        if (role === "Investor") {
          navigate("/investorprofilecreation");
        } else if (role === "Developer") {
          navigate("/developerprofilecreation");
        } else if (role === "Innovator") {
          navigate("/innovatorprofilecreation");
        }
      }
    } catch (error) {
      console.error("Error saving role:", error);
      alert("Failed to save the role. Please try again.");
    }
  };

  return (
    <div className="SelectRole-container">
      <div className="login-card">
        <div className="icon">
          <img
            src="https://img.icons8.com/ios-glyphs/90/000000/user--v1.png"
            alt="User Icon"
          />
        </div>
        <h2>Select your Role</h2>
        <select
          className="role-dropdown"
          value={role}
          onChange={(e) => setRole(e.target.value)} // Update role on selection
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Investor">Investor</option>
          <option value="Developer">Developer</option>
          <option value="Innovator">Innovator</option>
        </select>
        <button className="next-button" onClick={handleRoleSelection}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectRole;
