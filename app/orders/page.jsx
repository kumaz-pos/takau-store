import React from 'react'
import Orders from './orders'
import supabase from "@/helpers/supabase";
import Navbar from '@/components/navbar';
async function Page() {
    const {data,error}= await supabase.from("Ecommerce-order").select("*");
console.log(data);
  return (
    <div>
    <Navbar/>
<Orders data={data} error={error}/>
</div>
  
  )
}

export default Page