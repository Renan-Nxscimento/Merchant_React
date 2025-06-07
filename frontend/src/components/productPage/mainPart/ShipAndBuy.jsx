import { useContext, useEffect, useState } from 'react'

import './shipAndBuy.css'
import { UserContext } from '../../../App'
import fetchApi from '../../../axios/config'

const ShipAndBuy = ({selectedProduct, variation, productname}) => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const {thisUser} = useContext(UserContext)
  const [isOnCart, setIsOnCart] = useState(false)
  const [quantityNumber, setQuantityNumber] = useState(1)

  const raiseQuantity = () => {
    setQuantityNumber(quantityNumber + 1)
  }

  const lowerQuantity = () => {
    if (quantityNumber > 1) {
      setQuantityNumber(quantityNumber - 1)
    }
  }

  let itemToCart = {
    productname,
    quantityNumber,
    variation
  }

    const addToCart = () => {
      cartItems.push(itemToCart)
      console.log(thisUser)
      updateCart()
  }

    const updateCart = async () => {

        try {
            const res = await fetchApi.put(`/users/${thisUser._id}`, thisUser)

            if(res.status === 200) {
                console.log('Produto adicionado')
            }
        } catch (error) {
            console.log(error.response.data.msg, 'error')
        }
    }

            useEffect(() => {
            const loadUsers = async () => {
            const res = await fetchApi.get(`/users`)

            setUsers(res.data)

            const thisId = thisUser._id

            const userLocated = res.data.find(user =>
                user._id === thisId
            )

            if(userLocated) {
              setCurrentUser(userLocated)
            }
            }


          loadUsers()
        }, [thisUser])

        useEffect(() => {
          if(currentUser) {
            const cartItems = currentUser.cart

            const checkCart = cartItems.find(item => 
            item.productname === selectedProduct.name && item.variation === variation
            )
    
              setIsOnCart(!!checkCart)

        }
        }, [currentUser, selectedProduct, variation])

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
        {
          isOnCart? (<button className='w-100 h-100 text-success'>Adicionado ao carrinho</button>) 
          : 
          (
          <button 
          className="w-100 h-100"
          onClick={addToCart}
          >
            Adicionar ao carrinho
            <i className="bi bi-cart3"></i>
          </button>
          )
        }
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
