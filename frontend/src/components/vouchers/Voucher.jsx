import { useRef, useState } from "react"

const Voucher = () => {
  const [pasted, setPasted] = useState(false)
  const voucherCodeRef = useRef(null)

  const handleVoucher = () => {
    const code = voucherCodeRef.current.innerText
    navigator.clipboard.writeText(code).then(() => {
      setPasted(true)
    })
  }

  return (
    <div className='voucher d-flex flex-column'>
      <div className="voucher-top d-flex">
        <div className="voucher-icon">
            <div className="v-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-currency-dollar"></i>
            </div>
            <div className="v-discount d-flex align-items-center justify-content-center">
                30% OFF
            </div>
        </div>
        <div className="voucher-info d-flex flex-column">
            <span 
            className="voucher-code" 
            ref={voucherCodeRef}
            >
              MRCT30OFF1
            </span>
            <h2 className="voucher-value">30% de desconto</h2>
            <span className="voucher-limit">Limitado á R$900</span>
            <span className="v-condition d-flex align-items-center justify-content-center">Primeira compra</span>
        </div>
      </div>
      <div className="voucher-cut d-flex">
        <div className="v-left"></div>
        <div className="v-slashs d-flex align-items-center justify-content-between">
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
            <div className="v-slash"></div>
        </div>
        <div className="v-right"></div>
      </div>
      <div className="redeem-voucher d-flex align-items-center justify-content-center">
        <button 
        className={`redeem-btn ${pasted? "text-success" : ""}`}
        onClick={handleVoucher}
        >
          {pasted? "Cupom copiado!" : "Resgatar cupom"}
        </button>
      </div>
    </div>
  )
}

export default Voucher
