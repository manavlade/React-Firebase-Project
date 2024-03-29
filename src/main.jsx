import React from 'react'
import ReactDOM from 'react-dom/client'
import {FirebaseProvider} from './Context/Firebase';
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
