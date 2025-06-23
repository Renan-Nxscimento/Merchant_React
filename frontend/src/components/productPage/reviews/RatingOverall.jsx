import { useContext, useEffect } from 'react'
import Stars from '../../stars/Stars'
import { OverallContext } from '../mainPart/Main'
import { FilterReviewContext } from './Overall'

const RatingOverall = ({selectedProduct}) => {
  const {overall} = useContext(OverallContext)
  const {setFilter} = useContext(FilterReviewContext)

  return (
    <div className='rating-grade w-100 d-flex'>
      <div className="rating-number d-flex flex-column align-items-center justify-content-center col-2">
        <span id='grade'>{overall}</span>
        <Stars product={selectedProduct}/>
      </div>
      <div className="rating-filter d-flex justify-content-between w-100 align-items-center">
        <button 
        className='filter-btn d-flex align-items-center' onClick={() => setFilter('')}>Todos</button>
        <button className='filter-btn d-flex align-items-center' onClick={() => setFilter('Images')}>
            <i className="bi bi-image"> Com mídia</i>
        </button>
        <button className='filter-btn d-flex align-items-center'onClick={() => setFilter(5)}>
          5 Estrelas
          </button>
        <button className='filter-btn d-flex align-items-center' onClick={() => setFilter(4)}>
          4 Estrelas
          </button>
        <button className='filter-btn d-flex align-items-center' onClick={() => setFilter(3)}>
          3 Estrelas
          </button>
        <button className='filter-btn d-flex align-items-center' onClick={() => setFilter(2)}>
          2 Estrelas
          </button>
        <button className='filter-btn d-flex align-items-center' onClick={() => setFilter(1)}>
          1 Estrelas
          </button>
      </div>
    </div>
  )
}

export default RatingOverall
