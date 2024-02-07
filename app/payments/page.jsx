import React from 'react'
import supabase from "@/helpers/supabase";
import axios from 'axios';
import {redirect} from "next/navigation"
async function getPollStatus(pollUrl) {
  try {
   
  
  const response=   await axios.get(`${process.env.LOCALHOST}/api/payment?url=${pollUrl}`);

  return response
  
  } catch (error) {
    console.log(error);
  }
}
async function Page() {
    const {data,error} = await supabase.from('Pollurls') 
.select("*") .order('created_at', { ascending: false })
.limit(1);
let singleObject= data[0];
let pollUrl= singleObject.pollUrl;




  let result= await getPollStatus(pollUrl);



 if (result.data.status==="paid") {
  let {data,error}= await supabase.from("Ecommerce-order").insert([
    {
      deliveryFee:80,paid:"not paid",paymentMethod:"Paynow",order_status:"not delivered"
    }
  ]);
  

 redirect("/")
 }
  return (
    <div>P</div>
  )
}

export default Page