import React from 'react'
import './mainBar.css'
import CategoriesFilter from './CategoriesFilter'
import Search from './Search'

const MainBar = () => {
  return (
    <div className='under-header d-flex width-100'>
      <CategoriesFilter/>
      <Search/>
      <div className="cart-icon d-flex align-items-center">
        <div className="circle d-flex align-items-center justify-content-center">
        <i className="bi bi-cart-fill"></i>
        </div>
        <span>Carrinho</span>
      </div>
    </div>
  )
}

export default MainBar
