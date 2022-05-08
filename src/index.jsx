import React from 'react';
import { HashRouter, } from 'react-router-dom';
import App from './App';
import './styles/index.less';
import ReactClient from 'react-dom/client';

ReactClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
