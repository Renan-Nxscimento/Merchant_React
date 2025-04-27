import React, { useEffect, useState } from 'react'
import Review from '../components/storeReviews/Review'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'
import MainBrands from '../components/home/MainBrands'

import '../components/storeReviews/review.css'

const StoreReviews = () => {
    const [reviews, setReviews] = useState([])
    
            const fetchData = () => {
                fetch('http://localhost:4000/storereviews')
                .then(res => res.json())
                .then(data => {
                  setReviews(data)
                })
                .catch(e => console.log(e.message))
              }
            
              useEffect(() => {
                fetchData()
              }, [])

  return (
    <>
    <section id='storeReviews' className='d-flex align-items-center flex-column'>
        <h3 className="big-text">Feedbacks</h3>
        {
            reviews.map(review => (
                <>
                <Review key={review.id} review={review}/>
                <div className="slash"></div>
                </>
            ))
        }
    </section>
    <QualitiesString/>
    <FeaturedProducts/>
    </>
  )
}

export default StoreReviews
