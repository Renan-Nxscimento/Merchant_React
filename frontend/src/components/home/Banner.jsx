import './banner.css'

import React, { useState } from 'react'

const Banner = () => {
  let previous = document.getElementById('previousBanner')
  let next = document.getElementById('nextBanner')
  let dots = document.querySelectorAll('.dot')

  let banner = document.querySelector('.banner')

  const [bannerCounter, setBannerCounter] = useState(2)

  console.log(previous)
  console.log(next)
  console.log(dots)
  console.log(banner)

  function changeBanner() {
    if (bannerCounter === 1) {
      banner.style.backgroundImage = "url('https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_MetalGearSolidMasterCollectionVersion.jpg')"
      document.querySelector('.active-dot')?.classList.remove('active-dot')
      dots[0].classList.add('active-dot')

    } if (bannerCounter === 2) {
      banner.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6767454.jpg')"
      document.querySelector('.active-dot')?.classList.remove('active-dot')
      dots[1].classList.add('active-dot')

    } if (bannerCounter === 3) {
      banner.style.backgroundImage = "url('https://images6.alphacoders.com/131/1316756.png')"
      document.querySelector('.active-dot')?.classList.remove('active-dot')
      dots[2].classList.add('active-dot')
    }
  }


  previous?.addEventListener('click', () => {
    if (bannerCounter > 1) {
      bannerCounter --
    }
    else {
      bannerCounter = 3
    }
    changeBanner()
  })

  next?.addEventListener('click', () => {
    if (bannerCounter < 3) {
      bannerCounter ++
    }
    else {
      bannerCounter = 1
    }
    changeBanner()
  })

  return (
    <div className='banner d-flex flex-column align-items-center'>
      <div className="banner-buttons d-flex justify-content-between w-100">
        <button className="banner-btn d-flex align-items-center justify-content-center" id='previousBanner'>
            <i className="bi bi-arrow-left-short"></i>
        </button>
        <button className="banner-btn d-flex align-items-center justify-content-center" id='nextBanner'>
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
