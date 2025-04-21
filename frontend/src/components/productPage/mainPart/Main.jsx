import React from 'react'
import Images from './Images'

import './main.css'
import ProductInfo from './ProductInfo'
import SimilarProducts from '../otherProducts/SimilarProducts'
import Description from '../details/Description'
import Details from '../details/Details'
import Overall from '../reviews/Overall'
import MoreProducts from '../otherProducts/MoreProducts'

const Main = ({Product}) => {
  return (
    <>
        <main className="main-product d-flex w-100">
            <Images Product={Product}/>
            <ProductInfo Product={Product}/>
        </main>
        <section id='similarProducts'>
          <SimilarProducts Snake={Product}/>
        </section>
        <section id='description'>
          <Description Product={Product}/>
          <Details Product={Product}/>
        </section>
        <Overall Product={Product}/>
        <MoreProducts Snake={Product}/>
    </>
  )
}

export default Main
