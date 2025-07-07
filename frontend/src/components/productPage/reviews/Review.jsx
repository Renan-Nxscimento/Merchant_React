import { createContext, useContext, useState } from 'react'
import Stars from '../../stars/Stars'
import user from '../../../../public/assets/user.png'
import { FilterReviewContext } from './Overall'
import './review.css'
import AllReviews from './AllReviews'
import ReviewFullscreen from './ReviewFullscreen'

export const ReviewFullscreenContext = createContext()

const Review = ({selectedProduct}) => {
    const reviews = selectedProduct.comments
    const {filter} = useContext(FilterReviewContext)
    const [showAll, setShowAll] = useState(false)
    const [reviewFullscreen, setReviewFullscreen] = useState(false)
    const [selectedReview, setSelectedReview] = useState(null)

    const handleImageClick = (review) => {
                setSelectedReview(review)
                setReviewFullscreen(true)
            }

    const handleFilter = (review) => {
        if (filter) {
            if (filter === "Images" && review.images && review.images.length > 0) {
                return true;
            }
            if (!Number.isNaN(Number(filter)) && review.rating === Number(filter)) {
                return true;
            }
            return false
        } else {
            return true
        }
    }

    const filtredReviews = reviews.filter(handleFilter)
    const displayedReviews = filtredReviews.slice(0, 6)

  return (
    <ReviewFullscreenContext.Provider value={{reviewFullscreen, setReviewFullscreen}}>
    <div className='reviews-container d-flex w-100 flex-wrap align-items-center justify-content-center'>
        {displayedReviews.map(review => {
            const customerImage = review.customerimage

            return (
                <div key={review._id} className="review d-flex mb-auto">
                    <div className="r-user d-flex flex-column h-100">
                        <div className="r-user-image">
                            <img src={customerImage ? customerImage : user} alt="" />
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
            )
            })              
            }
            {
                filtredReviews.length > 6? (
                    <button 
                    onClick={() => setShowAll(true)}
                    className='showa-btn'
                    >
                    Mostrar mais reviews
                    </button>
                ) : null
            }
            {
                showAll ? (
                    <AllReviews moreReviews={filtredReviews} userImage={user} setShowAll={setShowAll}></AllReviews>
                ) : null
            }
    </div>
    </ReviewFullscreenContext.Provider>
  )
}

export default Review
