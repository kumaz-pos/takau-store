import React from 'react'
import Orders from './orders'
import supabase from "@/helpers/supabase";
async function Page() {
    const {data,error}= await supabase.from("Ecommerce-order").select("*");
console.log(data);
  return (
    <>
<Orders data={data} error={error}/>
    </>
  )
}

export default Page