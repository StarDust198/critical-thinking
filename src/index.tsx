import React from 'react';
import ReactDOM from 'react-dom/client';

import { InfoState } from './context/InfoContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InfoState>
      <App />
    </InfoState>
  </React.StrictMode>
);
