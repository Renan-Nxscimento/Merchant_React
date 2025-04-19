import React from 'react'

const CategoriesFilter = () => {
  return (
    <div className="dropdown show">
        <a className="btn cat-btn dropdown-toggle d-flex" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Categorias
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="category-item d-flex justify-content-center align-items-center" href="#">Smartphones</a>
          <a className="category-item d-flex justify-content-center align-items-center" href="#">Smartwatches</a>
          <a className="category-item d-flex justify-content-center align-items-center" href="#">Carregadores</a>
          <a className="category-item d-flex justify-content-center align-items-center" href="#">Power Banks</a>
          <a className="category-item d-flex justify-content-center align-items-center" href="#">Suportes</a>
        </div>
    </div>
  )
}

export default CategoriesFilter
