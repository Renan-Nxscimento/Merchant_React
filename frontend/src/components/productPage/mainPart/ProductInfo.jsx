import React, { useEffect } from 'react'

import Stars from '../../stars/Stars'
import ShipAndBuy from './ShipAndBuy'

import './productInfo.css'

const ProductInfo = ({Product}) => {
    const discount = Math.floor((Product.offer * Product.price ) / 100 ).toFixed(2)
    const currentPrice = Product.price - discount

  return (
    <div className='product-content d-flex w-100'>
      <div className="product-info d-flex flex-column col-7 justify-content-between">
        <div className="discount-banner d-flex w-100">
            {
                Product.offer ? (
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
                Product.offer ? (    
                    <span id="currentPrice">R${currentPrice.toFixed(2).replace('.', ',')}</span>
                ) 
                : 
                (
                    <span id="currentPrice">R${Product.price.toFixed(2).replace('.', ',')}</span>
                ) 
            }
            {
                Product.offer  &&
                 Product.offer !== "" ? (    
                    <div className="discount d-flex align-items-center">
                        <span id="originalPrice">{Product.price.toFixed(2).replace('.', ',')}</span>
                        <span id="discountPercentage">{Product.offer}% OFF</span>
                    </div>
                ) 
                : null
            }
        </div>

        <div className="conditions d-flex flex-column">
            <div className="parcels d-flex w-100 align-items-center">
                <i className="bi bi-calendar2-check"></i>
                <span>Em até 12x de {parseFloat(currentPrice / 12).toFixed(2).replace('.', ',')}</span>
                <i className="bi bi-caret-right-fill"></i>
            </div>
            <div className="vouchers d-flex w-100 align-items-center">
                <i className="bi bi-ticket-detailed-fill"></i>
                <span>Cupons para pedidos a partir de R$500</span>
                <i className="bi bi-caret-right-fill"></i>
            </div>
        </div>

        <div className="info-name w-100">
            <span>{Product.brand + " " + Product.name}</span>
        </div>

        <div className="product-rating d-flex align-items-center">
            <Stars product={Product}/>
            <span id="ratingNumber">{Product.rating.toFixed(1)}</span>
            <span id="reviewCount">{Product.reviews} Reviews |</span>
            <span id="sellsCount">{Product.sales} Vendidos</span>
        </div>

        <div className="slash"></div>

        <div className="variations d-flex flex-wrap">
            <span className='w-100' id='variationSelected'>{Product.variations[0].variation}</span>
        {Product.variations.map(variation => (
                variation.variation &&
                 variation.variation !== ""? (
                    <div
                    id={variation.order}
                    key={variation.variation} 
                    className={`variation d-flex align-items-center justify-content-center ${variation.order === 1 ? 'variation-selected' : ''}`}>
                        <img src={Product.images[0].src} alt="" />
                    </div>) 
                : null
            ))}
        </div>

        <div className="slash"></div>
      </div>
      <ShipAndBuy Product={Product}/>
    </div>
  )
}

export default ProductInfo
