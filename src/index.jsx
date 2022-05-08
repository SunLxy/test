import React from 'react';
import { unstable_HistoryRouter } from 'react-router-dom';
import App from './App';
import './styles/index.less';
import ReactClient from 'react-dom/client';
const HistoryRouter = unstable_HistoryRouter

ReactClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HistoryRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
