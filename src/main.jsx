import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import Contact from './Project/Contact'
import App from './App.jsx'
// import Product from './Project/Product'
// import Home from './Project/Home'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)
