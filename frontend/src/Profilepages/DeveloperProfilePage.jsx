import React, { useState } from "react";
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaBars, FaUsers, } from "react-icons/fa";
import "./developerprofilepage.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";

const DeveloperProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="menu-section">
            <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
            </button>
        </div>
        <ul>
            <Link to="/developerprofilepage" className="side-bar-names"><li>
            <FaUser />
            {sidebarOpen && <span >Profile</span>}
            </li></Link>
            <Link to="/developerhome" className="side-bar-names"><li>
            <FaHome />
            {sidebarOpen && <span >Home</span>}
            </li></Link>
            <li>
            <FaBell />
            {sidebarOpen && <span >Notifications</span>}
            </li>
            <Link to="/messaging" className="side-bar-names"><li>
            <FaComments />
            {sidebarOpen && <span >Messages</span>}
            </li></Link>
            <li>
            <FaUsers />
            {sidebarOpen && <span >Circle</span>}
            </li>
            <li>
            <FaCog />
            {sidebarOpen && <span >Settings</span>}
            </li>
            <Link to="/chatbot" className="side-bar-names"><li>
           <SmartToyIcon/>
              {sidebarOpen && <span >InnoMate</span>}
            </li></Link>
        </ul>
    </aside>

      {/* Profile Content */}
      <div className="profile-content">
        {/* Profile Info */}
        <div className="profile-info">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
          />
          <div>
            <h1>Kumar Agarwal</h1>
            <p>UI/UX Intern at Rajiv Gandhi University of Knowledge Technologies</p>
          </div>
        </div>

        {/* Sections */}
        <div className="section">
          <h2>Education</h2>
          <div className="item">
            <span>RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES</span>
            <button className="edit-button">Edit</button>
          </div>
          <div className="item">
            <span>Dr.Kishores Ratnam EM High School</span>
            <button className="edit-button">Edit</button>
          </div>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <div className="item">
            <span>UI/UX</span>
            <button className="edit-button">Edit</button>
          </div>
          <div className="item">
            <span>User Interface Design</span>
            <button className="edit-button">Edit</button>
          </div>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="item">
            <span>CO-IN, UI/UX Engineer</span>
            <button className="edit-button">Edit</button>
          </div>
          <div className="item">
            <span>SSIT, UI/UX Intern</span>
            <button className="edit-button">Edit</button>
          </div>
        </div>

        <div className="section">
          <h2>Projects</h2>
          <div className="item">
            <span>Health Care Management of Pets</span>
            <button className="edit-button">Edit</button>
          </div>
          <div className="item">
            <span>Online Food Delivery App to Remote Areas</span>
            <button className="edit-button">Edit</button>
          </div>
        </div>

        <div className="section">
          <h2>Collaboration Preferences</h2>
          <div className="item">
            <span>UI/UX Designer, Web Development Projects</span>
            <button className="edit-button">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfilePage;
