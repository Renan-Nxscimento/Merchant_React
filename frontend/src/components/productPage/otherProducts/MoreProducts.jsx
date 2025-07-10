import { useEffect, useState } from 'react'
import Product from '../../product/Product'
import fetchApi from '../../../axios/config'
import { Link } from 'react-router-dom'

const MoreProducts = () => {
  const [products, setProducts] = useState([])
          
      useEffect(() => {
          const loadProducts = async () => {
          const res = await fetchApi.get('/products')

          setProducts(res.data)
          }

        loadProducts()
      }, [])

  return (
    <section id='moreProducts' className='d-flex flex-column'>
      <h3>Mais produtos</h3>
      <div className="more-products-container d-flex flex-wrap justify-content-center">
        {products.slice(0, 16)
            .map(product => (
                      <Link key={product._id} to={`/product/${product._id}`}>
                        <Product product={product}/>
                      </Link>
                     )
                )}
      </div>
    </section>
  )
}

export default MoreProducts
