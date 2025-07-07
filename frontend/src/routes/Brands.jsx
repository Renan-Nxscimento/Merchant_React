import React, { useEffect, useState } from 'react'
import BrandItem from '../components/brands/BrandItem'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'
import fetchApi from '../axios/config';

import '../components/brands/brandItem.css'

const Brands = () => {
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
    <>
        <section id='brandsSection' className='d-flex flex-column align-items-center'>
            <h3 className="big-text">principais marcas</h3>
            {
                brands.map(brand => (
                    <BrandItem key={brand.brand} brand={brand}/>
                ))
            }
        </section>
        <QualitiesString/>
        <FeaturedProducts/>
    </>
  )
}

export default Brands
