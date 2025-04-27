import React from 'react'
import Stars from '../stars/Stars'

const Review = ({review}) => {
  return (
    <div className='store-review d-flex'>
      <div className="user-image h-100 d-flex">
        <img src={review.userimage} alt="" />
      </div>
      <div className="r-content d-flex flex-column w-100">
        <div className="r-top d-flex ">
            <div className="user-n-date d-flex">
                <span>{review.username}</span>
                <span>|</span>
                <span>{review.date}</span>
            </div>
        <Stars product={review}/>
        </div>
        <div className="r-text">
            <p>{review.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
