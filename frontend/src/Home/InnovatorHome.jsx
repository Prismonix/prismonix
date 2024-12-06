import React, { useState, useEffect } from "react";
import "./InnovatorHome.css";
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaUsers, FaBars, FaPlus, FaPaperPlane } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png';
import axios from 'axios';

const InnovatorHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open/close state
  const [feedItems, setFeedItems] = useState([]); // Empty array for feed items
  const [hasMore, setHasMore] = useState(true); // Flag to check if there is more data to load
  const [page, setPage] = useState(1); // To track the current page for pagination

  useEffect(() => {
    // Fetch files when the component mounts
    fetchFeedData();
  }, []); // Runs only once when the component mounts

  // Function to fetch data
  const fetchFeedData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/upload/feed?page=${page}`);
      const { fileDetails, hasMore } = response.data; // Destructure the response to get fileDetails and hasMore

      if (fileDetails.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        setFeedItems((prevItems) => [...prevItems, ...fileDetails]); // Append new files
        setPage((prevPage) => prevPage + 1); // Increment the page number for next fetch
      }

      setHasMore(hasMore); // Set the hasMore state based on the response
    } catch (error) {
      console.error('Error fetching feed data:', error);
    }
  };

  const fetchMoreData = () => {
    if (!hasMore) return; // Stop fetching if no more data
    fetchFeedData(); // Fetch more data from the server
  };

  return (
    <div className="developer-home">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="menu-section">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
        </div>
        <ul>
          <Link to="/developerprofilepage" className="side-bar-names">
            <li>
              <FaUser />
              {sidebarOpen && <span style={{ color: "white" }}>Profile</span>}
            </li>
          </Link>
          <Link to="/developerhome" className="side-bar-names">
            <li>
              <FaHome />
              {sidebarOpen && <span style={{ color: "white" }}>Home</span>}
            </li>
          </Link>
          <li>
            <FaBell />
            {sidebarOpen && <span style={{ color: "white" }}>Notifications</span>}
          </li>
          <Link to="/messaging" className="side-bar-names">
            <li>
              <FaComments />
              {sidebarOpen && <span style={{ color: "white" }}>Messages</span>}
            </li>
          </Link>
          <li>
            <FaUsers />
            {sidebarOpen && <span style={{ color: "white" }}>Circle</span>}
          </li>
          <li>
            <FaCog />
            {sidebarOpen && <span style={{ color: "white" }}>Settings</span>}
          </li>
          <Link to="/chatbot" className="side-bar-names">
            <li>
              <SmartToyIcon />
              {sidebarOpen && <span style={{ color: "white" }}>InnoMate</span>}
            </li>
          </Link>
          <Link to="/ideasubmissionform" className="side-bar-names">
            <li>
              <FaPaperPlane />
              {sidebarOpen && <span style={{ color: 'white', marginLeft: '8px' }}>Post</span>}
            </li>
          </Link>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dev-main-content">
        {/* Header */}
        <header className="header">
          <img src={logo} alt="Prismonix Logo" style={{ width: '30px', height: 'auto', marginLeft: "20px" }} />
          <input type="text" placeholder="Search" className="search-bar" />
          <Link to="/uploadpost">
            <button className="post-btn">
              <FaPlus style={{ fontSize: '24px', color: '#fff' }} />
              {sidebarOpen && <span style={{ color: 'white', marginLeft: '8px' }}>Post</span>}
            </button>
          </Link>
        </header>

        {/* Feed Section */}
        <InfiniteScroll
          dataLength={feedItems.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<></>}
          endMessage={<></>}
        >
          <div className="feed">
            {feedItems.map((item, index) => (
              <div className="feed-card" key={index}>
                <div className="card-header">
                  <h3>Kumar Agarwal</h3>
                  <span>{index + 1} Days ago</span>
                  <button className="follow-btn">Follow</button>
                </div>
                <div className="card-body">
                  {/* Display image or video based on the content type */}
                  {item.contentType.includes('image') && (
                    <img
                      src={`http://localhost:5000/uploads/${item.filename}`}
                      alt={item.filename}
                      className="feed-image"
                    />
                  )}
                  {item.contentType.includes('video') && (
                    <video controls className="feed-video">
                      <source src={`http://localhost:5000/uploads/${item.filename}`} type={item.contentType} />
                    </video>
                  )}
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </main>

      {/* Updates and Shared Ideas */}
      <aside className="right-sidebar">
        <div className="updates-section">
          <h3>Updates</h3>
          {[1, 2, 3].map((item) => (
            <div className="update-item" key={item}></div>
          ))}
        </div>
        <div className="shared-ideas-section">
          <h3>Shared Ideas</h3>
          {[1, 2, 3].map((item) => (
            <div className="shared-item" key={item}></div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default InnovatorHome;
