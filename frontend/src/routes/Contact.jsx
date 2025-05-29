import React from 'react'
import QualitiesString from '../components/home/QualitiesString'
import FeaturedProducts from '../components/home/FeaturedProducts'

import './contact.css'

const Contact = () => {
  return (
    <>
        <section id='contactSection' className='d-flex flex-column flex-wrap align-items-center'>
            <h3 className="big-text">fale conosco</h3>
            <div className="contact-container d-flex flex-wrap justify-content-center">
                <div className="contact d-flex flex-column">
                    <div className="c-top d-flex align-items-center">
                        <i className="bi bi-telephone-fill"></i>
                        <span>Telefone</span>
                    </div>
                    <div className="c-main d-flex align-items-center justify-content-center w-100 h-100">
                        <span>(00) 0000-0000</span>
                    </div>
                </div>

                <div className="contact d-flex flex-column">
                    <div className="c-top d-flex align-items-center">
                        <i className="bi bi-instagram"></i>
                        <span>instagram</span>
                    </div>
                    <div className="c-main d-flex align-items-center justify-content-center w-100 h-100">
                        <span>@merchantdigitalstore</span>
                    </div>
                </div>

                <div className="contact d-flex flex-column">
                    <div className="c-top d-flex align-items-center">
                        <i className="bi bi-envelope-fill"></i>
                        <span>email</span>
                    </div>
                    <div className="c-main d-flex align-items-center justify-content-center w-100 h-100">
                        <span>contact@merchant.com</span>
                    </div>
                </div>

                <div className="contact d-flex flex-column">
                    <div className="c-top d-flex align-items-center">
                        <i className="bi bi-whatsapp"></i>
                        <span>whatsapp</span>
                    </div>
                    <div className="c-main d-flex align-items-center justify-content-center w-100 h-100">
                        <span>(00) 0000-0000</span>
                    </div>
                </div>
            </div>
        </section>
        <QualitiesString/>
        <FeaturedProducts/>
    </>
  )
}

export default Contact
