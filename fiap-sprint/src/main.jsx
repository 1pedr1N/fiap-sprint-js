import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetCSS from './index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
)
