import React from 'react'

import './details.css'

const Description = ({Product}) => {
  return (
    <div className='description d-flex flex-column w-100'>
      <h3>Descrição</h3>
      <div className="description-text d-flex w-100 justify-content-center">
      {Product.description &&
                 Product.description !== ""? (
                    <p className='w-100'>{Product.description}</p>
                ) 
                : null
            }
      </div>
    </div>
  )
}

export default Description
