import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.less';
import ReactClient from 'react-dom/client';
ReactClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
