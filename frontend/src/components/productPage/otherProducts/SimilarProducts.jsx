import React, { useEffect, useState } from 'react'
import Product from '../../product/Product'
import { Link } from 'react-router-dom'
import './otherProduct.css'

const SimilarProducts = ({Snake}) => {
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
        <div className='similar-products d-flex flex-column'>
          <h3>Itens similares</h3>
          <div className="similar-container d-flex">
          {products.map(product => (
                    product.category &&
                     product.category === Snake.category ? (
                      <Link key={product._id} to={`/product/${product._id}`}>
                        <Product product={product}/>
                      </Link>
                     )
                    : null
                ))}
          </div>
          <div className="slash"></div>
        </div>
  )
}

export default SimilarProducts
