import React, { useEffect, useState } from 'react'
import './products.css'
import { Link } from 'react-router-dom'

import Product from '../product/Product'

const Products = () => {
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

  return (
    <div className='products-section d-flex flex-column align-items-center'>
      <h4 className='big-text'>Nossos produtos</h4>
      <div className="product-selection d-flex">
        <span className="our-sections" id='lastProducto'>ÚLTIMOS</span>
        <span className="our-sections activeTxt" id='allProducto'> TODOS</span>
        <span className="our-sections" id='offerProducto'> OFERTAS</span>
      </div>
      <div className="products-container d-flex align-items-center justify-content-center">
        {products &&
        products.length > 0 &&
        products.map(product => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Product product={product}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products
