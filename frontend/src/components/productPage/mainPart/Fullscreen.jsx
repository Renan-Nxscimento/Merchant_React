import { useContext } from 'react'
import { FullscreenContext, ImagesCounterContext } from '../../../routes/ProductPage'

const Fullscreen = ({selectedProduct}) => {
  const mainImage = selectedProduct.images[0].src

  const {imageCounter, setImageCounter} = useContext(ImagesCounterContext)

  const {fullscreen, setFullscreen} = useContext(FullscreenContext)

    const toggleFullscreen = () => {
      setFullscreen(prevState => !prevState)
    }

      const previousImage = () => {
        if (imageCounter > 1) {
          setImageCounter((prevImageCounter) => prevImageCounter - 1)
        }
      }

      const nextImage = () => {
        if (imageCounter < 5) {
          setImageCounter((prevImageCounter) => prevImageCounter + 1)
        }
      }

    const locatedImage = selectedProduct.images.find(image => 
      image.order === imageCounter
    )

  return (
    <div className="fullscreenImage" style={fullscreen ? {display: 'flex'} : null}>
        <div className="f-container">
            <i 
            className="bi bi-x-circle close-fullscreen"
            onClick={toggleFullscreen}
            ></i>
            <div className="f-content">
                <img src={`${locatedImage ? locatedImage.src : mainImage}`} alt="" id='fullImago'/>
                <div className="arrows d-flex align-items-center justify-content-between">
                    <button 
                    className="arrow" 
                    id="previousImage"
                    onClick={previousImage}
                    >
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button 
                    className="arrow" 
                    id="nextImage"
                    onClick={nextImage}
                    >
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fullscreen
