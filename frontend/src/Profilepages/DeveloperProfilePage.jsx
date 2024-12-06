import React, { useEffect,useState } from "react";
import axios from 'axios';
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaBars, FaUsers, } from "react-icons/fa";
import "./developerprofilepage.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";

const DeveloperProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state for error messages

  // Fetch user data function
  const fetchUserData = async () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage (or wherever you store it)

    if (!token) {
      setError('No token found, please login.'); // Error if no token
      setLoading(false);
      return;
    }

    try {
      // Sending GET request to /me route
      const response = await axios.get('http://localhost:5000/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`, // Sending token in the Authorization header
        },
      });

      setUser(response.data.user); // Set the user data received from backend
      setLoading(false); // Stop loading state
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Failed to fetch user data.'); // Set error message if there's an issue
      setLoading(false);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state while fetching user data
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there was an issue fetching user data
  }

  // Ensure `user` is available before rendering user details
  if (!user) {
    return <div>User data not available</div>;
  }
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
            <h1 style={{color:"white"}}>{user.firstName} {user.lastName}</h1>
            <p>{user.role || 'Not defined'}</p>
            <p>{user.definesYou || 'Not specified'}</p>
            <p>{user.location || 'Not provided'}

            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="section">
          <h2 style={{textAlign:'left'}}>Skills</h2>
          <div className="item">
            <span>UI/UX</span>
          </div>
          <div className="item">
            <span>User Interface Design</span>
          </div>
        </div>
        <div className="section">
          <h2 style={{textAlign:'left'}}>Experience</h2>
          <div className="item">
            <span>Job Title</span>
          </div>
          <div className="item">
            <span>Company Name</span>
          </div>
          <div className="item">
            <span>Duration</span>
          </div>
        </div>
        <div className="section">
          <h2 style={{textAlign:'left'}}>Projects</h2>
          <div className="item">
            <span>Project Title</span>
          </div>
          <div className="item">
            <span>Description</span>
          </div>
          <div className="item">
            <span>Technologies Used</span>
          </div>
          <div className="item">
            <span>Role In Project</span>
          </div>
        </div>
        <div className="section">
          <h2 style={{textAlign:'left'}}>Education</h2>
          <div className="item">
            <span>Field of Study</span>
          </div>
          <div className="item">
            <span>Institute Name</span>
          </div>
          <div className="item">
            <span>Duartion</span>
          </div>
          <div className="item">
            <span>Grade</span>
          </div>
        </div>
        <div className="section">
          <h2 style={{textAlign:'left'}}>Certifications</h2>
          <div className="item">
            <span>Certificaate Name</span>
          </div>
          <div className="item">
            <span>Issuing Organization</span>
          </div>
          <div className="item">
            <span>Certificate Pdf</span>
          </div>
        </div>
        <div className="section">
          <h2 style={{textAlign:'left'}}>Achievements</h2>
          <div className="item">
            <span>Achievement Title</span>
          </div>
          <div className="item">
            <span>Description</span>
          </div>
          <div className="item">
            <span>Date Recieved</span>
          </div>
        </div>

        <div className="section">
          <h2 style={{textAlign:'left'}}>Collaboration Preferences</h2>
          <div className="item">
            <span>Preffered Environment Type</span>
          </div>
          <div className="item">
            <span>Availability</span>
          </div>
          <div className="item">
            <span>Looking For</span>
          </div>
        </div>

        <div className="section">
          <h2 style={{textAlign:'left'}}>Intrested Areas</h2>
          <div className="item">
            <span>Field of Intrest</span>
          </div>
          <div className="item">
            <span>Preffered Industries</span>
          </div>
        </div>

        <div className="section">
          <h2 style={{textAlign:'left'}}>Resume</h2>
          <div className="item">
            <span>Upload Resume</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperProfilePage;
