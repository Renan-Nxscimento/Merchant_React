import { createContext, useState } from 'react'
import ShippingValue from '../components/cart/ShippingValue'

import './cart.css'
import QualitiesString from '../components/home/QualitiesString'
import CartProducts from '../components/cart/CartProducts'

export const ValuesContext = createContext()

const Cart = () => {
  const [values, setValues] = useState()
  const [shipping, setShipping] = useState(0)
  const [cartItems, setCartItems] = useState([])

  return (
    <div className='ocelot'>
        <section id='cartSection' className='d-flex flex-column align-items-center'>
            <h3 className="big-text">carrinho</h3>
            <ValuesContext.Provider value={{values, setValues, shipping, setShipping, cartItems, setCartItems}}>
              <CartProducts/>
              <ShippingValue/>
            </ValuesContext.Provider>
        </section>
        <QualitiesString/>
    </div>
  )
}

export default Cart
