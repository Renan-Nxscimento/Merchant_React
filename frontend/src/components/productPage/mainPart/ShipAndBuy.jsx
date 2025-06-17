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
  const [cartItems, setCartItems] = useState([])

  const [favItems, setFavItems] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  const [isPasted, setIsPasted] = useState(false)

  const raiseQuantity = () => {
    setQuantityNumber(quantityNumber + 1)
  }

  const lowerQuantity = () => {
    if (quantityNumber > 1) {
      setQuantityNumber(quantityNumber - 1)
    }
  }

  const isEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }

//Adicionar ao carrinho
  let itemToCart = {
    productname,
    quantitynumber: quantityNumber,
    variation
  }

    const checkCart = () => {
      cartItems.find(item => 
      item.productname === selectedProduct.name && item.variation === variation
      ) ? setIsOnCart(true) : setIsOnCart(false)
    }

    const addToCart = () => {
      if (currentUser) {
        if (!currentUser.cart) {
          currentUser.cart = []
        }
        if (itemToCart)
        currentUser.cart.push(itemToCart)
        setCartItems(currentUser.cart)
      
        updateUser(currentUser)
      }
    }

//Favoritos
    const checkFavorites = () => {
        const isFav = favItems.some(item => 
        item.productname === selectedProduct.name
      )
      setIsFavorite(isFav)
    }

    const addToFavorites = () => {
      if (currentUser) {
        const favItem = {
          productname: selectedProduct.name
        }
        if (!currentUser.favorite_products) {
          currentUser.favorite_products([])
        }
        currentUser.favorite_products.push(favItem)
        setFavItems(currentUser.favorite_products)

      }
      updateUser(currentUser)
      setIsFavorite(true)
    }

    const removeFromFavorites = (name) => {
      let newFavs = favItems    
      let itemIndex = favItems.findIndex(item =>
          item.productname === name
      )
      setFavItems(newFavs.splice(itemIndex, 1))
      setIsFavorite(false)
      updateUser(currentUser)
    }

    const updateUser = async (usr) => {

        try {
          if(!isEqual(usr.favorite_products, thisUser.favorite_products)) {
            const res = await fetchApi.put(`/users/${thisUser._id}`, usr)

            if(res.status === 200) {
                console.log('Produto favoritado')
            }
          }
          if(!isEqual(usr.cart, thisUser.cart)) {
            const res = await fetchApi.put(`/users/${thisUser._id}`, usr)

            if(res.status === 200) {
                console.log('Produto Adicionado')
                setIsOnCart(true)
            }
          }

            
        } catch (error) {
            console.log(error.response.data.msg, 'error')
        }
    }

//Copiar Link
    const shareProduct = () => {
      const url = window.location.href
      navigator.clipboard.writeText(url)
      setIsPasted(true)
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
          checkCart()
          checkFavorites()
        }, [thisUser])

        useEffect(() => {
          if(currentUser) {
            setCartItems(currentUser.cart)
              setFavItems(currentUser.favorite_products)
            

            checkCart()
            checkFavorites()
        }
        }, [currentUser, selectedProduct, variation, cartItems, favItems])

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
        <button 
        className="share-product d-flex h-100 align-items-center justify-content-center"
        onClick={shareProduct}
        >
          {
            isPasted ? (
              <span className='text-success'>Link copiado!</span>
            ) : (
            <>
              <i className="bi bi-share-fill"></i>
              <span>Compartilhar</span>
            </>
            )
          }
        </button>
        <button 
        className="fav-product d-flex h-100 align-items-center justify-content-center"
        onClick={() => {
          if(isFavorite) {
            removeFromFavorites(selectedProduct.name) 
           } else {  
            addToFavorites()
          }}
        }
        >
            <i className={`${isFavorite? "bi bi-heart-fill" : "bi bi-heart"}`}></i>
            <span>{`${isFavorite? "Favoritado" : "Favoritar"}`}</span>
        </button>
      </div>
    </div>
  )
}

export default ShipAndBuy
