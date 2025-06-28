import { Link } from 'react-router-dom'

const CategoriesFilter = () => {
  
  return (
    <div className="dropdown show">
        <a className="btn cat-btn dropdown-toggle d-flex" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Categorias
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          href="#"
          >
            Smartphones
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          href="#"
          >
            Smartwatches
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          href="#"
          >
            Carregadores
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          href="#"
          >
            Power Banks
          </Link>
          <Link 
          className="category-item d-flex justify-content-center align-items-center" 
          href="#"
          >
            Suportes
          </Link>
        </div>
    </div>
  )
}

export default CategoriesFilter
