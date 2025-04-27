import React from 'react'

import './navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='header-nav m-auto'>
        <ul className="d-flex align-items-center height-100">
            <li className='list-item'>
              <Link to={`/vouchers`}>
              Cupons de desconto
              </Link>
            </li>
            <li className='list-item'>
            <Link to={`/brands`}>
            Marcas
            </Link>
            </li>
            <li className='list-item'>
            <Link to={`/feedbacks`}>
            Feedbacks
            </Link>
            </li>
            <li className='list-item'>Entrar em contato</li>
        </ul>
    </nav>
  )
}

export default NavBar
