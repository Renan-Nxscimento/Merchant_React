import { useContext, useEffect, useState } from "react"
import { FinishingContext } from "./ShippingValue"

import './finishPurchase.css'

const FinishPurchase = ({values}) => {
    const {setIsFinishing} = useContext(FinishingContext)
    const [voucher, setVoucher] = useState()
    const [discount, setDiscount] = useState()
    const [valid, setValid] = useState(false)

    const handleInputChange = (e) => {
    setVoucher(e.target.value)
    setValid(false)
    }

    const discountedValue = (vouch, numb) => {
        numb = values.replace(",", ".")
       let discounted = Number(numb)

       if (vouch === "MRCT30OFF1") {
           const discountAmount = discounted * 0.30
           const finalDiscount = discounted - discountAmount
           setValid(true)

        if (finalDiscount > 900) {
            const exceeded = discounted - 900
            setDiscount(exceeded)
        } else {
            setDiscount(finalDiscount)
        }
       } else {
        setVoucher("Cupom inválido")
        setValid(false)
       }
    }

  return (
    <div className="fullscreenForm">
        <div className="finish-purchase">
            <div className="f-top">
                <div className="close-form" onClick={() => setIsFinishing(false)}>
                    <span>&times;</span>
                </div>
            </div>
            <div className="f-fakeform">
                <div className="form-part">
                    <span className="fake-label">Nome:</span>
                    <div className="fake-input">
                        <span>Nome completo</span>
                    </div>
                    <span className="fake-label">CPF:</span>
                    <div className="fake-input">
                        <span>CPF</span>
                    </div>
                    <span className="fake-label">Telefone:</span>
                    <div className="fake-input">
                        <span>Telefone</span>
                    </div>
                    <span className="fake-label">Número do cartão:</span>
                    <div className="fake-input">
                        <span>Número do cartão:</span>
                    </div>
                    <span className="fake-label">Validade:</span>
                    <div className="small-ones">
                        <div className="fake-input-smaller">
                            <span>Mês</span>
                        </div>
                        <div className="fake-input-smaller">
                            <span>Ano</span>
                        </div>
                    </div>
                </div>
                <div className="total-part">
                    <div className="total-top">
                        <span>Total dos produtos:</span>
                    </div>
                    <div className="total-bottom">
                        <span id="formTotal">
                            R${discount ? 
                            discount.toFixed(2).replace(".", ",") : values}
                            </span>
                        <input 
                        type="text" 
                        placeholder="Insira um cupom de desconto"
                        value={voucher}
                        onChange={handleInputChange}
                        className={`${voucher === "Cupom inválido" ? "text-danger" : ""}`}
                        />
                        <button 
                        className={`apply-discount ${valid ? "bg-success" : "hierophant-blue"}`}
                        onClick={() => discountedValue(voucher)}
                        >
                            {valid ? "Cupom resgatado" : "Aplicar desconto"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="f-ending">
                <span id="warning">ESTE CAMPO É APENAS PARA EXEMPLIFICAR UMA API DE COMPRA, NÃO É NECESSÁRIO INSERIR NEHUM DADO.</span>
            </div>
        </div>
    </div>
  )
}

export default FinishPurchase
