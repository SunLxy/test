import React from 'react';
import { unstable_HistoryRouter, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import './styles/index.less';
import ReactClient from 'react-dom/client';
export const history = createBrowserHistory();

const HistoryRouter = unstable_HistoryRouter

ReactClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HistoryRouter history={history} basename={process.env.PUBLIC_URL}>
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
