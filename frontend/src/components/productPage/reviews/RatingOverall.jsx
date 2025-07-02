import { useContext } from 'react'
import Stars from '../../stars/Stars'
import { OverallContext } from '../mainPart/Main'
import { FilterReviewContext } from './Overall'

const RatingOverall = ({selectedProduct}) => {
  const {overall} = useContext(OverallContext)
  const {filter, setFilter} = useContext(FilterReviewContext)

  return (
    <div className='rating-grade w-100 d-flex'>
      <div className="rating-number d-flex flex-column align-items-center justify-content-center col-2">
        <span id='grade'>{overall}</span>
        <Stars numb={Number(overall)}/>
      </div>
      <div className="rating-filter d-flex justify-content-between w-100 align-items-center">
        <button 
        className={`filter-btn d-flex align-items-center ${filter === "" ? "active-filter" : ""}`} 
        onClick={() => setFilter('')}
        >
          Todos
        </button>
        
        <button 
        className={`filter-btn d-flex align-items-center ${filter === "Images" ? "active-filter" : ""}`} 
        onClick={() => setFilter('Images')}>
            <i className="bi bi-image"> Com mídia</i>
        </button>

        <button 
        className={`filter-btn d-flex align-items-center ${filter === 5 ? "active-filter" : ""}`}
        onClick={() => setFilter(5)}
        >
          5 Estrelas
        </button>

        <button 
        className={`filter-btn d-flex align-items-center ${filter === 4 ? "active-filter" : ""}`} 
        onClick={() => setFilter(4)}
        >
          4 Estrelas
        </button>

        <button 
        className={`filter-btn d-flex align-items-center ${filter === 3 ? "active-filter" : ""}`} 
        onClick={() => setFilter(3)}
        >
          3 Estrelas
        </button>

        <button 
        className={`filter-btn d-flex align-items-center ${filter === 2 ? "active-filter" : ""}`} 
        onClick={() => setFilter(2)}
        >
          2 Estrelas
        </button>

        <button 
        className={`filter-btn d-flex align-items-center ${filter === 1 ? "active-filter" : ""}`} 
        onClick={() => setFilter(1)}
        >
          1 Estrelas
        </button>
      </div>
    </div>
  )
}

export default RatingOverall
