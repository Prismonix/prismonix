import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./SelectRole.css";


const SelectRole = () => {
  const [role, setRole] = useState(""); // State to store the selected role
  const navigate = useNavigate(); // Navigation hook

  const handleRoleSelection = () => {
    // Redirect based on the selected role
    if (role === "Investor") {
      navigate("/investorprofile");
    } else if (role === "Developer") {
      navigate("/developerprofilecreation");
    } else if (role === "Innovator") {
      navigate("/innovatorprofilecreation");
    } else {
      alert("Please select a role!"); // Alert if no role is selected
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
