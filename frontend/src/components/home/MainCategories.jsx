import './mainCategories.css'

import React from 'react'

const MainCategories = () => {
  return (
    <>
    <div className="categories-container d-flex w-100">
        <div className="main-categories d-flex w-100">
            <div className="categories-message d-flex flex-column col-3 align-items-center justify-content-center">
                <span className='bigger'>Principais Categorias</span>
                <span className="discount">Consiga até 30% de desconto</span>
            </div>
            <div className="categories w-100 d-flex justify-content-between">
                <div className="categorie d-flex flex-column col-2">
                    <img src="https://i.pinimg.com/736x/fc/cd/1e/fccd1e57cfd64b896b829b4647bbfabc.jpg" alt="" className='categorie-image'/>
                    <span>Categoria</span>
                </div>
                <div className="categorie d-flex flex-column col-2">
                    <img src="https://i.pinimg.com/736x/fc/cd/1e/fccd1e57cfd64b896b829b4647bbfabc.jpg" alt="" className='categorie-image'/>
                    <span>Categoria</span>
                </div>
                <div className="categorie d-flex flex-column col-2">
                    <img src="https://i.pinimg.com/736x/fc/cd/1e/fccd1e57cfd64b896b829b4647bbfabc.jpg" alt="" className='categorie-image'/>
                    <span>Categoria</span>
                </div>
                <div className="categorie d-flex flex-column col-2">
                    <img src="https://i.pinimg.com/736x/fc/cd/1e/fccd1e57cfd64b896b829b4647bbfabc.jpg" alt="" className='categorie-image'/>
                    <span>Categoria</span>
                </div>
                <div className="categorie d-flex flex-column col-2">
                    <img src="https://i.pinimg.com/736x/fc/cd/1e/fccd1e57cfd64b896b829b4647bbfabc.jpg" alt="" className='categorie-image'/>
                    <span>Categoria</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainCategories
