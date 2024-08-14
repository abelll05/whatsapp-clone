import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder="Type a message..." 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
