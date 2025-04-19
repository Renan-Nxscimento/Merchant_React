import React from 'react'
import RatingOverall from './RatingOverall'

import './overall.css'
import Review from './Review'

const Overall = ({Product}) => {
  return (
    <section className='reviews d-flex flex-column w-100'>
      <h3>Avaliações</h3>
      <RatingOverall Product={Product}/>
      <Review Product={Product}/>
    </section>
  )
}

export default Overall
