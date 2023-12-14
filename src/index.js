import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Item from './componentes/Item.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Item></Item>
  </React.StrictMode>
);
