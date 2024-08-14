import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../components/ChatHeader';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import './ChatPage.css';

function ChatPage() {
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi!', sender: 'Alice', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) },
    { id: 2, text: 'Hello!', sender: 'me', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) },
    // Añade más mensajes aquí
  ]);

  const handleSend = (text) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    setMessages([...messages, { id: messages.length + 1, text, sender: 'me', time: currentTime }]);
  };

  return (
    <div className="chat-page">
      <ChatHeader contactName={`Chat with ${id}`} />
      <div className="messages-container">
        <div className="messages">
          {messages.map(msg => (
            <Message key={msg.id} text={msg.text} sender={msg.sender} time={msg.time} />
          ))}
        </div>
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
