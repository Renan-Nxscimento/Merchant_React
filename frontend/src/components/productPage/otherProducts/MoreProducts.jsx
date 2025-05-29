import React, { useEffect, useState } from 'react'
import Product from '../../product/Product'

const MoreProducts = ({thisProducts}) => {
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
    <section id='moreProducts' className='d-flex flex-column'>
      <h3>Mais produtos</h3>
      <div className="more-products-container">
        <Product product={thisProducts}/>
      </div>
    </section>
  )
}

export default MoreProducts
