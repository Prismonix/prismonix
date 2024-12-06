import React from 'react';
import './messaging.css';

const Messaging = () => {
  return (
    <div className="messaging-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="icon active"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>

      {/* Chat List Section */}
      <div className="chat-list">
        <h2>Chats</h2>
        <div className="chat-item active">
          <span>Leslie Laurens</span>
          <span className="time">12m</span>
        </div>
        <div className="chat-item">
          <span>Scouting Group</span>
          <span className="time">3h</span>
        </div>
        <div className="chat-item">
          <span>Laura Palmieri</span>
          <span className="time">4h</span>
        </div>
      </div>

      {/* Chat Content Section */}
      <div className="chat-content">
        <div className="chat-header">
          <h2>Scouting Group</h2>
          <p>
            Welcome to the Streamline scouting chat. Any questions about the
            project, feel free to ask.
          </p>
        </div>
        <div className="chat-messages">
          <div className="message">Awesome! It's going to be amazing!</div>
          <div className="message">I've run through different docs.</div>
          <div className="message">Hope for the best ✌️</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Write a message..." />
        </div>
      </div>

      {/* Chat Members Section */}
      <div className="chat-members">
        <h2>Chat Members</h2>
        <ul>
          <li>
            <span>Leslie Laurens</span>
            <span>Freelance</span>
          </li>
          <li>
            <span>Leo Beste</span>
            <span>Freelance</span>
          </li>
          <li>
            <span>Sandro Tavares</span>
            <span>Product Owner</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Messaging;
