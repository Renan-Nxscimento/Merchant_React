import { useContext } from 'react'
import { FullscreenContext } from '../../../routes/ProductPage'
import { ImagesCounterContext } from '../../../routes/ProductPage'

const Images = ({selectedProduct}) => {
    const mainImage = selectedProduct.images[0].src

    const {imageCounter, setImageCounter} = useContext(ImagesCounterContext)

    const {fullscreen, setFullscreen} = useContext(FullscreenContext)

    const imagesHandler = (counter) => {
        setImageCounter(counter)
    }

    const locatedImage = selectedProduct.images.find(image => 
        image.order === imageCounter
    )

    const toggleFullscreen = () => {
        setFullscreen(prevState => !prevState)
        console.log(fullscreen)
    }

  return (
    <div className='product-images d-flex'>
        <div className="alt-images d-flex flex-column">
            {selectedProduct.images.map(image => (
                image.src &&
                 image.src !== ""? (
                        <img 
                        id={image.order} 
                        key={image.order} 
                        src={image.src} 
                        alt="" 
                        className={`alt-img d-flex align-items-center justify-content-center ${image.order === imageCounter ? 'img-selected' : ''}`}
                        onClick={() => imagesHandler(image.order)}
                        />
                 )
                : null
            ))}
        </div>
        <div className="main-image d-flex align-items-center justify-content-center">
            <img 
            id='mainImage' 
            src={`${locatedImage ? locatedImage.src : mainImage}`} 
            alt="" 
            onClick={toggleFullscreen}
            />
        </div>
    </div>
  )
}

export default Images
