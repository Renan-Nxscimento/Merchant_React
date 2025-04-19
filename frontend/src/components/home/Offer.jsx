import './offer.css'

import React from 'react'

const Offer = () => {
  return (
    <div className="offer-container">
        <div className='offer d-flex w-100'>
          <div className="gift d-flex col-2 align-items-center">
            <i className="bi bi-gift-fill"></i>
            <div className="gift-text d-flex flex-column">
                <span className='gift-bigger'>OFERTA</span>
                <a href="#">Resgatar</a>
            </div>
          </div>
          <div className="offer-text w-100 d-flex align-items-center justify-content-center">
            <span><mark><mark>Ofertas imperdíveis:</mark></mark></span>
            <span>
                 Smartphones, Headphones, acessórios e diversos produtos com grande desconto!
            </span>
          </div>
        </div>
    </div>
  )
}

export default Offer
