"use client"
import React from 'react'

import { useState } from 'react'
function Product({item,addToCart}) {
    const [showInput, setShowInput] = useState(false)
  return (
    <>
   
   
    <div key={item.id} class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
    <a class="product-item">
        <img src="images/product-1.png" class="img-fluid product-thumbnail"/>
        <h3 class="product-title">{item.PartName} - {item.CarName}  {item.Model}</h3>
        <strong class="product-price">${item.SellingPrice}</strong>
<form  action={addToCart}>
<input type="hidden" name='id' value={item.id}/>
<button  type='submit' class="icon-cross">
            <img src="images/cross.svg" class="img-fluid"/>
        </button>
</form>
        
    </a>
</div> 

    </>

  )
}

export default Product