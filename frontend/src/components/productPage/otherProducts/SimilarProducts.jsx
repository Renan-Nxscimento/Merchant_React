import React, { useEffect, useState } from 'react'
import Product from '../../product/Product'
import { Link } from 'react-router-dom'
import './otherProduct.css'
import fetchApi from '../../../axios/config'

const SimilarProducts = ({thisProducts}) => {
    const [products, setProducts] = useState([])
        
        useEffect(() => {
            const loadProducts = async () => {
            const res = await fetchApi.get(`/products`)

            setProducts(res.data)
            }

          loadProducts()
        }, [])

  return (
        <div className='similar-products d-flex flex-column'>
          <h3>Itens similares</h3>
          <div className="similar-container d-flex">
          {products.map(product => (
                    product.category &&
                     product.category === thisProducts.category ? (
                      <Link key={product._id} onClick={() => {window.location.href=`/product/${product._id}`}}>
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
