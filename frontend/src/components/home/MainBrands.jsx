import React, { useEffect, useState } from 'react'

import './mainBrands.css'

const MainBrands = () => {
    const [brands, setBrands] = useState([])

    const fetchData = () => {
                    fetch('http://localhost:4000/brands')
                    .then(res => res.json())
                    .then(data => {
                      setBrands(data)
                    })
                    .catch(e => console.log(e.message))
                  }
                
                  useEffect(() => {
                    fetchData()
                  }, [])

                  console.log(brands)

  return (
    <div className='main-brands w-100 d-flex flex-column align-items-center'>
        <h4 className="big-text">principais marcas</h4>
      <div className="main-brands-container d-flex w-100 h-100">
        {
            brands.map(brand => (
                <div key={brand.brand} className="brand h-100 d-flex align-items-center justify-content-center">
                    <img src={brand.logo} alt={brand.brand} />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MainBrands
