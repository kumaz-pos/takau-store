"use client"
import React from 'react'
import { useState } from 'react'
function QuantityComponent({itemQuantity}) {
    const [quantity, setquantity] = useState(itemQuantity)
  return (
    <input value={quantity}  class="form-control form-control-sm my-2 mr-3" onChange={(e)=>setquantity(e.target.value)}    type="number" name='quantity'  placeholder= {itemQuantity} required=""/>  
  )
}

export default QuantityComponent