import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css';
import { Link } from "react-router-dom";
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaUsers, FaBars,FaPaperPlane  } from "react-icons/fa";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open/close state

  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userMessage.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/chat', {
        user_message: userMessage,
      });

      if (response.data && response.data.response) {
        setChatHistory([...chatHistory, { user: userMessage, bot: response.data.response }]);
      } else {
        setChatHistory([...chatHistory, { user: userMessage, bot: "Sorry, I couldn't understand that!" }]);
      }

      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error.message);
      const backendError = error.response?.data?.error || 'Sorry, something went wrong. Please try again.';
      setError(backendError);
      setChatHistory([...chatHistory, { user: userMessage, bot: backendError }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="chatbot">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`} style={{backgroundColor:'black'}}>
        <div className="menu-section" >
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
        </div>
        <ul >
          <Link to="/innovatorprofilepage" className="side-bar-names"><li>
            <FaUser />
            {sidebarOpen && <span>Profile</span>}
          </li></Link>
          <Link to="/innovatorhome" className="side-bar-names"><li>
            <FaHome />
            {sidebarOpen && <span>Home</span>}
          </li></Link>
          <li>
            <FaBell />
            {sidebarOpen && <span>Notifications</span>}
          </li>
          <Link to="/messaging" className="side-bar-names">
            <li>
              <FaComments />
              {sidebarOpen && <span>Messages</span>}
            </li>
          </Link>
          <li>
            <FaUsers />
            {sidebarOpen && <span>Circle</span>}
          </li>
          <li>
            <FaCog />
            {sidebarOpen && <span>Settings</span>}
          </li>
          <Link to="/chatbot" className="side-bar-names">
            <li>
              <SmartToyIcon />
              {sidebarOpen && <span>InnoMate</span>}
            </li>
          </Link>
          <Link to="/ideasubmissionform " className="side-bar-names"><li>
                <FaPaperPlane />
                {sidebarOpen && <span style={{ color: 'white', marginLeft: '8px' }}>Post</span>}
            </li></Link>
        </ul>
      </aside>
      <div className="chat-container">
        <header>
          <h1 className="heading">INNOMATE</h1>
        </header>
        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message">
              <p>
                <strong>You:</strong> {chat.user}
              </p>
              <p>
                <strong>Innomate:</strong>
              </p>
              <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{chat.bot}</pre>
            </div>
          ))}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={userMessage}
            onChange={handleMessageChange}
            placeholder="Type your message..."
            className="input"
          />
          <button className="submit-button" type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Chatbot;
