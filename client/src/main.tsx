import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
