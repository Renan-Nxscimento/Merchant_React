import { useEffect, useState } from 'react'
import Stars from '../stars/Stars'
import fetchApi from '../../axios/config'
import './featuredProduct.css'

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])

    function cutString(str, length) {
        return str.slice(0, length)
    }

    function realPrice(price, discount) {
        let discounted = ((discount * price ) / 100 ).toFixed(2)
        return price - discounted
    }

    useEffect(() => {
          const loadProducts = async () => {
          const res = await fetchApi.get('/products')

          setProducts(res.data)
          }

        loadProducts()
      }, [])

    if(!products) return <p className='loading'>Carregando...</p>

  return (
    <section id='featuredProducts' className='d-flex flex-column w-100 align-items-center'>
        <h4 className="big-text">Produtos destaque</h4>
        <div className="featured-products-container d-flex justify-content-between">
            {
            products.map(product => {

                const somaReviews =  product.comments.reduce((accumulator, comment) => {
                return accumulator + comment.rating
                }, 0)

                let overallNumber = 0

                const getOverall = (num1, num2) => {
                let result = num1 / num2
                overallNumber = result.toFixed(1)
            }

                if(product.featured) {
                    getOverall(somaReviews, product.comments.length)

                    return (
                    <div key={product._id} className="featured-product d-flex h-100">
                        <div 
                        className="f-product-img"
                        onClick={() => { window.location.href = `/product/${product._id}` }}
                        >
                            <img src={product.images[0].src} alt="" />
                        </div>
                        <div className="f-product-content d-flex flex-column">
                            <Stars numb={Number(overallNumber)}/>
                            <span 
                            className='f-product-name' 
                            onClick={() => { window.location.href = `/product/${product._id}` }}
                            >
                                {product.name}
                            </span>
                            {
                            product.description.length > 300 ? (
                                <p className='f-product-description'>
                                    {cutString(product.description, 150)}
                                    <span 
                                    className='text-primary'
                                    onClick={() => { window.location.href = `/product/${product._id}` }}
                                    >
                                        ...Ver mais
                                    </span>
                                </p>
                            ) : <p className='f-product-description'>{product.description}</p>
                            }
                            <div className="f-product-prices d-flex">
                            {
                                product.offer ? (    
                                    <span 
                                    className="featured-price" 
                                    onClick={() => { window.location.href = `/product/${product._id}` }}
                                    >
                                        R${realPrice(product.price, product.offer).toFixed(2).replace('.', ',')}
                                    </span>
                                ) 
                                : 
                                (
                                    <span 
                                    className="featured-price" 
                                    onClick={() => { window.location.href = `/product/${product._id}` }}
                                    >
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
                )
            }
            })
            }
        </div>
    </section>
  )
}

export default FeaturedProducts
