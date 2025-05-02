import React, { useEffect, useState } from 'react'
import './products.css'
import { Link, useLocation } from 'react-router-dom'

import Product from '../product/Product'

const Products = () => {
        const [products, setProducts] = useState([])
        const [selectionCounter, setSelectionCounter] = useState(2)

    
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

        const handleSelection = (num) => {
          setSelectionCounter(num);
        };

  return (
    <section id='productsSection' className='products-section d-flex flex-column align-items-center'>
      <h4 className='big-text'>Nossos produtos</h4>
      <div className="product-selection d-flex">
                <span className={`our-selections ${selectionCounter === 1 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(1)}}>últimos</span>
                <span className={`our-selections ${selectionCounter === 2 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(2)}}>todos</span>
                <span className={`our-selections ${selectionCounter === 3 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(3)}}>ofertas</span>
      </div>
      <div className="products-container d-flex align-items-center justify-content-center">
          {products.map(product => {
              const isLatest = product.latest;
              const isOffer = product.offer;
              if (selectionCounter === 1 && isLatest) {
                      return (
                          <Link key={product._id} to={`/product/${product._id}`}>
                              <Product product={product} />
                          </Link>
                      );
                      
              } else if (selectionCounter === 2) {
                      return (
                          <Link key={product._id} to={`/product/${product._id}`}>
                              <Product product={product} />
                          </Link>
                      );

              } else if (selectionCounter === 3 && isOffer) {
                      return (
                          <Link key={product._id} to={`/product/${product._id}`}>
                              <Product product={product} />
                          </Link>
                      );
              }
              return null;
          })}
      </div>
    </section>
  )
}

export default Products
