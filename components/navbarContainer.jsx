import React from 'react'
import Navbar from './navbar';
import supabase from "@/helpers/supabase";
async function NavbarContainer() {
    const data= await supabase.from("Cart").select("*");
  return (
    
    <Navbar data={data}/>
    
  )
}

export default NavbarContainer