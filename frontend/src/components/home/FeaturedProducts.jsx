import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../stars/Stars'
import fetchApi from '../../axios/config'
import './featuredProduct.css'

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
        
      useEffect(() => {
          const loadProducts = async () => {
          const res = await fetchApi.get('/products')

          setProducts(res.data)
          }

        loadProducts()
      }, [])

      if(!products) return <p>Carregando...</p>

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
        <div className="featured-products-container d-flex justify-content-between">
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
                                    {cutString(product.description, 150)}
                                    <span className='text-primary'>...Ver mais</span>
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
