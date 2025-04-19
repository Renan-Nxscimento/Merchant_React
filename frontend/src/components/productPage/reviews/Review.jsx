import React from 'react'
import Stars from '../../stars/Stars'


const Review = ({Product}) => {
    const reviews = Product.comments

  return (
    <>
        {reviews.map(review => (
                review.rating &&
                 review.rating !== ""? (
                    <div className="review d-flex w-45">
                        <div className="r-user d-flex flex-column h-100">
                            <img src="" alt="" />
                        </div>
                        <div className="r-content">
                            <div className="r-stars">
                                <Stars product={review.rating}/>
                            </div>
                            <div className="r-variation">
                                Versão: {review.variation}
                            </div>
                        </div>
                        <div className="r-text">
                            <p>{review.text}</p>
                        </div>
                        {
                            review.images ? (
                                <div className="r-images d-flex">
                                    {review.images.map(image => {
                                        <div key={image.src} className="r-image">
                                            <img src={image.src} alt="" />
                                        </div>
                                    })}
                                </div>
                            ) : null
                        }
                    </div>
                    ) 
                : null
            ))}
    </>
  )
}

export default Review
