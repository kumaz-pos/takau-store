
import React from 'react'
import supabase from "@/helpers/supabase";
import { addToCart } from '@/server-actions/addToCart';
import Product from './product';
import Dialog from './dialog';
async function ProductSection() {
 
    const data= await supabase.from("Takau").select("*")
  
  return (
    <div class="product-section">
    <div class="container">
        <div class="row">

            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                <p><a href="shop.html" class="btn">Explore</a></p>
            </div> 
        
         {
            data.data.map((item)=>{
                
                return <Product item={item} addToCart={addToCart}/>
            })
         }
       

        </div>
    </div>
   
</div>
  )
}

export default ProductSection