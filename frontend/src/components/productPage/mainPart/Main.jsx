import React from 'react'
import Images from './Images'

import './main.css'
import ProductInfo from './ProductInfo'
import SimilarProducts from '../otherProducts/SimilarProducts'
import Description from '../details/Description'
import Details from '../details/Details'
import Overall from '../reviews/Overall'

const Main = ({Product}) => {
  return (
    <>
        <div className="main-product d-flex w-100">
            <Images Product={Product}/>
            <ProductInfo Product={Product}/>
        </div>
        <SimilarProducts Snake={Product}/>
        <Description Product={Product}/>
        <Details Product={Product}/>
        <Overall Product={Product}/>
    </>
  )
}

export default Main
