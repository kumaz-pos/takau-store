import React from 'react'
import Link from 'next/link'
import { IoPersonOutline } from "react-icons/io5";
import { Raleway } from 'next/font/google';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import NextJsCarousel from './carousel';

const raleway = Raleway({
    weight: '800',
    subsets: ['latin'],
  })
   
  



function Hero() {
  return (
    
    <div class="hero"  style={{ backgroundColor: 'black' }} >
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-5">
                <div class="intro-excerpt">
              
                    <h1  className={raleway.className}>Japan Direct <div className={raleway.className}  style={{ color: 'red',fontFamily: 'Raleway'}} >Automative</div> Parts</h1>
                    <p style={{ color: '#002F63',}} className={raleway.className}   class="mb-4">
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
                <div>
                    <NextJsCarousel/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero