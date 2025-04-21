import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../stars/Stars'

import './featuredProduct.css'

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
        
                const fetchData = () => {
                    fetch('http://localhost:4000/products')
                    .then(res => res.json())
                    .then(data => {
                      setProducts(data)
                    })
                    .catch(e => console.log(e.message))
                  }
                
                  useEffect(() => {
                    fetchData()
                  }, [])

    function cutString(str, length) {
        return str.slice(0, length)
    }

    function realPrice(price, discount) {
        let discounted = Math.floor((discount * price ) / 100 ).toFixed(2)
        return price - discounted
    }

  return (
    <section id='featuredProducts' className='d-flex flex-column w-100 align-items-center'>
        <h4 className="big-text">Produtos destaque</h4>
        <div className="featured-products-container d-flex justify-content-center">
        {
            products.map(product => (
                product.featured ? (
                <Link key={product._id} to={`/product/${product._id}`}>
                    <div className="featured-product d-flex h-100">
                        <div className="f-product-img">
                            <img src={product.images[0].src} alt="" />
                        </div>
                        <div className="f-product-content d-flex flex-column">
                            <Stars product={product}/>
                            <span className='f-product-name'>{product.name}</span>
                            {
                            product.description.length > 300 ? (
                                <p className='f-product-description'>
                                    {cutString(product.description, 250)}
                                    <a className='primary'>...Ver mais</a>
                                </p>
                            ) : <p className='f-product-description'>{product.description}</p>
                            }
                            <div className="f-product-prices d-flex">
                            {
                                product.offer ? (    
                                    <span className="featured-price">
                                        R${realPrice(product.price, product.offer).toFixed(2).replace('.', ',')}
                                    </span>
                                ) 
                                : 
                                (
                                    <span className="featured-price">
                                        R${product.price.toFixed(2).replace('.', ',')}
                                    </span>
                                ) 
                            }
                            {
                                product.offer  &&
                                 product.offer !== "" ? (          
                                        <span className="featured-original-price">
                                            {product.price.toFixed(2).replace('.', ',')}
                                        </span>
                                ) 
                                : null
                            }
                            </div>
                            <div className="f-product-options d-flex">
                                <i className="bi bi-bag-fill d-flex align-items-center justify-content-center"></i>
                                <i className="bi bi-heart d-flex align-items-center justify-content-center"></i>
                                <i className="bi bi-share-fill d-flex align-items-center justify-content-center"></i>
                            </div>
                        </div>
                    </div>
                </Link>
                ) : null
            ))
        }
        </div>
    </section>
  )
}

export default FeaturedProducts
