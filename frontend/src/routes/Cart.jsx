import React from 'react'
import ShippingValue from '../components/cart/ShippingValue'

import './cart.css'
import QualitiesString from '../components/home/QualitiesString'

const Cart = () => {
  return (
    <div className='ocelot'>
        <section id='cartSection' className='d-flex flex-column align-items-center'>
            <h3 className="big-text">carrinho</h3>
            <ShippingValue/>
        </section>
        <QualitiesString/>
    </div>
  )
}

export default Cart
