import React from 'react'

const Fullscreen = () => {

  return (
    <div className="fullscreenImage">
        <div className="f-container">
            <i className="bi bi-x-circle close-fullscreen"></i>
            <div className="f-content">
                <img src={null} alt="" id='fullImago'/>
                <div className="arrows d-flex align-items-center justify-content-between">
                    <button className="arrow" id="previousImage"><i className="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="arrow" id="nextImage"><i className="bi bi-arrow-right-circle-fill"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fullscreen
