import React, { useState } from "react";
import "./DeveloperHome.css";
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaUsers, FaBars } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";


const DeveloperHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open/close state
  const [feedItems, setFeedItems] = useState(Array.from({ length: 10 })); // Initial 10 items
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (feedItems.length >= 50) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setFeedItems((prevFeed) => [
        ...prevFeed,
        ...Array.from({ length: 10 }), // Add 10 more items
      ]);
    }, 1500);
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
            <Link to="" className="side-bar-names"><li>
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


      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h2>Prismonix</h2>
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="chat-btn">
            <SmartToyIcon />
          </button>
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
            {feedItems.map((_, index) => (
              <div className="feed-card" key={index}>
                <div className="card-header">
                  <h3>Kumar Agarwal</h3>
                  <span>{index + 1} Days ago</span>
                  <button className="follow-btn">Follow</button>
                </div>
                <div className="card-body">
                  <div className="content-placeholder"></div>
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

export default DeveloperHome;
