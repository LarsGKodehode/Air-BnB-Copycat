// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './index.css';
// Fonts
import './assets/fonts/StintUltraCondensed-Regular.ttf';

// Target
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
