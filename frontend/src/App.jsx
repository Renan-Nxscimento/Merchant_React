import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { createContext, useState } from 'react'

export const UserContext = createContext()

function App() {
  const [thisUser, setThisUser] = useState(null)

  return (
    <>
      <UserContext.Provider value={{thisUser, setThisUser}}>
        <Header/>
        <Outlet/>
        <Footer/>
      </UserContext.Provider>
    </>
  )
}

export default App
