import { Link } from 'react-router-dom'
import './featuredCategories.css'

const FeaturedCategories = () => {
    const featuredCategories = [
        {
            category: "Fones",
            category_feature: "Com e sem fio",
            img: "https://static.vecteezy.com/system/resources/thumbnails/046/787/059/small_2x/white-earbuds-in-transparent-background-free-png.png"
        },
        {
            category: "Powerbanks",
            category_feature: "De alta capacidade",
            img: "https://static.vecteezy.com/system/resources/thumbnails/053/238/629/small/a-white-power-bank-with-two-usb-ports-png.png"
        },
        {
            category: "Carregadores",
            category_feature: "Ultra rápidos",
            img: "https://static.vecteezy.com/system/resources/thumbnails/065/818/768/small/white-usb-c-phone-charger-with-cable-png.png"
        }
    ]
  return (
    
    <div className='featured-categories-container d-flex'>
        {
            featuredCategories.map(item => 
            <div className="f-categorie-container">
                <div 
                className="f-categorie-content d-flex flex-column h-100 justify-content-center"
                style={{backgroundImage: `url(${item.img})`}}
                >
                    <span className="categorie-name">{item.category}</span>
                    <h4 className='f-quality'>{item.category_feature}</h4>
                    <Link onClick={() => {window.location.href=`/${item.category}`}}>
                        Ver mais produtos
                    </Link>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default FeaturedCategories
