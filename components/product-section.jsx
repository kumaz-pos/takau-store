import React from 'react'
import supabase from "@/helpers/supabase";


async function ProductSection() {
 
   
  
  return (
    <div className='bg-red-100 py-5 px-4 lg-px-20 flex flex-col md:flex-row'>
      <div  className='flex flex-col mr-0 lg-mr-10 justify-end w-full lg-w-2/3'>
        <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/parts-removebg-preview__1_.png" alt="Car Parts" />
      </div>
      <div className='flex flex-col w-full text-justify ml-3 lg-w-1/3'>
      <div>

    <h1 className='bg text-xl text-red-500'>Crafted with superior automotive-grade materials</h1>
    
    <p className='text-[#002F63]'>Japan Direct is a leading provider of high-quality car parts, dedicated to supplying the automotive industry with exceptional products and services. Our commitment to excellence has positioned us as a trusted name in the industry, where quality and reliability are paramount. We source and supply a wide range of car parts that meet the stringent standards of today's automotive market, ensuring that our customers always receive the best.

With a relentless focus on innovation, Japan Direct continuously explores new technologies and methods to enhance our product offerings. Our research and development team works tirelessly to stay ahead of market trends, integrating the latest advancements into our products. This dedication to innovation ensures that we not only meet but exceed the evolving needs of our customers, providing them with state-of-the-art solutions that enhance vehicle performance and safety.

Customer satisfaction is at the heart of everything we do at Japan Direct. We understand that our customers rely on our products for their vehicles' optimal performance, and we take this responsibility seriously. Our customer service team is always ready to assist with any inquiries or issues, ensuring a seamless and positive experience from the moment you engage with us. We value feedback and continuously strive to improve our services based on our customers' needs and suggestions.</p>
    <div   className='bg-red-500  w-24 px-2 py-2 text-sm text-white rounded-3xl'>
   <a className='no-underline text-white' href='/shop'>Shop Now</a>
   </div>
    </div>
    
  
   </div>
   </div>
  )
}

export default ProductSection