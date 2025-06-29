import { Link } from 'react-router-dom'

const CategoriesFilter = () => {
  
  return (
    <div className="dropdown show">
        <span className="btn cat-btn dropdown-toggle d-flex" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Categorias
        </span>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          onClick={() => {window.location.href=`/Smartphones`}}
          >
            Smartphones
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          onClick={() => {window.location.href=`/Smartwatches`}}
          >
            Smartwatches
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          onClick={() => {window.location.href=`/Carregadores`}}
          >
            Carregadores
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          onClick={() => {window.location.href=`/Powerbanks`}}
          >
            Powerbanks
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          onClick={() => {window.location.href=`/Fones`}}
          >
            Fones
          </Link>
        </div>
    </div>
  )
}

export default CategoriesFilter
