import { useContext, useState } from 'react'
import { ValuesContext } from '../../routes/Cart'

const ShippingValue = () => {
  const {values, shipping, setShipping, cartItems} = useContext(ValuesContext)

  const [cep, setCep] = useState('')
  const [notFound, setNotFound] = useState(false)
  const [addres, setAddress] = useState()

  const buscarCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      if(!response.ok) {
        throw new Error('Erro na resposta da API')
      }
      const data = await response.json()
        console.log(data)
        setAddress(data)
        if (data.uf === "AC") {
          setShipping(172.00)
        }
        if (data.uf === "AL") {
            setShipping(137.90)
        }
        if (data.uf === "AP") {
            setShipping(98.00)
        }
        if (data.uf === "AM") {
            setShipping(162.00)
        }
        if (data.uf === "BA") {
            setShipping(45.30)
        }
        if (data.uf === "CE") {
            setShipping(118.20)
        }
        if (data.uf === "ES") {
            setShipping(72.00)
        }
        if (data.uf === "DF") {
            setShipping(23.00)
        }
        if (data.uf === "MA") {
            setShipping(89.00)
        }
        if (data.uf === "MT") {
            setShipping(54.00)
        }
        if (data.uf === "MS") {
            setShipping(78.00)
        }
        if (data.uf === "MG") {
            setShipping(32.00)
        }
        if (data.uf === "PA") {
            setShipping(67.00)
        }
        if (data.uf === "PB") {
            setShipping(49.00)
        }
        if (data.uf === "PR") {
            setShipping(112.00)
        }
        if (data.uf === "PE") {
            setShipping(105.00)
        }
        if (data.uf === "PI") {
            setShipping(49.00)
        }
        if (data.uf === "RJ") {
            setShipping(115.00)
        }
        if (data.uf === "RN") {
            setShipping(78.00)
        }
        if (data.uf === "RS") {
            setShipping(56.72)
        }
        if (data.uf === "RO") {
            setShipping(84.00)
        }
        if (data.uf === "RR") {
            setShipping(76.00)
        }
        if (data.uf === "SC") {
            setShipping(96.00)
        }
        if (data.uf === "SP") {
            setShipping(42.00)
        }
        if (data.uf === "SE") {
            setShipping(48.00)
        }
        if (data.uf === "TO") {
            setShipping(86.00)
        }
        if (data.uf === "GO") {
            setShipping(77.00)
        }
        setNotFound(false)
      }
    catch(error) {
      console.log(error)
      setNotFound(true)
      setAddress('')
      setShipping(0)
    }
    
  }
    
  return (
    <div className='shipping-container d-flex align-items-center justify-content-between w-100 p-4'>
      <div className="ship-calc d-flex flex-column">
        <span>Calcular frete:</span>
        <form className='d-flex flex-column h-100 justify-content-between'>
          <input 
          type="number" 
          name="cepNumber" 
          id="cepNumber" 
          placeholder='Insira seu CEP aqui'
          onChange={(e) => setCep(e.target.value)}
          />
          <button 
          className='cep-btn' 
          type="button"
          onClick={buscarCep}
          >Calcular</button>
        </form>
      </div>

      <div className="ship-value-n-place d-flex flex-column align-items-center">
        {
          addres ? (
            <>
              <span>{addres.logradouro}</span>
              <span className="ship-value">Valor do frete: R${shipping.toFixed(2).replace(".", ",")}</span>
            </>
          ) : null
        }
        {
          notFound ? (<span className='text-danger'>CEP Incorreto.</span>) : null
        }
      </div>

      <div className="total-value d-flex flex-column h-100 justify-content-between">
        <span>Produtos: {cartItems.length}</span>
        <span>Frete: R${shipping.toFixed(2).replace(".", ",")}</span>
        <span className="total d-flex align-items-center">Total: R${values}</span>
        <button className='finish-btn'>Finalizar compra</button>
      </div>
    </div>
  )
}

export default ShippingValue
