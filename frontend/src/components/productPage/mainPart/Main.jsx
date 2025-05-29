import React from 'react'
import Images from './Images'

import './main.css'
import ProductInfo from './ProductInfo'
import SimilarProducts from '../otherProducts/SimilarProducts'
import Description from '../details/Description'
import Details from '../details/Details'
import Overall from '../reviews/Overall'
import MoreProducts from '../otherProducts/MoreProducts'

const Main = ({selectedProduct}) => {
  return (
    <>
        <main className="main-product d-flex w-100">
            <Images selectedProduct={selectedProduct}/>
            <ProductInfo selectedProduct={selectedProduct}/>
        </main>
        <section id='similarProducts'>
          <SimilarProducts thisProducts={selectedProduct}/>
        </section>
        <section id='description'>
          <Description selectedProduct={selectedProduct}/>
          <Details selectedProduct={selectedProduct}/>
        </section>
        <Overall selectedProduct={selectedProduct}/>
        <MoreProducts thisProducts={selectedProduct}/>
    </>
  )
}

export default Main
