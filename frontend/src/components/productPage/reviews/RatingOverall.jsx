import React from 'react'
import Stars from '../../stars/Stars'


const RatingOverall = ({selectedProduct}) => {
  return (
    <div className='rating-grade w-100 d-flex'>
      <div className="rating-number d-flex flex-column align-items-center justify-content-center col-2">
        <span id='grade'>{selectedProduct.rating.toFixed(1)}</span>
        <Stars product={selectedProduct}/>
      </div>
      <div className="rating-filter d-flex justify-content-between w-100 align-items-center">
        <button className='filter-btn d-flex align-items-center'>Todos</button>
        <button className='filter-btn d-flex align-items-center'>
            <i className="bi bi-image"> Com mídia</i>
        </button>
        <button className='filter-btn d-flex align-items-center'>5 Estrelas</button>
        <button className='filter-btn d-flex align-items-center'>4 Estrelas</button>
        <button className='filter-btn d-flex align-items-center'>3 Estrelas</button>
        <button className='filter-btn d-flex align-items-center'>2 Estrelas</button>
        <button className='filter-btn d-flex align-items-center'>1 Estrelas</button>
      </div>
    </div>
  )
}

export default RatingOverall
