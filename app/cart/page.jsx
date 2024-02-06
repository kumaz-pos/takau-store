import React from 'react'
import Cart from "./cart"
import supabase from "@/helpers/supabase";
async function Page() {
    const {data,error}= await supabase.from("Cart").select("*");
    console.log(data);
  return (
   <Cart data={data} error={error}/>
  )
}

export default Page