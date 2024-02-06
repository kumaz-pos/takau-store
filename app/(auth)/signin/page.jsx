"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Signin() {
  const router= useRouter()
  const [user, setuser] = useState({
    email:"",
  
    password:""
   
      });
      const [loading, setloading] = useState(false)

      async function onSignIn() {
        try {
          setloading(true)

          const response= await axios.post("/api/signin",user);
          router.push("/cart")
        } catch (error) {
          console.log("error");
        }finally{
          setloading(false)
        }
      }
  return (
    <>
      <div class="hero">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-5">
                <div class="intro-excerpt">
                    <h1>Welcome to Takau Store</h1>
                </div>
            </div>
            <div class="col-lg-7">
                {
                  loading && <h1>
                    Loading....
                  </h1>
                }
            </div>
        </div>
    </div>
</div>
<div class="untree_co-section">
    <div class="container ">
    
      <div class="">
        <div class="">
          <h2 class="d-flex justify-content-center  text-black">Sign in</h2>
          <div class="p-3 p-lg-2 border bg-white ">
            <div className=''>
         
    
            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_companyname" class="text-black">Email </label>
                <input onChange={(e)=>setuser({...user,email:e.target.value})} value={user.email} type="email" class="form-control" id="c_companyname" name="c_companyname"/>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-6">
                <label for="c_address" class="text-black">Password <span class="text-danger">*</span></label>
                <input onChange={(e)=>setuser({...password,password:e.target.value})} type="password" class="form-control" id="c_address" name="c_address" placeholder=""/>
              </div>
            </div>
            <br />
            <button class="btn btn-black btn-md btn-block" onclick="window.location='thankyou.html'">Signin</button>
           

      
        
            </div>
         
           
            
          





            

          </div>
        </div>
       
      </div>
     
    </div>
  </div>
    </>
  

  )
}

export default Signup