import React, { useEffect, useState } from 'react'
import fetchApi from '../../axios/config'

import './mainBrands.css'

const MainBrands = () => {
    const [brands, setBrands] = useState([])

      useEffect(() => {
          const loadBrands = async () => {
          const res = await fetchApi.get('/brands')

          setBrands(res.data)
          }

        loadBrands()
      }, [])

      if(!brands) return <p>Carregando...</p>

  return (
    <div className='main-brands w-100 d-flex flex-column align-items-center'>
        <h4 className="big-text">principais marcas</h4>
      <div className="main-brands-container d-flex w-100 h-100">
        {
            brands.map(brand => (
                <div key={brand.brand} className="brand h-100 d-flex align-items-center justify-content-center">
                    <img 
                    src={`${brand.image}`} 
                    alt={brand.brand}
                    onClick={() => {window.location.href=`/${brand.brand}`}} 
                    className={`${brand.brand == "Samsung" ? 'adjust-brand-image' : ''}`}
                    />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MainBrands
