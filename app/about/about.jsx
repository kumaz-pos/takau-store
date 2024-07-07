import React from 'react'
import Footer from '@/components/footer'
import MyCarousel from '@/components/carousel'

export default function About() {
  return (
    <div>
    <div className='bg-gray-100 py-6  px-2 lg:px-20 flex flex-col lg:flex-row'>
    <div  className='flex flex-col mr-10 justify-end w-full'>
      <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/parts_removebg_preview.png' />
    </div>
    <div className='flex flex-col w-full  lg:w-full'>
    <div className='bg-red-200 rounded-md'>

  <h1 className='pb-4 px-6 text-3xl text-red-500 pt-4'>About</h1>
  
  <p className='text-[#002F63] text-justify px-6 w-full'>
  Japan Direct is a leading provider of high-quality car parts, dedicated to supplying the automotive industry with exceptional products and services. Our commitment to excellence has positioned us as a trusted name in the industry, where quality and reliability are paramount. We source and supply a wide range of car parts that meet the stringent standards of today's automotive market, ensuring that our customers always receive the best.

With a relentless focus on innovation, Japan Direct continuously explores new technologies and methods to enhance our product offerings. Our research and development team works tirelessly to stay ahead of market trends, integrating the latest advancements into our products. This dedication to innovation ensures that we not only meet but exceed the evolving needs of our customers, providing them with state-of-the-art solutions that enhance vehicle performance and safety.

Customer satisfaction is at the heart of everything we do at Japan Direct. We understand that our customers rely on our products for their vehicles' optimal performance, and we take this responsibility seriously. Our customer service team is always ready to assist with any inquiries or issues, ensuring a seamless and positive experience from the moment you engage with us. We value feedback and continuously strive to improve our services based on our customers' needs and suggestions.
  </p>
 
  </div>
  

 </div>
 </div>

<div className='bg-gray-100 flex-col lg:flex-row py-5 lg:px-20 px-2 flex'>

<div className='flex lg:flex-col flex-row w-full rounded-md bg-red-200  lg:w-2/3'>
<div className='bg-red-100 rounded-md'>

<h1 className='bg  text-red-500  px-6 pb-6 text-3xl pt-4'>Our Mission</h1>

<p className='text-[#002F63] w-full text-justify px-6'>At Japan Direct, we are a Zimbabwe-based company with a passion for supplying top-quality car parts for all vehicle types. We've been in the business for [Number] years, building a reputation for reliability and affordability. We understand that your car is an essential part of your life, and keeping it running smoothly is a priority. That's why we offer a comprehensive selection of parts to meet all your repair and maintenance needs.</p>

</div>


</div>

<div  className='flex flex-col mr-10 justify-end w-ull lg:w-full'>
  <MyCarousel  />
</div>


</div>



<div className='py-5 px-2 flex-col lg:flex-row lg:px-20 flex'>

<div  className='flex flex-col mr-0 lg:mr-10 justify-end w-full lg:w-2/3'>
  <img src='https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Nissan.png' />
</div>

<div className='flex flex-col w-full bg-red-200 rounded-md   lg:w-1/3'>
<div>

<h1 className='bg text-3xl pb-6 px-6 pt-4 text-red-500'>Why Choose Japan Direct?</h1>

<p className='text-[#002F63] text-justify px-6'>Extensive Inventory: We stock a wide variety of car parts for Japanese, European, American, and Korean vehicles. Whether you need a common replacement part or a specialty item, we've got you covered.
Direct Sourcing: We source our parts directly from reputable manufacturers and distributors in Japan, cutting out unnecessary middlemen and ensuring competitive pricing.
Quality Assurance: We take pride in offering high-quality parts that meet rigorous safety and performance standards. You can trust Japan Direct parts to keep your car running safely and reliably.
Transparency on Car Part Pricing: We understand that inflation can significantly impact the cost of car parts. We are committed to providing our customers with fair and competitive pricing while navigating the current economic climate.</p>

</div>


</div>




</div>
<Footer/>
</div>



  )
}
