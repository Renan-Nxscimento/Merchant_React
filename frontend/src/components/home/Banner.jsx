import './banner.css'

import React, { useState } from 'react'

const Banner = () => {
  const [bannerCounter, setBannerCounter] = useState(2)

  const backgroundImages = [
    "url('https://www.asus.com/events/eventES/eventspic/4601_1900.jpg')",
    "url('https://s.zst.com.br/cms-assets/2024/01/capa-celular-samsung-galaxy-s24-ultra.webp')",
    "url('https://renan-nxscimento.github.io/Merchant_E-commerce/img/bannerXiaomi.webp')"
  ]

  const handlePrevious = () => {
    setBannerCounter(prev => (prev > 1 ? prev - 1 : 3));
  };

  const handleNext = () => {
    setBannerCounter(prev => (prev < 3 ? prev + 1 : 1));
  };

  return (
    <div className='banner d-flex flex-column align-items-center' style={{ backgroundImage: backgroundImages[bannerCounter - 1] }}>
      <div className="banner-buttons d-flex justify-content-between w-100">
        <button className="banner-btn d-flex align-items-center justify-content-center" onClick={handlePrevious}>
            <i className="bi bi-arrow-left-short"></i>
        </button>
        <button className="banner-btn d-flex align-items-center justify-content-center" onClick={handleNext}>
            <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
      <div className="banner-dots d-flex justify-content-between">
        <div className={`dot ${bannerCounter === 1 ? 'active-dot' : ''}`}></div>
        <div className={`dot ${bannerCounter === 2 ? 'active-dot' : ''}`}></div>
        <div className={`dot ${bannerCounter === 3 ? 'active-dot' : ''}`}></div>
      </div>
    </div>
  )
}

export default Banner
