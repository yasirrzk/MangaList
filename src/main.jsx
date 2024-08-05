import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Manga from './Components/Manga.jsx'
import Footer from './Components/Footer.jsx'
import Team from './Components/Team.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Manga/>
    <Team/>
    <Footer/>
  </React.StrictMode>,
)
