import React from 'react'

function PopularProduct() {
  return (
    <div class="popular-product">
			<div class="container">
				<div class="row">

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="https://static.vecteezy.com/system/resources/previews/036/048/444/non_2x/ai-generated-car-engine-isolated-on-a-transparent-background-ai-png.png" alt="Image" width={150} height={100} class="img-fluid"/>
							</div>
							<div class="pt-0">
								<h3>Engine Parts</h3>
								<p style={{ color: '#002F63' }}>Comprehensive range of engine parts designed to optimize power, efficiency, and overall vehicle performance </p>
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
								<h3>Spare Parts</h3>
								<p style={{ color: '#002F63' }}>From engine components to suspension systems, we've got you covered. </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/bodyparts-removebg-preview.png" alt="Image" width={150} height={100}  class="img-fluid"/>
							</div>
							<div class="pt-0">
								<h3>Body Parts</h3>
								<p style={{ color: '#002F63' }}>Parts like doors, fenders, hoods.</p>
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