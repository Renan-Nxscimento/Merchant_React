import './banner.css'

import React from 'react'

const Banner = () => {
  return (
    <div className='banner d-flex flex-column align-items-center'>
      <div className="banner-buttons d-flex justify-content-between w-100">
        <button className="banner-btn d-flex align-items-center justify-content-center" id='nextBanner'>
            <i className="bi bi-arrow-left-short"></i>
        </button>
        <button className="banner-btn d-flex align-items-center justify-content-center" id='previousBanner'>
            <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
      <div className="banner-dots d-flex justify-content-between">
      <div className="dot"></div>
      <div className="dot active-dot"></div>
      <div className="dot"></div>
      </div>
    </div>
  )
}

export default Banner
