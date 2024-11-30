import React, { useState } from "react";
import "./messaging.css";


const Messaging = () => {
  const [messages, setMessages] = useState([
    { sender: "John", text: "Hey there!" },
    { sender: "You", text: "Hello! How are you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="messaging-app-container">
      <div className="contacts-section">
        <div className="contacts-header">
          <h2>Contacts</h2>
        </div>
        <div className="contacts-list">
          <div className="contact">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/user.png"
              alt="Profile"
              className="contact-img"
            />
            <div className="contact-name">John Doe</div>
          </div>
          <div className="contact">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/user.png"
              alt="Profile"
              className="contact-img"
            />
            <div className="contact-name">Jane Smith</div>
          </div>
        </div>
      </div>
      <div className="chat-section">
        <div className="chat-header">
          <h2>Chat with John</h2>
        </div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === "You" ? "sent" : "received"}`}
            >
              <span className="message-sender">{message.sender}:</span>
              <span className="message-text">{message.text}</span>
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          <button onClick={handleSendMessage} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
