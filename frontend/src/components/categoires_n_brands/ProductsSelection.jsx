import { useContext, useEffect, useState } from 'react'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
import QualitiesString from '../home/QualitiesString'
import FeaturedProducts from '../home/FeaturedProducts'
import './productSelection.css'
import fetchApi from '../../axios/config'
import { UserContext } from '../../App'

const ProductsSelection = ({selection}) => {
    const [products, setProducts] = useState([])
    const [selectionCounter, setSelectionCounter] = useState(2)
    const [isFavorites, setIsFavorites] = useState(false)
    const [favoriteProducts, setFavoriteProducts] = useState([])
    const {thisUser} = useContext(UserContext)

    const checkIsFavorites = () => {
        if (selection === "Favoritos") {
            setIsFavorites(true)
        }
    }

      useEffect(() => {
        const loadProducts = async () => {
        try {
            const productsres = await fetchApi.get('/products')
            const usersres = await fetchApi.get('./users')
            
            if (isFavorites) {
                const thisId = thisUser._id
                const userLocated = usersres.data.find(user =>
                user._id === thisId
                )
                setFavoriteProducts(userLocated.favorite_products)
                console.log('User located')
            } else {
                setProducts(productsres.data)
            }
        }
        catch(error) {
            console.log(error)
        }
        }

        checkIsFavorites()
        loadProducts()
      }, [thisUser, products, isFavorites])

  const handleSelection = (num) => {
    setSelectionCounter(num);
  };

  if (products.length < 1) return <p className="loading">Carregando...</p>

  return (
    <div className="adjust-screen">
        <section id='selectionSection' className='d-flex align-items-center flex-column'>
            <h3 className="big-text">{selection}</h3>
            <div className="product-selection d-flex">
                <span className={`our-selections ${selectionCounter === 1 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(1)}}>últimos</span>
                <span className={`our-selections ${selectionCounter === 2 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(2)}}>todos</span>
                <span className={`our-selections ${selectionCounter === 3 ? 'activeTxt' : ''}`} onClick={() => {handleSelection(3)}}>ofertas</span>
            </div>
            <div className="products-container d-flex align-items-center justify-content-center">
                    {isFavorites && thisUser ? (
                        favoriteProducts.map(fav => {
                            const matchingProduct = products.find(prod => prod.name === fav.productname)
                            const isLatest = matchingProduct.latest;
                            const isOffer = matchingProduct.offer;

                            if (matchingProduct) {
                                if (selectionCounter === 1 && isLatest) {
                                    return (
                                    <Link key={matchingProduct._id} to={`/product/${matchingProduct._id}`}>
                                            <Product product={matchingProduct} />
                                    </Link>
                                    )
                                } else if (selectionCounter === 2) {
                                    return (
                                    <Link key={matchingProduct._id} to={`/product/${matchingProduct._id}`}>
                                            <Product product={matchingProduct} />
                                    </Link>
                                    )
                                } else if (selectionCounter === 3 && isOffer) {
                                    return (
                                    <Link key={matchingProduct._id} to={`/product/${matchingProduct._id}`}>
                                            <Product product={matchingProduct} />
                                    </Link>
                                    )
                                }
                            }
                        })
                    ) : 
                    products.map(product => {
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
    </div>
  )
}

export default ProductsSelection
