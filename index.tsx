import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Pastikan Anda punya file App.tsx atau App.ts di root
import './index.css';     // Jika Anda menggunakan file CSS utama

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
