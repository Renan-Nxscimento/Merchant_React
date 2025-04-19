import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/header/Header'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
