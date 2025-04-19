import Banner from '../components/home/Banner'
import MainCategories from '../components/home/MainCategories'
import Offer from '../components/home/Offer'
import Products from '../components/home/Products'
import './home.css'

import React from 'react'


const Home = () => {
  return (
    <>
        <Banner/>
        <MainCategories/>
        <Offer/>
        <Products/>
    </>
  )
}

export default Home
