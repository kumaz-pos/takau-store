"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState,useEffect } from 'react'
//import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer,toast } from 'react-toastify'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
 function Signup() {

  const router= useRouter()
const [name, setname] = useState("")
const [surname, setsurname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
  const supabase= createClientComponentClient()
 
  async function onSignup(e) {
    e.preventDefault()
    if (password!==confirmPassword) {
      toast.error("password and confirm password should be similar")
    }
    const {error,data}= await supabase.auth.signUp({
     
      password:password,
      email:email
    });
    console.log(data);
    if (error) {
      console.log(error);
    }else{
      console.log(data);
    }
}
  return (
    <>
    <ToastContainer/>
      <div class="hero">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-5">
                <div class="intro-excerpt">
                    <h1>Welcome to Takau Store</h1>
                </div>
            </div>
            <div class="col-lg-7">
                
            </div>
        </div>
    </div>
</div>
<div class="untree_co-section">
    <div class="container ">
    
      <div class="">
        <div class="">
          <h2 class="d-flex justify-content-center  text-black">Sign up</h2>
          <div class="p-3 p-lg-2 border bg-white ">
            <form onClick={onSignup} className=''>
         
           <div class="form-group row">
              <div class="col-md-6">
                <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                <input id="surname" name="surname" onChange={(e)=>setname(e.target.value)}  value={name} type="text" class="form-control" />
              </div>
              
            </div>
<div className="form-group row">
<div class="col-md-6">
                <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                <input onChange={(e)=>setsurname(e.target.value)} value={surname} type="text" class="form-control" id="surname" name="surname"/>
              </div>
</div>
            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_companyname" class="text-black">Email </label>
                <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" class="form-control" id="email" name="email"/>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_address" class="text-black">Password <span class="text-danger">*</span></label>
                <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" class="form-control" id="password" name="password" placeholder=""/>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_address" class="text-black">Confirm Password <span class="text-danger">*</span></label>
                <input onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder=""/>
              </div>
            </div>
            <br />
            <button class="btn btn-black btn-md btn-block" onClick={
onSignup
            }>Sign up</button>
           

      
        
            </form>
         
           
            



            

          </div>
        </div>
       
      </div>
     
    </div>
  </div>
    </>
  

  )
}

export default Signup