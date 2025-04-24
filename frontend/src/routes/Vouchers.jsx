import React from 'react'
import Voucher from '../components/vouchers/Voucher'

import '../components/vouchers/voucher.css'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'

const Vouchers = () => {
  return (
    <>
    <section id='vouchersSection' className='d-flex flex-column align-items-center'>
        <h3 className="big-text">cupons de desconto</h3>
        <Voucher/>
    </section>
    <QualitiesString/>
    <FeaturedProducts/>
    </>
    
    
  )
}

export default Vouchers
