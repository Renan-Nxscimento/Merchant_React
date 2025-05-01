import Banner from '../components/home/Banner'
import FeaturedCategories from '../components/home/FeaturedCategories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import MainBrands from '../components/home/MainBrands'
import MainCategories from '../components/home/MainCategories'
import Offer from '../components/home/Offer'
import Products from '../components/home/Products'
import QualitiesString from '../components/home/QualitiesString'
import './home.css'

import React from 'react'

const Home = () => {
  
  return (
    <>
        <Banner/>
        <MainCategories/>
        <Offer/>
        <Products/>
        <FeaturedCategories/>
        <QualitiesString/>
        <FeaturedProducts/>
        <MainBrands/>
    </>
  )
}

export default Home
