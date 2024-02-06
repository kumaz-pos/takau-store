"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import { addAddress } from '@/server-actions/address'
import Link from 'next/link'
import axios from 'axios'
import supabase from "@/helpers/supabase";
import { useState,useEffect } from 'react'
//import {increment,decrement} from "./getData"

import { useRouter } from 'next/navigation'
import { handleChange,removeItem } from '@/server-actions/addToCart';


 function Cart({data,error}) {
  console.log(data);

const [quantity, setquantity] = useState(0);
const [returnValue, setreturnValue] = useState("");


const [address, setaddress] = useState("")
const [street, setstreet] = useState("")
const [surbub, setsurbub] = useState("")

const router= useRouter()
const [city, setcity] = useState("")

const [alreadyExistingData, setalreadyExistingData] = useState([])

const [paymentMethod, setpaymentMethod] = useState("")
//const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value})

console.log(paymentMethod);
async function updateItem(e,item) {
  let id= item.id

  e.preventDefault();
  const {data,error}=await supabase.from("Cart").update({
    quantity,item_price:item.item_price*quantity
      }).match({id})
  
}


console.log(addAddress.message);



let deliveryFee=80
let subTotal= data.reduce( ( sum , cur ) => sum + (cur.price*cur.quantity) , 0);
let total= subTotal+deliveryFee;

let invoiceNumber=Math.random()
let items=data
let info={items,invoiceNumber}
async function onCheckout() {
  try {
  

 
      const {data}=   await axios.post(`/api/payment`,info);
  
  
      console.log(data);
    
      let storePollUrl= await supabase.from("Pollurls").insert([{pollUrl:data.pollUrl}]);
    
      console.log(storePollUrl);
      if (data.success===true) {
    //      toast.success("Please note that you are being redirected to the paynow page")
    
    localStorage.setItem("pollUrl", JSON.stringify(data.pollUrl));
    
    
         // window.open(data.redirectUrl)
         window.location.href=data.redirectUrl
          
    
        
          //
      }
          
    
  
  // console.log(data);
   
  } catch (error) {
      console.log(error);
      
  }
  
         
      }
async function onCashPayment() {
  try {


    let {data,error}= await supabase.from("Ecommerce-order").insert([
      {
        deliveryFee,paid:"not paid",paymentMethod,order_status:"not delivered",totalFee:total
      }
    ])
    console.log(data);
  // console.log(data);
   
  let response= await supabase.from("Cart").delete();
  console.log(response.error);
 router.push("/orders")

  } catch (error) {
      console.log(error);
      
  }
  
         
      }
      
  




    return (
   
      <div class="container pb-5 mb-2">
        
          <div class="alert alert-info alert-dismissible fade show text-center mb-30"><span class="alert-close" data-dismiss="alert"></span><i class="fe-icon-award"></i>&nbsp;&nbsp;With this purchase you will earn <strong>2,549</strong> Reward Points.</div>
        {
          data.map((item)=>{
return <div class="cart-item d-md-flex justify-content-between">
  <span class="remove-item">
    <form action={removeItem}>
   
    <button className='border-0' type='submit'>
    <i class="fa fa-times"></i>
    </button>
    <input name='id' type="text"  hidden value={item.id}/>
    </form>
    
    </span>
<div class="px-3 my-3">
    <a class="cart-item-product" href="#">

        <div class="cart-item-product-info">
            <h4 class="cart-item-product-title">{item.part_name}</h4><span><strong>Car name:</strong> {item.car_name}</span><span></span>
        </div>
    </a>
</div>
<div class="px-3 my-3 text-center">
    <div class="cart-item-label">Quantity</div>
    <div class="count-input">
  <form action={handleChange}>
  <input  class="form-control form-control-sm my-2 mr-3" onChange={(e)=>setquantity(e.target.value)}  value={quantity}  type="number" name='quantity'  placeholder= {item.quantity} required=""/>                 
  
                  
  <input hidden  class="form-control form-control-sm my-2 mr-3" type="text" name='id' value={item.id} placeholder= {item.id} required=""/>                 
  <input hidden   class="form-control form-control-sm my-2 mr-3" type="text" name='price' value= {item.price} placeholder= {item.price} required=""/>                 
                 
                  <button class="btn   btn-sm " type="submit">Update</button>
  </form>
                 
                
    </div>
</div>
<div class="px-3 my-3 text-center">
    <div class="cart-item-label">Subtotal</div><span class="text-xl font-weight-medium">${item.item_price}</span>
</div>

</div>
          })
        } 
          
      

          <div class="d-sm-flex justify-content-between align-items-center text-center text-sm-left">
              <form action={addAddress} class="form-inline py-2">
                  <label class="sr-only">House Number</label>
                  <input onChange={(e)=>setaddress(e.target.value)} name='address' class="form-control form-control-sm my-2 mr-3" type="text" placeholder="House number" required=""/>
                 
                  <label class="sr-only">Street</label>
                  <input onChange={(e)=>setstreet(e.target.value)} name='street' class="form-control form-control-sm my-2 mr-3" type="text" placeholder="Street" required=""/>
                 
                  <label class="sr-only">Surburb</label>
                  <input  onChange={(e)=>setsurbub(e.target.value)} name='surburb'class="form-control form-control-sm my-2 mr-3" type="text" placeholder="Surburb" required=""/>
                 
                  <label class="sr-only">City</label>
                  <input onChange={()=>setcity(e.target.value)}  name='city' class="form-control form-control-sm my-2 mr-3" type="text" placeholder="City" required=""/>
                 
                  <button class="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0" type="submit">Add Address</button>
              </form>
              <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Subtotal:</span><span class="d-inline-block align-middle text-xl font-weight-medium">${subTotal}</span></div>
              <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Delivery Fee:</span><span class="d-inline-block align-middle text-xl font-weight-medium">${deliveryFee}</span></div>
              <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Total:</span><span class="d-inline-block align-middle text-xl font-weight-medium">${total}</span></div>
          </div>
        
          <hr class="my-2"/>
          <div class="row pt-3 pb-5 mb-2">
          <div>
              <label htmlFor="">Cash on delivery</label>
              <input value="cash on delivery"  onChange={(e)=>setpaymentMethod(e.target.value)} name='payment-method' type="radio" />
              <label htmlFor="">Paynow</label>
              <input value="paynow" onChange={(e)=>setpaymentMethod(e.target.value)} name='payment-method'type="radio" />
             </div>
              <div class="col-sm-6 mb-3">
                
              {
                paymentMethod === "cash on delivery" ? 
                <button class="btn btn-style-1 btn-primary btn-block"  onClick={onCashPayment}><i class="fe-icon-credit-card"></i>&nbsp;Pay with cash on delivery</button> 

    :     <button onClick={onCheckout} class="btn btn-style-1 btn-primary btn-block" ><i class="fe-icon-credit-card"></i>&nbsp;Paynow</button>
              }
              
                  {
    paymentMethod === "paynow" && <p>  Please note that using Paynow will attract some fees from Paynow </p>
  }
                </div>
          </div>
      
             
          </div>
       
 
      )
 
 
}

export default Cart



{
  /**<div>
  <div class="container padding-bottom-3x mb-1">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    <div class="table-responsive shopping-cart">
     
         
             <p>
   Sub total        {  subTotal}
             </p>

             {

             }

             <form action={addAddress}>

              <div> <label htmlFor="">Address</label>
              <input name='houseNumber' value={address} onChange={(e)=>setaddress(e.target.value)} type='text' /></div>
              <div> <label htmlFor="">Street</label>
              <input  name='street' value={street} onChange={(e)=>setstreet(e.target.value)} type='text' /></div>
              <div> <label htmlFor="">Surbub</label>
              <input  name='surburb' value={surbub} onChange={(e)=>setsurbub(e.target.value)} type='text' /></div>
              <div> <label htmlFor="">City</label>
              <input  name='city' value={city} onChange={(e)=>setcity(e.target.value)} type='text' /></div>
             <button>
              Add Address
             </button>
             </form>
             <div>
              <label htmlFor="">Cash on delivery</label>
              <input value="cash on delivery"  onChange={(e)=>setpaymentMethod(e.target.value)} name='payment-method' type="radio" />
              <label htmlFor="">Paynow</label>
              <input value="paynow" onChange={(e)=>setpaymentMethod(e.target.value)} name='payment-method'type="radio" />
             </div>
             <div>
              Delivery cost :80
             </div>
             Total : {
             total
             }
             <div>

  {
    paymentMethod === "paynow" && <p>  Please note that using Paynow will attract some fees from Paynow </p>
  }
 

              {
                paymentMethod === "cash on delivery" ?  <button onClick={()=>onCashPayment()} >
                Place Order
              </button> :<button onClick={()=>onCheckout()}>
                Paynow
              </button>
              }
              
              
             </div>
      </div>


      </div>
      </div> */
}