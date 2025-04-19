import React, { useEffect, useState } from 'react'

const Stars = ({product}) => {

  let grade = product.rating

  if (!product.rating) {
    
  }

  const stars = Array(grade).fill(null).map((_, index) => (
    <i key={index} className="bi bi-star-fill"></i>
  ));

  return (
    <div className='stars d-flex'>
      {stars}
    </div>
  )
}

export default Stars
