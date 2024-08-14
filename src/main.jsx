import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Cambié a global.css si es el archivo correcto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
