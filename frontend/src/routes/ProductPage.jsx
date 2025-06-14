import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Fullscreen from '../components/productPage/mainPart/Fullscreen'
import Main from '../components/productPage/mainPart/Main';
import fetchApi from '../axios/config';

export const ImagesCounterContext = createContext()
export const FullscreenContext = createContext()

const ProductPage = () => {

  const [imageCounter, setImageCounter] = useState(1)

  const [fullscreen, setFullscreen] = useState(false)
    
  const [selectedProduct, setSelectedProduct] = useState()

  const [products, setProducts] = useState([])
  const {id} = useParams();
        
        useEffect(() => {
            const loadProducts = async () => {
            const res = await fetchApi.get(`/products`)

            setProducts(res.data)

            const locate = res.data.find(product => String(product._id) === id)
            setSelectedProduct(locate)
            }

          loadProducts()
        }, [])
      
      if (!selectedProduct) {
        return <p className='loading'>Carregando...</p>
      } 

  return (
    <ImagesCounterContext.Provider value ={{imageCounter, setImageCounter}}>
      {selectedProduct ? (  
        <FullscreenContext.Provider value ={{fullscreen, setFullscreen}}>
          <Main 
          selectedProduct={selectedProduct}  
          />
          <Fullscreen 
          selectedProduct={selectedProduct}
          />
        </FullscreenContext.Provider>
      ) : (
        <p>Loading...</p>
      )}
    </ImagesCounterContext.Provider>
  );
};

export default ProductPage
