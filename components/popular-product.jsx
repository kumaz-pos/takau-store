import React from 'react'

function PopularProduct() {
  return (
    <div class="popular-product">
			<div class="container">
				<div class="row">

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/parts_removebg_preview.png" alt="Image" width={150} height={100} class="img-fluid"/>
							</div>
							<div class="pt-0">
								<h3>Parts</h3>
								<p style={{ color: '#002F63' }}>Air intakes, exhaust systems, suspension components, wheels, brake pads, performance chips, </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/spares_removebg_preview.png" alt="Image" width={150} height={100} className='mt-5'  class="img-fluid"/>
							</div>
							<div class="pt-0">
								<h3>Body Parts</h3>
								<p style={{ color: '#002F63' }}>These include parts like doors, fenders, hoods, bumpers, and spoilers. </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/engine_removebg_preview.png?t=2024-07-03T09%3A11%3A38.202Z" alt="Image" width={150} height={100}  class="img-fluid"/>
							</div>
							<div class="pt-0">
								<h3>Gear Box</h3>
								<p style={{ color: '#002F63' }}>Japan Direct offers a wide variety of gearboxes for all cars from Japan.</p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
  )
}

export default PopularProduct