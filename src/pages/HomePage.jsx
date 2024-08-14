import React from 'react';
import ChatList from '../components/ChatList';

function HomePage() {
  const chats = [
    { id: 1, name: 'Alice', lastMessage: 'Hello!' },
    { id: 2, name: 'Bob', lastMessage: 'How are you?' },
    // Añade más chats aquí
  ];

  return (
    <div>
      <h1>Chats</h1>
      <ChatList chats={chats} />
    </div>
  );
}

export default HomePage;
