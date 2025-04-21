import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/header/Header'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
