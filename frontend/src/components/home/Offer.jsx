import './offer.css'

import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <div className="offer-container">
        <div className='offer d-flex w-100'>
          <div className="gift d-flex col-2 align-items-center">
            <i className="bi bi-gift-fill"></i>
            <div className="gift-text d-flex flex-column">
                <span className='gift-bigger'>OFERTA</span>
                <Link to={`/vouchers`}>Resgatar</Link>
            </div>
          </div>
          <div className="offer-text w-100 d-flex align-items-center justify-content-center">
            <span><mark>Ofertas imperdíveis:</mark></span>
            <span>
                 Smartphones, Headphones, acessórios e diversos produtos com grande desconto!
            </span>
          </div>
        </div>
    </div>
  )
}

export default Offer
