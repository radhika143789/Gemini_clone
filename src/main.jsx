import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ContextProvider } from './context/context.jsx'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
  <StrictMode> 
   
    <App />
    </StrictMode>
  </ContextProvider>
);