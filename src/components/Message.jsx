import React from 'react';
import './Message.css';

function Message({ text, sender, time }) {
  return (
    <div className={`message ${sender === 'me' ? 'sent' : 'received'}`}>
      <p>{text}</p>
      <span className="message-time">{time}</span>
    </div>
  );
}

export default Message;
