import React from 'react'
import Cart from "./cart"
import supabase from "@/helpers/supabase";
import Navbar from '@/components/navbar';
async function Page() {
    const {data,error}= await supabase.from("Cart").select("*");
    console.log(data);
  return (
    <>
    <Navbar/>
    <Cart data={data} error={error}/>
    </>
   
  )
}

export default Page