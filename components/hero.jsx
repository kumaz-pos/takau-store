import React from 'react'
import Link from 'next/link'
function Hero() {
  return (
    <div class="hero">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-5">
                <div class="intro-excerpt">
                    <h1>Takakou Holdings <span clsas="d-block">Car Parts</span></h1>
                    <p class="mb-4">
                    Delivering automotive excellence through quality parts and exceptional service, continuously driving innovation and customer satisfaction in the industry.

</p>
                    <p className='btns-hero'>
                        
                        <Link href="/shop" className='btn-shop'>
                        Shop Now
                        </Link>
                        <a href="#" class="btn btn-white-outline">Explore</a>
                        </p>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="hero-img-wrap">
                    <img src="images/car-bg.png" class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero