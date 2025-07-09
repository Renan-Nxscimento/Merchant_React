import { useContext, useState } from "react"
import { FilterReviewContext } from "./Overall"
import "./review.css"
import Stars from "../../stars/Stars"
import { ReviewFullscreenContext } from "./Review"
import ReviewFullscreen from "./ReviewFullscreen"

const AllReviews = ({moreReviews, userImage, setShowAll}) => {
    const {reviewFullscreen, setReviewFullscreen} = useContext(ReviewFullscreenContext)
    const {filter, setFilter} = useContext(FilterReviewContext)
    const [selectedReview, setSelectedReview] = useState(null)

    const toggleMoreReviews = () => {
      setShowAll(prevState => !prevState)
    }

    const handleImageClick = (review) => {
        setSelectedReview(review)
        setReviewFullscreen(true)
    }

  return (
    <div className='all-reviews-background d-flex flex-column align-items-center justify-content-center'>
        <div className="all-reviews-box d-flex flex-column align-items-center">
            <i 
            className="bi bi-x-square close-more-reviews text-danger"
            onClick={toggleMoreReviews}
            ></i>
            <div className="rating-filter d-flex w-100 align-items-center">
                <button 
                className={`filter-btn d-flex align-items-center ${filter === "" ? "active-filter" : ""}`} 
                onClick={() => setFilter('')}>
                  Todos
                </button>
                <button 
                className={`filter-btn d-flex align-items-center ${filter === "Images" ? "active-filter" : ""}`}
                onClick={() => setFilter('Images')}
                >
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
                                  <Stars numb={review.rating} />
                              </div>
                              <div className="r-variation">
                                  Versão: {review.variation}
                              </div>
                              <div className="r-text">
                                  <p>{review.text}</p>
                              </div>
                              {review.images && (
                                <>
                                  <div className="r-images d-flex">
                                      {review.images.map(image => (
                                          <div 
                                          key={image.order} 
                                          className="r-image"
                                          onClick={() => handleImageClick(review)}
                                          >
                                              <img src={image.src} alt="" />
                                          </div>
                                      ))}
                                  </div>
                                  {reviewFullscreen && selectedReview === review && (
                                    <ReviewFullscreen review={review}/>
                                  )}
                                </>
                              )}
                              <div className="r-end d-flex mt-auto w-100">
                                  <span>{review.customer}</span>
                                  <span>|</span>
                                  <span>{review.date}</span>
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
