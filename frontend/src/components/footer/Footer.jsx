import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <footer className='d-flex flex-column justify-content-center'>
        <div className="footer-container d-flex w-100 align-items-center justify-content-between">
            <span>&copy; 2025 Merchant digital store</span>
            <a href="https://renan-nxscimento.github.io/Portifolio/" target="_blank">
            Desenvolvido por:<mark>Renan Nascimento</mark>
            </a>
        </div>
    </footer>
  )
}

export default Footer
