import { useEffect, useState } from "react"
import fetchApi from '../../axios/config'
import { Link } from "react-router-dom"

const Search = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filtredProducts, setFiltredProducts] = useState([])

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

    useEffect(() => {
      const loadProducts = async () => {
      const res = await fetchApi.get('/products')

      setProducts(res.data)
      }

      loadProducts()
      }, [])

      useEffect(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFiltredProducts(results)
      }, [searchQuery, products])

  return (
    <div className='searchbar d-flex w-100 align-items-center'>
      <input 
      type="text" 
      name="search" 
      id="search"
      value={searchQuery}
      onChange={handleInputChange}
      />
      <button className='search-btn'>
        <i className="bi bi-search"></i>
      </button>
      <ul className={`search-results ${searchQuery && filtredProducts.length > 0 ? "" : 'hidden'}`}>
        {
          filtredProducts && searchQuery ? 
          filtredProducts.map(result => 
            <>
              <li className="d-flex result align-items-center">
                <Link 
                className="w-100"
                onClick={() => setSearchQuery('')}
                to={`/product/${result._id}`}
                >
                  <img src={result.images[0].src} alt="" />
                  <span>{result.name}</span>
                </Link>
              </li>
              <div className="slash"></div>
            </>
          ) : null
        }
      </ul>
    </div>
  )
}

export default Search
