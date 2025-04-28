import React from 'react'
import './mainBar.css'
import CategoriesFilter from './CategoriesFilter'
import Search from './Search'
import { Link } from 'react-router-dom'

const MainBar = () => {
  return (
    <div className='under-header d-flex width-100'>
      <CategoriesFilter/>
      <Search/>
      <div className="cart-icon d-flex align-items-center">
        <Link to={'./cart'}>
          <div className="circle d-flex align-items-center justify-content-center">
          <i className="bi bi-cart-fill"></i>
          </div>
          <span>Carrinho</span>
        </Link>  
      </div>
    </div>
  )
}

export default MainBar
