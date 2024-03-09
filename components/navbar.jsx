
import React from 'react'
import Link from 'next/link'
import supabase from "@/helpers/supabase";
export const revalidate = 60

async function Navbar() {
    const data= await supabase.from("Cart").select("*");
  return (
    <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

    <div class="container">
        <Link class="navbar-brand" href="/">Takakou<span>.</span></Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsFurni">
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li class="nav-item ">
                    <Link class="nav-link" href="/">Home</Link>
                </li>
                
               
                <li><Link class="nav-link" href="/shop">Shop</Link></li>
                <li><Link class="nav-link" href="/orders">Orders</Link></li>
               
            
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li><a class="nav-link" href="#"><img src="images/user.svg"/></a></li>
                <li><Link class="nav-link" href="/cart"><img src="images/cart.svg"/> <sup>{data.data.length}
                    </sup> </Link></li>
            </ul>
        </div>
    </div>
        
</nav>
  )
}

export default Navbar