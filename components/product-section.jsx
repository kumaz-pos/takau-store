import React from 'react'
import supabase from "@/helpers/supabase";


async function ProductSection() {
 
   
  
  return (
    <div className='bg-gray-100 py-5 px-4 lg-px-20 flex flex-col lg:flex-row'>
      <div  className='flex flex-col mr-0 lg-mr-10 justify-end w-full lg-w-2/3'>
        <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/GD6.png' />
      </div>
      <div className='flex flex-col w-full lg-w-1/3'>
      <div>

    <h1 className='bg text-xl text-red-500'>Crafted with superior automotive-grade materials</h1>
    
    <p className='text-[#002F63]'>Japan Direct is a leading provider of high-quality car parts, dedicated to supplying the automotive industry with exceptional products and services. With a relentless focus on innovation and customer satisfaction, we strive to deliver solutions that exceed expectations.</p>
    <div   className='bg-red-500  w-24 px-2 py-2 text-sm text-white rounded-3xl'>
   <a className='no-underline text-white' href='/shop'>Shop Now</a>
   </div>
    </div>
    
  
   </div>
   </div>
  )
}

export default ProductSection