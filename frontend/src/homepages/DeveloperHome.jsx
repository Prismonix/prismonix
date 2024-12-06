import React, { useState } from "react";
import "./DeveloperHome.css";
import { FaHome, FaBell, FaComments, FaCog, FaUser, FaUsers, FaBars } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png'
import innomateAi from'../images/innomateAi.jpg'

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
            <Link to="/developerprofilepage" className="side-bar-names"><li>
            <FaUser />
            {sidebarOpen && <span style={{color:"white"}}>Profile</span>}
            </li></Link>
            <Link to="/developerhome" className="side-bar-names"><li>
            <FaHome />
            {sidebarOpen && <span style={{color:"white"}}>Home</span>}
            </li></Link>
            <li>
            <FaBell />
            {sidebarOpen && <span style={{color:"white"}}>Notifications</span>}
            </li>
            <Link to="/messaging" className="side-bar-names"><li>
            <FaComments />
            {sidebarOpen && <span style={{color:"white"}}>Messages</span>}
            </li></Link>
            <li>
            <FaUsers />
            {sidebarOpen && <span style={{color:"white"}}>Circle</span>}
            </li>
            <li>
            <FaCog />
            {sidebarOpen && <span style={{color:"white"}} >Settings</span>}
            </li>
            <Link to="/developerchatbot" className="side-bar-names"><li>
           <SmartToyIcon/>
              {sidebarOpen && <span style={{color:"white"}} >InnoMate</span>}
            </li></Link>
        </ul>
    </aside>


      {/* Main Content */}
      <main className="dev-main-content">
        {/* Header */}
        <header className="header">
            <img src={logo} alt="Prismonix Logo" style={{ width: '30px', height: 'auto', marginLeft:"20px"}}/>
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="chat-btn">
          <img src={innomateAi} style={{ width: '40px', height: 'auto'}} />
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
