import { useEffect, useState } from "react"

const Search = () => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filtredProducts, setFiltredProducts] = useState([])

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e) =>  {
    e.preventDefault()
    onSearch(query)
  }

  useEffect(() => {
    
  })

  return (
    <div className='searchbar d-flex w-100 align-items-center'>
      <input type="text" name="search" id="search"/>
      <button className='search-btn'>
        <i className="bi bi-search"></i>
      </button>
      <ul>

      </ul>
    </div>
  )
}

export default Search
