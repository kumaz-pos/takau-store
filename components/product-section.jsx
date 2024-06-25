
import React from 'react'
import supabase from "@/helpers/supabase";
import { addToCart } from '@/server-actions/addToCart';
import Product from './product';
import Dialog from './dialog';
async function ProductSection() {
 
    const data= await supabase.from("Takau").select("*")
  
  return (
    <div  class="product-section">
    <div  class="container">
        <div class="row">

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 style={{ color: 'white' }} class="mb-4 section-title">Crafted with superior automotive-grade materials</h2>
                <p class="mb-4" style={{ color: 'pink',lineHeightStep:'3' }}>
                Japan Direct is a leading provider of high-quality car parts, dedicated to supplying the automotive industry with exceptional products and services. With a relentless focus on innovation and customer satisfaction, we strive to deliver solutions that exceed expectations. </p>
                <p>  <button className='btn-shop'>
                        Shop Now
                        </button></p>
            </div> 
        
         {
            data.data.map((item)=>{
                
                return <Product key={item.id} item={item} addToCart={addToCart}/>
            })
         }
       

        </div>
    </div>
   
</div>
  )
}

export default ProductSection