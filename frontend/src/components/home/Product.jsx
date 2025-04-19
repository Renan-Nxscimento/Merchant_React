import React from 'react'
import Stars from '../stars/stars'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
 const image = product.images[0].src

  return (
    
    <div className='product d-flex flex-column align-items-center'>
      <div className="prod-bg d-flex justify-content-center">
        <img src={image} alt="" />
      </div>
      <Stars product={product}/>
      <div className="product-name flex-wrap justify-content-center text-center">
        <span>{product.brand} {product.name}</span>
      </div>
      <div className="product-price">
        <span>R${product.price.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>
  )
}

export default Product
