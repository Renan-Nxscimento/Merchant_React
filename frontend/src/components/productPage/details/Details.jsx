import React from 'react'

import './details.css'

const Details = ({Product}) => {
  return (
    <div className='details d-flex flex-column'>
      <h3>Detalhes</h3>
      <div className="details-table d-flex">
        <div className="specifications d-flex flex-column">
          {Product.details.map(detail => (
            detail.detail &&
              detail.detail !== "" &&
                detail.order <= 4 ? (
                  <div key={detail.detail} className='spec d-flex w-100 align-items-center'>
                    <div className="spec-name d-flex w-50 h-100 align-items-center">
                      {detail.detail}
                    </div>
                    <div className="spec-info d-flex w-50 h-100 align-items-center">
                      {detail.spec}
                    </div>
                  </div>
                ) : null
          ))}
        </div>
        <div className="specifications d-flex flex-column">
          {Product.details.map(detail => (
            detail.detail &&
              detail.detail !== "" &&
                detail.order >= 5 ? (
                  <div key={detail.detail} className='spec d-flex w-100 align-items-center'>
                    <div className="spec-name d-flex w-50 h-100 align-items-center">
                      {detail.detail}
                    </div>
                    <div className="spec-info d-flex w-50 h-100 align-items-center">
                      {detail.spec}
                    </div>
                  </div>
                ) : null
          ))}
        </div>
      </div>
      <div className="slash"></div>
    </div>
  )
}

export default Details
