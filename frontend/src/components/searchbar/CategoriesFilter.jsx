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
          to={`/smartphones`}
          >
            Smartphones
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          to={`/smartwatches`}
          >
            Smartwatches
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          to={`/carregadores`}
          >
            Carregadores
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          to={`/powerbanks`}
          >
            Powerbanks
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          to={`/fones`}
          >
            Fones
          </Link>
        </div>
    </div>
  )
}

export default CategoriesFilter
