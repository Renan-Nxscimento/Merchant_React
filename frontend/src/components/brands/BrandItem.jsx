import React, { useEffect, useState } from 'react'
import Stars from '../stars/Stars'
import { Link } from 'react-router-dom'
import fetchApi from '../../axios/config'

import './brandItem.css'

const BrandItem = ({brand}) => {
    const [products, setProducts] = useState([])
    const [filtredProduct, setFiltredProduct] = useState(null)
        
      useEffect(() => {
          const loadProducts = async () => {
          const res = await fetchApi.get('/products')

           console.log(res.data)

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

        let generalFilter = products.filter(product => product.brand === brand.brand && product.bestseller === true)

        function finalFilter(arrs) {
          if (arrs === undefined) {
            return "No! That is NOT Solid Snake!"
          } else {
            return arrs
          }
        }

        let producto = finalFilter(generalFilter[0])

        console.log(producto)

  return (
    <div className='brand-item d-flex'>
      <div className="brand-logo d-flex col-2 align-items-center">
        <img src={brand.image} alt={brand.brand} />
      </div>
      <div className="brand-content d-flex flex-column col-10 align-items-center">
        <h3 className="big-text">{brand.brand}</h3>
        <span className="best-seller">Mais vendido:</span>
          {
            producto && producto.name !== undefined ? (
              <>
              <Link key={producto._id} to={`/product/${producto._id}`}>
              <div className="best-selling-product d-flex">
                <div className="bs-img d-flex align-items-center justify-content-center">
                  <img className='bs-img d-flex align-items-center justify-content-center' src={producto.images[0].src} alt="Carregando..." />
                </div>
                <div className="bs-content d-flex flex-column flex-wrap">
                  <Stars product={producto}/>
                  <span className="bs-name">{producto.name}</span>
                    {
                    producto.description.length > 200 ? (
                        <p className='f-product-description'>
                            {cutString(producto.description, 200)}
                            <span className='text-primary'>...Ver mais</span>
                        </p>
                    ) : <p className='f-product-description'>{producto.description}</p>
                    }
                  <div className="bs-price d-flex align-items-center">
                    {
                    producto.offer ? (    
                        <span className="featured-price">
                            R${realPrice(producto.price, producto.offer).toFixed(2).replace('.', ',')}
                        </span>
                    ) 
                    : 
                    (
                        <span className="featured-price">
                            R${producto.price.toFixed(2).replace('.', ',')}
                        </span>
                    ) 
                    }
                    {
                        producto.offer  &&
                         producto.offer !== "" ? (          
                                <span className="featured-original-price">
                                    {producto.price.toFixed(2).replace('.', ',')}
                                </span>
                        ) 
                        : null
                    }
                  </div>
                </div>
              </div>
              </Link>
              <button className="more-products-btn" onClick={() => {window.location.href=`/${producto.brand}`}}>Mais produtos</button>
            </>
            ) : null
          }
        </div>
    </div>
  )
}

export default BrandItem
