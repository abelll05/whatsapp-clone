import React from 'react';
import './ChatHeader.css';

function ChatHeader({ contactName }) {
  return (
    <div className="chat-header">
      <h2>{contactName}</h2>
      {/* Aquí puedes agregar más elementos como el estado en línea, etc. */}
    </div>
  );
}

export default ChatHeader;
