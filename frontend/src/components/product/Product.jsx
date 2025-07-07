import { useEffect, useState } from 'react'
import Stars from '../stars/Stars'

const Product = ({product}) => {
 const image = product.images[0].src

 const [thisOverall, setThisOverall] = useState(0)

 const [thisProductNumber, setThisProductNumber] = useState(0)

 const discount = ((product.offer * product.price ) / 100 ).toFixed(2)
  const currentPrice = product.price - discount

 
 const getOverall = (num1, num2) => {
         let result = num1 / num2
         setThisOverall(result.toFixed(1))
     }
 
     const somaReviews =  product.comments.reduce((accumulator, comment) => {
         return accumulator + comment.rating
     }, 0)
 
     useEffect(() => {
         if(product) {
           getOverall(somaReviews, product.comments.length)
         }
     }, [product])

     useEffect(() => {
        if (thisOverall !== undefined) {
            setThisProductNumber(Number(thisOverall));
        }
    }, [thisOverall])

  return (
    
    <div className='product d-flex flex-column align-items-center'>
      <div className="prod-bg d-flex justify-content-center">
        <img src={image} alt="" />
      </div>
      {
        thisProductNumber > 0? (
          <Stars numb={thisProductNumber}/>
        ) : (
          <Stars numb={product.rating}/>
        )
      }
      <div className="product-name flex-wrap justify-content-center text-center">
        <span>{product.brand} {product.name}</span>
      </div>
      <div className="product-price">
        {
          product.offer ? (
            <span>R${currentPrice.toFixed(2).replace('.', ',')}</span>
          ) : (
            <span>R${product.price.toFixed(2).replace('.', ',')}</span>
          )
        }
      </div>
    </div>
  )
}

export default Product