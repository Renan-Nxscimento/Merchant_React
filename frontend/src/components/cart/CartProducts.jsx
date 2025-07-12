import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import fetchApi from '../../axios/config'
import { Link } from 'react-router-dom'
import { ValuesContext } from '../../routes/Cart'

const CartProducts = () => {
    const {thisUser} = useContext(UserContext)
    const {setValues, shipping, cartItems, setCartItems} = useContext(ValuesContext)

    const [currentUser, setCurrentUser] = useState()
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])

    let somePrices = cartItems.map(item => {
        const matchingProduct = products.find(prod => prod.name === item.productname)
        if(matchingProduct) {
            return matchingProduct.price * item.quantitynumber
        } else {
            return null
        }
    }).filter(price => price !== null)

    let productsValue = 0
    for(let i = 0; i < somePrices.length; i++) {
        productsValue += somePrices[i]
    }

    const handleSommatorium = () => {
        let total = productsValue + shipping
        setValues(total.toFixed(2).replace(".", ","))
    }

    const deleteFromCart = (itemName, spec) => {
        let itemToRemove = itemName
        let newCart = cartItems    
        let itemIndex = cartItems.findIndex(item =>
            item.productname === itemToRemove && item.variation === spec
        )
        setCartItems(newCart.splice(itemIndex, 1))
        updateCart(currentUser)
    }

    const decreaseQuantity = (itemName, spec, num) => {
        let itemIndex = cartItems.findIndex(item =>
            item.productname === itemName && item.variation === spec
        )

        let newCart = [...cartItems]

        if(num > 1) {
            let newNum = num - 1

            newCart[itemIndex] = {
                ...newCart[itemIndex], quantitynumber: newNum
            }

            const updatedUser = {
                _id: currentUser._id,
                name: currentUser.name,
                nickname: currentUser.nickname,
                email: currentUser.email,
                password: currentUser.password,
                cart: newCart,
                favorite_products: currentUser.favorite_products
            }

            setCurrentUser(updatedUser)

            updateCart(updatedUser)
        }

    }

    const raiseQuantity = (itemName, spec, num) => {
        let itemIndex = cartItems.findIndex(item =>
            item.productname === itemName && item.variation === spec
        )

        let newCart = [...cartItems]

        let newNum = num + 1

        newCart[itemIndex] = {
            ...newCart[itemIndex], quantitynumber: newNum
        }

        const updatedUser = {
            _id: currentUser._id,
            name: currentUser.name,
            nickname: currentUser.nickname,
            email: currentUser.email,
            password: currentUser.password,
            cart: newCart,
            favorite_products: currentUser.favorite_products
        }

        setCurrentUser(updatedUser)

        updateCart(updatedUser)
    }
    

    const updateCart = async (currentUser) => {

        try {
            const res = await fetchApi.put(`/users/${thisUser._id}`, currentUser)

            if(res.status === 200) {
                console.log('Carrinho atualizado')
                setCartItems(currentUser.cart)
            }
        } catch (error) {
            console.log(error.response.data.msg, 'error')
        }
    }

        useEffect(() => {
            const loadApi = async () => {
                try {
                    const usersRes = await fetchApi.get(`/users`)
                    const productsRes = await fetchApi.get(`/products`)

                    setUsers(usersRes.data)
                    setProducts(productsRes.data)

                    if (thisUser) {
                        const thisId = thisUser._id
                        const userLocated = usersRes.data.find(user =>
                        user._id === thisId
                    )

                        if(userLocated) {
                          setCurrentUser(userLocated)
                          setCartItems(userLocated.cart)
                        }
                    }
                } catch (error){
                    console.error("Couldn't reach the API", error)
                }
            }


          loadApi()
        }, [thisUser, cartItems])

        useEffect(() => {
            handleSommatorium()
        },[cartItems, shipping])

        if(!thisUser) return <p className='loading'>Carregando...</p>

  return (
    <div className='cart-items-container w-100 d-flex flex-column'>
      {
      cartItems? cartItems.map(item => { 
        const matchingProduct = products.find(prod => prod.name === item.productname)
        return (
        <div 
        className="cart-item d-flex align-items-center justify-content-between" 
        key={item.productname + item.variation}
        >
            <div className="cart-item-main d-flex align-items-center">
                <div className="cart-item-img d-flex align-items-center justify-content-center">
                    <Link onClick={() => {window.location.href=`/product/${matchingProduct._id}`}}>
                        <img src={matchingProduct? matchingProduct.images[0].src : ''} alt={item.productname} />
                    </Link>
                </div>
                <div className="cart-item-info d-flex flex-column">
                    <Link onClick={() => {window.location.href=`/product/${matchingProduct._id}`}}>
                        {item.productname}
                    </Link>
                    <span>
                        {item.variation}
                    </span>
                    <span className='cart-item-price align-self-center' onClick={handleSommatorium}>
                        R${matchingProduct ? matchingProduct.price.toFixed(2).replace(".", ",") : null}
                    </span>
                </div>   
            </div>

            <div className="cart-item-quantity d-flex align-items-center">
                <button 
                onClick={() => decreaseQuantity(item.productname, item.variation, item.quantitynumber)}
                >
                -</button>
                <span>{item.quantitynumber}</span>
                <button 
                onClick={() => raiseQuantity(item.productname, item.variation, item.quantitynumber)}
                >+
                </button>
            </div>
            <button 
            className='delete-cart-item'
            onClick={() => deleteFromCart(item.productname, item.variation)}
            >
                <i className="bi bi-trash3"></i>
            </button>
        </div>
        )
      }) : <p>Carrinho vazio.</p>
      }
    </div>
  )
}

export default CartProducts
