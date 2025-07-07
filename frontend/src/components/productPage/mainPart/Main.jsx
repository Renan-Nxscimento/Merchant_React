import { createContext, useState } from 'react'
import Images from './Images'

import './main.css'
import ProductInfo from './ProductInfo'
import SimilarProducts from '../otherProducts/SimilarProducts'
import Description from '../details/Description'
import Details from '../details/Details'
import Overall from '../reviews/Overall'
import MoreProducts from '../otherProducts/MoreProducts'

export const OverallContext = createContext()

const Main = ({refreshMainImago, selectedProduct}) => {
  const [overall, setOverall] = useState()
  
  return (
    <OverallContext.Provider value={{overall, setOverall}}>
        <main className="main-product d-flex w-100">
          <Images refreshMainImago={refreshMainImago} selectedProduct={selectedProduct}/>
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
        <MoreProducts/>
    </OverallContext.Provider>
  )
}

export default Main