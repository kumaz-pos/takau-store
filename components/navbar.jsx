
import React from 'react'
import Link from 'next/link'
import supabase from "@/helpers/supabase";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";



async function Navbar() {
    const data= await supabase.from("Cart").select("*");
  return (
    
    
    <nav   class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
        
    <div class="container" >

        <Link class="navbar-brand" href="/"><img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo_w_background.png" height={100} style={{ opacity: '1' }} width={200} alt="Image" class="img-fluid"/><span></span></Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className='fle flex-row justify-between'>
            <div>
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item ">
                    <Link style={{ fontSize: '' }} class="nav-link" href="/">HOME</Link>
                </li>
                
               
                <li><Link class="nav-link" href="/shop">SHOP</Link></li>
                <li><Link class="nav-link" href="/orders">ORDERS</Link></li>
                <li><Link class="nav-link" href="/orders">ABOUT</Link></li>
                <li><Link class="nav-link" href="/contact">CONTACT</Link></li>
                <li>
                <a class="nav-link" href="#">
                    <IoPersonOutline color='red' size={30} />
                </a>
            </li>
            <li><Link class="nav-link" href="/cart"><IoCartOutline color='red' size={30} /></Link></li>
            <sup  style={{ color: 'white'}}>{data.data.length}
                    </sup>
             
            
            </ul>
            </div>
            <div>
            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
           
                
            </ul>
            </div>
        </div>
    </div>
        
</nav>

  )
}

export default Navbar