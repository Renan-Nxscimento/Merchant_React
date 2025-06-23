import { useContext } from "react"
import { FilterReviewContext } from "./Overall"
import "./review.css"
import Stars from "../../stars/Stars"

const AllReviews = ({moreReviews, userImage, setShowAll}) => {

    const {filter, setFilter} = useContext(FilterReviewContext)

    const toggleMoreReviews = () => {
      setShowAll(prevState => !prevState)
    }

  return (
    <div className='all-reviews-background d-flex flex-column align-items-center justify-content-center'>
        <div className="all-reviews-box d-flex flex-column align-items-center">
            <i 
            className="bi bi-x-square close-more-reviews text-danger"
            onClick={toggleMoreReviews}
            ></i>
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
            <div className="all-reviews-container d-flex flex-wrap justify-content-center">
              {moreReviews.map(review => (
                      <div key={review._id + review.customer} className="review d-flex mb-auto">
                          <div className="r-user d-flex flex-column h-100">
                              <div className="r-user-image">
                                  <img src={userImage} alt="" />
                              </div>
                          </div>
                          <div className="r-content d-flex flex-column w-100">
                              <div className="r-stars">
                                  <Stars product={review} />
                              </div>
                              <div className="r-variation">
                                  Versão: {review.variation}
                              </div>
                              <div className="r-text">
                                  <p>{review.text}</p>
                              </div>
                              {review.images && (
                                  <div className="r-images d-flex">
                                      {review.images.map(image => (
                                          <div key={image.order} className="r-image">
                                              <img src={image.src} alt="" />
                                          </div>
                                      ))}
                                  </div>
                              )}
                              <div className="r-end d-flex mt-auto w-100">
                                  <span>{review.customer}</span>
                                  <span>|</span>
                                  <span>{review.date}</span>
                                  <i className="bi bi-hand-thumbs-up"></i>
                              </div>
                          </div>
                      </div>
                  ))              
                  }
            </div>
        </div>
    </div>
  )
}

export default AllReviews
