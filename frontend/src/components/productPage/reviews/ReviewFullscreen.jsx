import { useContext, useEffect, useState } from 'react'
import { ReviewFullscreenContext } from './Review'

const ReviewFullscreen = ({review}) => {
    const [imageCounter, setImageCounter] = useState(1)
    const {reviewFullscreen, setReviewFullscreen} = useContext(ReviewFullscreenContext)

    const toggleFullscreen = () => {
      setReviewFullscreen(prevState => !prevState)
    }

    const previousImage = () => {
        if (imageCounter > 1) {
          setImageCounter((prevImageCounter) => prevImageCounter - 1)
        }
      }

    const nextImage = (length) => {
        if ( imageCounter < length) {
          setImageCounter((prevImageCounter) => prevImageCounter + 1)
        }
      }

      const getCurrentImage = (object) => {
        const images = object.images
        let locatedImage = images.find(image =>
          image.order === imageCounter
        )
        return locatedImage
      }

      const reviewImage = getCurrentImage(review)

      useEffect(() => {
        getCurrentImage(review)
        console.log(review.images)

      }, [imageCounter, review])

 return (
    <div className="fullscreenImage" style={reviewFullscreen ? {display: 'flex'} : null}>
        <div className="f-container">
            <i 
            className="bi bi-x-circle close-fullscreen"
            onClick={toggleFullscreen}
            ></i>
            <div className="f-content">
                <img src={`${reviewImage ? reviewImage.src : ""}`} alt="" id='fullImago'/>
                <div className="arrows d-flex align-items-center justify-content-between">
                  {
                    imageCounter > 1 && (
                    <button 
                    className="arrow" 
                    id="previousImage"
                    onClick={previousImage}
                    >
                      <i className="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    )
                  }
                  {
                    imageCounter < review.images.length && (
                    <button 
                    className={`arrow ${imageCounter === 1 ? "first-arrow" : ""}`} 
                    id="nextImage"
                    onClick={() => nextImage(review.images.length)}
                    >
                      <i className="bi bi-arrow-right-circle-fill"></i>
                    </button>
                    )
                  } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewFullscreen
