import React, { useEffect, useState } from 'react'

const ShippingValue = () => {
    
  return (
    <div className='shipping-container d-flex align-items-center justify-content-between w-100 p-4'>
      <div className="ship-calc d-flex flex-column">
        <span>Calcular frete:</span>
        <input type="number" name="cepNumber" id="cepNumber" />
        <button className='cep-btn' type="submit">Calcular</button>
      </div>

      <div className="ship-value-n-place d-flex flex-column align-items-center">
        <span>invisible</span>
        <span className="ship-value">Valor do frete: invisible</span>
      </div>

      <div className="total-value d-flex flex-column h-100 justify-content-between">
        <span>Produtos: 3</span>
        <span>Frete: R$26,00</span>
        <span className="total d-flex align-items-center">Total: R$</span>
        <button className='finish-btn'>Finalizar compra</button>
      </div>
    </div>
  )
}

export default ShippingValue
