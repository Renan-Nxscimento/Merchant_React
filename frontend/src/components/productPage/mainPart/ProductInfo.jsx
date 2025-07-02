import { useContext, useEffect, useRef, useState } from 'react'
import Stars from '../../stars/Stars'
import ShipAndBuy from './ShipAndBuy'
import './productInfo.css'
import { OverallContext } from './Main'

const ProductInfo = ({selectedProduct}) => {
    const discount = Math.floor((selectedProduct.offer * selectedProduct.price ) / 100 ).toFixed(2)
    const currentPrice = selectedProduct.price - discount
    const [currentVariation, setCurrentVariation] = useState()
    const [selectedVariation, setSelectedVariation] = useState()
    const {overall, setOverall} = useContext(OverallContext)

        if (!currentVariation) {
        setCurrentVariation(selectedProduct.variations[0].variation)
        }

        if (!selectedVariation) {
        setSelectedVariation(1)
        }

    const variationsSetter = (name, number) => {
        setCurrentVariation(name)
        setSelectedVariation(number)
    }

    const getOverall = (num1, num2) => {
        let result = num1 / num2
        setOverall(result.toFixed(1))
    }

    const somaReviews =  selectedProduct.comments.reduce((accumulator, comment) => {
        return accumulator + comment.rating
    }, 0)

    useEffect(() => {
        if(selectedProduct) {
          getOverall(somaReviews, selectedProduct.comments.length)

        }
    }, [selectedProduct])


  return (
    <div className='product-content d-flex w-100'>
      <div className="product-info d-flex flex-column col-7 justify-content-between">
        <div className="discount-banner d-flex w-100">
            {
                selectedProduct.offer ? (
                    <div className="discount-content w-100 h-100 d-flex justify-between">
                        <div className="save-value d-flex align-items-center">
                            <i className="bi bi-piggy-bank-fill"></i>
                            <span>Economize R${discount.replace('.', ',')}</span>
                        </div>
                    </div>
                ) : null
            }
        </div>

        <div className="info-price d-flex flex-column w-100">
            {
                selectedProduct.offer ? (    
                    <span id="currentPrice">R${currentPrice.toFixed(2).replace('.', ',')}</span>
                ) 
                : 
                (
                    <span id="currentPrice">R${selectedProduct.price.toFixed(2).replace('.', ',')}</span>
                ) 
            }
            {
                selectedProduct.offer  &&
                 selectedProduct.offer !== "" ? (    
                    <div className="discount d-flex align-items-center">
                        <span id="originalPrice">{selectedProduct.price.toFixed(2).replace('.', ',')}</span>
                        <span id="discountPercentage">{selectedProduct.offer}% OFF</span>
                    </div>
                ) 
                : null
            }
        </div>

        <div className="conditions d-flex flex-column">
            <div className="parcels d-flex w-100 align-items-center">
                <i className="bi bi-calendar2-check"></i>
                <span>Em até 12x de {parseFloat(currentPrice / 12).toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="vouchers d-flex w-100 align-items-center">
                <i className="bi bi-ticket-detailed-fill"></i>
                <span>Cupons para pedidos a partir de R$500</span>
                <i 
                className="bi bi-caret-right-fill"
                onClick={() => {window.location.href=`/vouchers`}}
                ></i>
            </div>
        </div>

        <div className="info-name w-100">
            <span>{selectedProduct.brand + " " + selectedProduct.name}</span>
        </div>

        <div className="product-rating d-flex align-items-center">
            <Stars numb={Number(overall)}/>
            <span id="ratingNumber">{overall}</span>
            <span id="reviewCount">{selectedProduct.comments.length} Reviews |</span>
            <span id="sellsCount">{selectedProduct.sales} Vendidos</span>
        </div>

        <div className="slash"></div>

        <div className="variations d-flex flex-wrap">
            <span className='w-100' id='variationSelected'>{currentVariation}</span>
        {selectedProduct.variations.map(variation => (
                variation.variation &&
                 variation.variation !== ""? (
                    <div
                    id={variation.order}
                    key={variation.variation}
                    onClick={() => variationsSetter(variation.variation, variation.order)} 
                    className={`variation d-flex align-items-center justify-content-center ${variation.order === selectedVariation ? 'variation-selected' : ''}`}>
                        <img src={selectedProduct.images[0].src} alt="" />
                    </div>) 
                : null
            ))}
        </div>

        <div className="slash"></div>
      </div>
      <ShipAndBuy 
      selectedProduct={selectedProduct} 
      variation={currentVariation} 
      productname={selectedProduct.name}
      />
    </div>
  )
}

export default ProductInfo
