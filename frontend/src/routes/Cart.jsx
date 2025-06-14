import React from 'react'
import ShippingValue from '../components/cart/ShippingValue'

import './cart.css'
import QualitiesString from '../components/home/QualitiesString'
import CartProducts from '../components/cart/CartProducts'

const Cart = () => {
  return (
    <div className='ocelot'>
        <section id='cartSection' className='d-flex flex-column align-items-center'>
            <h3 className="big-text">carrinho</h3>
            <CartProducts/>
            <ShippingValue/>
        </section>
        <QualitiesString/>
    </div>
  )
}

export default Cart
