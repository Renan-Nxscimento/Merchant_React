import React from 'react'

import './featuredCategories.css'


const FeaturedCategories = () => {
  return (
    <div className='featured-categories-container d-flex'>
        <div className="f-categorie-container">
            <div id='featureOne' className="f-categorie-content d-flex flex-column h-100 justify-content-center">
                <span className="categorie-name">Fones</span>
                <h4 className='f-quality'>Sem Fio</h4>
                <a href="#">Ver mais produtos</a>
            </div>
        </div>

        <div className="f-categorie-container">
            <div id='featureTwo' className="f-categorie-content d-flex flex-column h-100 justify-content-center">
                <span className="categorie-name">Powerbanks</span>
                <h4 className='f-quality'>De alta capacidade</h4>
                <a href="#">Ver mais produtos</a>
            </div>
        </div>    

        <div className="f-categorie-container">
            <div id='featureThree' className="f-categorie-content d-flex flex-column h-100 justify-content-center">
                <span className="categorie-name">Carregadores</span>
                <h4 className='f-quality'>Ultra rápidos</h4>
                <a href="#">Ver mais produtos</a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCategories
