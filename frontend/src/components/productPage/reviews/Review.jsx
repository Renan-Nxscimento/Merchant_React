import React from 'react'
import Stars from '../../stars/Stars'

import './review.css'

import user from '../../../../public/assets/user.png'


const Review = ({Product}) => {
    const reviews = Product.comments

  return (
    <div className='reviews-container d-flex w-100 flex-wrap align-items-center justify-content-center'>
        {reviews.map(review => (
                review.rating &&
                 review.rating !== ""? (
                    <div key={review._id} className="review d-flex mb-auto">
                        <div className="r-user d-flex flex-column h-100">
                            <div className="r-user-image">
                                <img src={user} alt=""/>
                            </div>
                        </div>
                        <div className="r-content d-flex flex-column w-100">
                            <div className="r-stars">
                                <Stars product={review.rating}/>
                            </div>
                            <div className="r-variation">
                                Versão: {review.variation}
                            </div>

                            <div className="r-text">
                                <p>{review.text}</p>
                            </div>
                            {
                                review.images ? (
                                    <div className="r-images d-flex">
                                        {review.images.map(image => (
                                            <div key={image.order} className="r-image">
                                                <img src={image.src} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                ) : null
                            }
                            <div className="r-end d-flex mt-auto w-100">
                                <span>{review.customer}</span>
                                <span>|</span>
                                <span>{review.date}</span>
                                <i className="bi bi-hand-thumbs-up"></i>
                            </div>
                        </div>
                    </div>
                    ) 
                : null
            ))}
    </div>
  )
}

export default Review
