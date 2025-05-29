import React, { useState } from 'react'

import './shipAndBuy.css'

const ShipAndBuy = ({selectedProduct}) => {
  const [quantityNumber, setQuantityNumber] = useState(1)

  const raiseQuantity = () => {
    setQuantityNumber(quantityNumber + 1)
  }

  const lowerQuantity = () => {
    if (quantityNumber > 1) {
      setQuantityNumber(quantityNumber - 1)
    }
  }


  return (
    <div className='buy-product d-flex flex-column h-100 justify-content-between col-5'>
      <div className="product-seller d-flex align-items-center justify-content-between">
        <span>Vendido por:</span>
        <div className="seller-name d-flex">
            <span>{selectedProduct.seller}</span>
        </div>
      </div>

      <div className="slash"></div>

      <div className="ship-to d-flex align-items-center justify-content-between">
        <span>Enviar para:</span>
        <div className="ship-location d-flex">
            <i className="bi bi-pin-map-fill d-flex align-items-center"></i>
            <span>Motherbase, Atlantic</span>
        </div>
      </div>

      <div className="ship-info d-flex">
        <i className="bi bi-airplane-fill"></i>
        <span>Frete:</span>
      </div>

      <div className="safety d-flex flex-column">
        <i className="bi bi-shield-shaded">
            <span>Segurança e privacidade</span>
        </i>
        <span className="faded">
            Pagamentos e dados pessoais seguros.
        </span>
      </div>

      <div className="slash"></div>

      <div className="product-quantity d-flex flex-column">
        <div className="quantity-text">
            <span>Quantidade: </span>
        </div>
        <div className="quantity-buttons d-flex">
            <button className="quantity-btn" id='qMinus' onClick={lowerQuantity}>-</button>
            <span id='quantityNumber'>{quantityNumber}</span>
            <button className="quantity-btn" id='qPlus' onClick={raiseQuantity}>+</button>
        </div>
      </div>

      <div className="buy-btn">
        <button className='w-100 h-100'>Comprar agora</button>
      </div>

      <div className="cart-btn">
        <button className="w-100 h-100">Adicionar ao carrinho</button>
      </div>

      <div className="options d-flex">
        <div className="share-product d-flex h-100 align-items-center justify-content-center">
            <i className="bi bi-share-fill"></i>
            <span>Compartilhar</span>
        </div>
        <div className="fav-product d-flex h-100 align-items-center justify-content-center">
            <i className="bi bi-heart"></i>
            <span>Favoritar</span>
        </div>
      </div>
    </div>
  )
}

export default ShipAndBuy
