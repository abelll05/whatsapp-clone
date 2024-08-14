import React from 'react';
import { Link } from 'react-router-dom';
import './ChatList.css';

function ChatList({ chats }) {
  return (
    <div className="chat-list">
      {chats.map(chat => (
        <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-item">
          <div className="avatar-container">
            <img src={chat.avatar} alt={chat.name} className="avatar" />
          </div>
          <div className="chat-info">
            <div className="chat-header">
              <h3 className="chat-name">{chat.name}</h3>
              <span className="chat-time">{chat.time}</span>
            </div>
            <p className="chat-preview">{chat.lastMessage}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatList;
