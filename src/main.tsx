import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App';
import './views/styles/commom.scss'
import './views/styles/reset.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
