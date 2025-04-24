import React, { useEffect, useState } from 'react'
import BrandItem from '../components/brands/BrandItem'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'

import '../components/brands/brandItem.css'

const Brands = () => {
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
