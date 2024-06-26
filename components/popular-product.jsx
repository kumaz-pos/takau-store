import React from 'react'

function PopularProduct() {
  return (
    <div class="popular-product">
			<div class="container">
				<div class="row">

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="images/car-part-4.png" alt="Image" class="img-fluid"/>
							</div>
							<div class="pt-3">
								<h3>Parts</h3>
								<p style={{ color: '#002F63' }}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="images/car-part-5.jpg" alt="Image" class="img-fluid"/>
							</div>
							<div class="pt-3">
								<h3>Body Parts</h3>
								<p style={{ color: '#002F63' }}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
								<p><a href="#">Read More</a></p>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
						<div class="product-item-sm d-flex">
							<div class="thumbnail">
								<img src="images/clutch.png" alt="Image" class="img-fluid"/>
							</div>
							<div class="pt-3">
								<h3>Gear Box</h3>
								<p style={{ color: '#002F63' }}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
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