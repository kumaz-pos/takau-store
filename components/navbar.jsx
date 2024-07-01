'use client'
import React from 'react'
import Link from 'next/link'

import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from 'react-icons/io5';
import { IoTime } from 'react-icons/io5';

import {useState,useEffect} from 'react'


function Navbar({data}) {
const [nav, setnav] = useState(true)


  return (
  

    <nav class="custom-navbar navbar  navbar-expand-md " arial-label="Furni navigation bar">

    <div class="container">
    <Link class="navbar-brand" href="/"><img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/japan_direct_logo_w_background.png" height={100} style={{ opacity: '1' }} width={200} alt="Image" class="img-fluid"/><span></span></Link>

        <button onClick={
            ()=>setnav(!nav)
        } class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <IoMenu style={{color:"red"}}/>
        </button>
{
    nav ?  <div class={  ` navbar-collapse`} id="navbarsFurni"> 

 <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
    <li class="nav-item ">
            <Link style={{ fontSize: '' }} class="nav-link" href="/">HOME</Link>
        </li>
        
       
        <li><Link class="nav-link" href="/shop">SHOP</Link></li>
        <li><Link class="nav-link" href="/orders">ORDERS</Link></li>
        <li><Link class="nav-link" href="/about">ABOUT</Link></li>
        <li><Link class="nav-link" href="/contact">CONTACT</Link></li>
        <li>
        <a class="nav-link" href="#">
            <IoPersonOutline color='red' size={30} />
        </a>
    </li>
    <li><Link class="nav-link" href="/cart"><IoCartOutline color='red' size={30} /></Link></li>
    <sup  style={{ color: 'white'}}>
      
            </sup>
     
    
     
    </ul>

   

 
</div> : null
}
        
    </div>
        
</nav>

    


  )
}

export default Navbar






