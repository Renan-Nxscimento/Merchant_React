import React from 'react'

import './qualitiesString.css'

const QualitiesString = () => {
  return (
    <div className='qualities-string d-flex w-100'>
        <div className="qualities-container d-flex align-items-center w-100 justify-content-center">
            <i className="
            bi bi-rocket-takeoff-fill col-2 m-auto d-flex justify-content-center align-items-center
            "><span>Entrega rápida</span>
            </i>
            <i className="
            bi bi-clock-history col-2 m-auto d-flex justify-content-center align-items-center
            "><span>Suporte 24/7</span>
            </i>
            <i className="
            bi bi-cash col-2 m-auto d-flex justify-content-center align-items-center
            "><span>Pagamentos seguros</span>
            </i>
            <i className="
            bi bi-trophy-fill col-2 m-auto d-flex justify-content-center align-items-center
            "><span>Campeões de venda</span>
            </i>
            <i className="
            bi bi-gift-fill col-2 m-auto d-flex justify-content-center align-items-center
            "><span>Cupons especiais</span>
            </i>
        </div>
    </div>
  )
}

export default QualitiesString
