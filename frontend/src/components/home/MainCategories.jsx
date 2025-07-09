import { Link } from 'react-router-dom'
import fetchApi from '../../axios/config'
import './mainCategories.css'

import { useEffect, useState } from 'react'

const MainCategories = () => {

const [categories, setCategories] = useState([])

    useEffect(() => {
            const loadApi = async () => {
                try {
                    const res = await fetchApi.get(`/categories`)
                    setCategories(res.data)
                    
                } catch (error){
                    console.error("Couldn't reach the API", error)
                }
            }


          loadApi()
        }, [])

        if(!categories) return <p className='loading'>Carregando...</p>

  return (
    <>
    <div className="categories-container d-flex w-100">
        <div className="main-categories d-flex w-100">
            <div className="categories-message flex-column col-3 align-items-center justify-content-center">
                <span className='bigger'>Principais Categorias</span>
                <span className="discount">Consiga até 30% de desconto</span>
            </div>
            <div className="categories w-100 d-flex justify-content-between">
                {
                    categories? categories.map(category => (
                        <div className="categorie d-flex flex-column col-2" key={category.category}>
                            <Link 
                            onClick={() => {window.location.href=`/${category.category}`}}
                            className="d-flex flex-column align-items-center"
                            >
                                <img 
                                src={category.image} 
                                alt={category.category} 
                                className='categorie-image'
                                />
                                <span>{category.category}</span>
                            </Link>
                        </div>
                    )) : null
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default MainCategories
