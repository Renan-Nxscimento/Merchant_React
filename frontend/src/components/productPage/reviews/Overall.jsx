import React from 'react'
import RatingOverall from './RatingOverall'

import './overall.css'
import Review from './Review'

const Overall = ({selectedProduct}) => {
  return (
    <section id='reviews' className='d-flex flex-column w-100'>
      <h3>Avaliações</h3>
      <RatingOverall selectedProduct={selectedProduct}/>
      <Review selectedProduct={selectedProduct}/>
      <div className="slash"></div>
    </section>
  )
}

export default Overall
