import React from 'react'
import NavBar from './NavBar'
import User from './User'

import './header.css'
import MainBar from '../searchbar/mainBar'

const Header = () => {
  return (
    <header 
    id="header" 
    className='
    header d-flex align-items-center flex-wrap
    '>
        <div className="logo d-flex align-items-center">
            <a href="/" id='logo'>MERCHANT</a>
        </div>
        <NavBar/>
        <User/>
        <div className="under-header w-100">
          <MainBar/>
        </div>
    </header>
  )
}

export default Header
