import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Avataaars } from 'avataaars';

const PopupChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Generate random avatars for the user and the admin
  const userAvatar = <Avataaars />;
  const adminAvatar = <Avataaars />;

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { sender: 'user', message: message, avatar: userAvatar }]);
    setMessage('');
  };

  return (
    <div>
      { showChat ? (
        <div className="popup-chat-container">
          <div className="chat-header">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <h3>Chat</h3>
            <button onClick={handleChatToggle}>Close</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                {msg.avatar}
                <div className={`message ${msg.sender}`}>{msg.message}</div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <form onSubmit={handleMessageSubmit}>
              <input
                type="text"
                placeholder="Enter message..."
                value={message}
                onChange={handleMessageChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      ) : (
        <button onClick={handleChatToggle}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          Open Chat
        </button>
      )}
    </div>
  );
};

export default PopupChat;
