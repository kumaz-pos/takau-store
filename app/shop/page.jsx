import React from 'react'
import Navbar from '@/components/navbar'
import Product from './product'
import { addToCart } from '@/server-actions/addToCart';
import supabase from "@/helpers/supabase";
import { Input } from 'postcss';
import MyCarousel from '@/components/carousel';
async function Shop() {
	const data= await supabase.from("Takau").select("*")
  return (
   <>
   
	<Navbar/>
	<div className='bg-white'>
		<div  className='bg-white px-20 flex flex-row pt-4 justify-between'>
			<div>
	<h1 className='text-red-500  w-full bg-white mb-0'>Shop</h1>
	</div>
	<div  className=' border-green-600 w-50	0 py-2'>
	<input className='px-2 py-2 border border-red-400 w-100 bg-transparent	focus:border-red-300 text-red-600 flex rounded-xl ' type='text' placeholder='Enter the car model and part name'/>
		
	</div>
	</div>
	

		

		<div className='mt-none' class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">

				  {
            data.data.map((item)=>{
                
                return <Product key={item.id} item={item} addToCart={addToCart}/>
            })
         }
		      	
				
				
				
			
				

		      	</div>
		    </div>
		</div>


	
		<footer class="footer-section">
			<div class="container relative">

				<div class="sofa-img">
				<img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Hondafit.png" style={{ marginTop: '150px' }} alt="Image" class="img-fluid"/>
    
				</div>

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
						
							

						</div>
					</div>
				</div>

				<div class="row g-5 mb-5">
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Takakou<span>.</span></a></div>
						<p class="mb-4">
						Delivering automotive excellence through quality parts and exceptional service, continuously driving innovation and customer satisfaction in the industry.

							</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div class="col-lg-8">
						<div class="row links-wrap">
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

						
						</div>
					</div>

				</div>

				<div class="border-top copyright">
					<div class="row pt-4">
						<div class="col-lg-6">
			
						</div>

						<div class="col-lg-6 text-center text-lg-end">
							<ul class="list-unstyled d-inline-flex ms-auto">
								<li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
		 </div>
	

   </>
  )
}

export default Shop