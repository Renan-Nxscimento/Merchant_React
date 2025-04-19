import React from 'react'

import './navBar.css'

const NavBar = () => {
  return (
    <nav className='header-nav m-auto'>
        <ul className="d-flex align-items-center height-100">
            <li className='list-item'>Cupons de desconto</li>
            <li className='list-item'>Marcas</li>
            <li className='list-item'>Feedbakcs</li>
            <li className='list-item'>Entrar em contato</li>
        </ul>
    </nav>
  )
}

export default NavBar
