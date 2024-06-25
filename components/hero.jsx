import React from 'react'
import Link from 'next/link'
import Carousel from './carousel'
import { IoPersonOutline } from "react-icons/io5";

function Hero() {
  return (
    
    <div class="hero" style={{ backgroundColor: 'black' }} >
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-5">
                <div class="intro-excerpt">
              
                    <h1 >Japan Direct <div  style={{ color: 'red',fontFamily: 'Raleway',fontWeight: 'bold'}} >Automative</div> Parts</h1>
                    <p style={{ color: '#002F63',}}  class="mb-4">
                    Delivering automotive excellence through quality parts and exceptional service, continuously driving innovation and customer satisfaction in the industry.

</p>
                    <p className='btns-hero'>
                        
                        <Link href="/shop" className='btn-shop'>
                        Shop Now
                        </Link>
                        
                        <a href="#" style={{ backgroundColor: '#002F63' }}  class="btn btn-white-outline">Explore</a>
                        </p>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="hero-img-wrap">
                    <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/GD6.png" class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero