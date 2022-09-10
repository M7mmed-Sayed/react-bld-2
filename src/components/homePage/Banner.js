import React from 'react'
import '../../Css/HomePage/Banner.css'

function Banner() {
  return (
      <div className="banner-container">
          <div className="banner-img" id="banner-img">
              <img src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt='lol' />
          </div>
          <div className="banner-data" id="banner-data">
              <h1>Learning that gets you</h1>
              <h6>
                  Skills for your present (and your future). Get started with
                  us.
              </h6>
          </div>
      </div>
  )
}

export default Banner
