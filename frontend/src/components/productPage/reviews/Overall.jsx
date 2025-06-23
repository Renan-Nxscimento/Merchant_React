import { createContext, useState } from 'react'
import RatingOverall from './RatingOverall'

import './overall.css'
import Review from './Review'

export const FilterReviewContext = createContext()

const Overall = ({selectedProduct}) => {
  const [filter, setFilter] = useState()

  return (
    <section id='reviews' className='d-flex flex-column w-100'>
      <h3>Avaliações</h3>
      <FilterReviewContext.Provider value={{filter, setFilter}}>
        <RatingOverall selectedProduct={selectedProduct}/>
        <Review selectedProduct={selectedProduct}/>
      </FilterReviewContext.Provider>
      <div className="slash"></div>
    </section>
  )
}

export default Overall
