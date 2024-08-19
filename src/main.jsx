import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>,
)
