import React from 'react'

const Images = ({Product}) => {
    const mainImage = Product.images[0].src

  return (
    <div className='product-images d-flex'>
        <div className="alt-images d-flex flex-column">
            {Product.images.map(image => (
                image.src &&
                 image.src !== ""? (
                        <img id={image.order} key={image.order} src={image.src} alt="" className={`alt-img d-flex align-items-center justify-content-center ${image.order === 1 ? 'img-selected' : ''}`}/>
                 )
                : null
            ))}
        </div>
        <div className="main-image d-flex align-items-center justify-content-center">
            <img id='mainImage' src={mainImage} alt="" />
        </div>
    </div>
  )
}

export default Images
