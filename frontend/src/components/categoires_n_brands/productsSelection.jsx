import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
import QualitiesString from '../home/QualitiesString'
import FeaturedProducts from '../home/FeaturedProducts'
import './productSelection.css'
const ProductsSelection = ({selection}) => {
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
    <>
        <section id='selectionSection' className='d-flex align-items-center flex-column'>
            <h3 className="big-text">{selection}</h3>
            <div className="product-selection d-flex">
                <span className={`our-selections ${selectionCounter === 1 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(1)}}>últimos</span>
                <span className={`our-selections ${selectionCounter === 2 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(2)}}>todos</span>
                <span className={`our-selections ${selectionCounter === 3 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(3)}}>ofertas</span>
            </div>
            <div className="products-container d-flex align-items-center justify-content-center">
                    {products.map(product => {
                        const isCategoryMatch = product.category === selection;
                        const isBrandMatch = product.brand === selection;
                        const isLatest = product.latest;
                        const isOffer = product.offer;

                        if (selectionCounter === 1 && isLatest) {
                            if (isCategoryMatch || isBrandMatch) {
                                return (
                                    <Link key={product._id} to={`/product/${product._id}`}>
                                        <Product product={product} />
                                    </Link>
                                );
                            }
                        } else if (selectionCounter === 2) {
                            if (isCategoryMatch || isBrandMatch) {
                                return (
                                    <Link key={product._id} to={`/product/${product._id}`}>
                                        <Product product={product} />
                                    </Link>
                                );
                            }
                        } else if (selectionCounter === 3 && isOffer) {
                            if (isCategoryMatch || isBrandMatch) {
                                return (
                                    <Link key={product._id} to={`/product/${product._id}`}>
                                        <Product product={product} />
                                    </Link>
                                );
                            }
                        }
                        return null;
                    })}
                </div>
        </section>
        <QualitiesString/>
        <FeaturedProducts/>
    </>
  )
}

export default ProductsSelection
