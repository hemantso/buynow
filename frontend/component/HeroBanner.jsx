import Link from 'next/link'
import React from 'react'

function HeroBanner() {
  return (
    <div className="her-banner-container">
      <div>
        <p className="beats-solo"></p>
        <h3></h3>
        <img src="" alt="headphone" className="hero-banner-image" srcset="" />
        <div>
          <Link href="/product/ID">
            <button type="butto"></button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner