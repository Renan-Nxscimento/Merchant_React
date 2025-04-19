import React from 'react'

const Search = () => {
  return (
    <div className='searchbar d-flex w-100 align-items-center'>
      <input type="text" name="search" id="search"/>
      <button className='search-btn'>
        <i className="bi bi-search"></i>
      </button>
    </div>
  )
}

export default Search
