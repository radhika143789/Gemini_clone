import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import contextProvider from './context/contex.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <contextProvider>
    <App />
  </contextProvider>,
)
