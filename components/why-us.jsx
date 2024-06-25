import React from 'react'
import { BsTruck } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";
import { FaRepeat } from "react-icons/fa6";

function WhyUs() {
  return (
    <div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<h2 class="section-title"  >Why Choose Us</h2>
						<p  style={{ color: '#002F63' }}>
						By choosing Japan Direct, you can be confident in the quality and reliability of our car parts, access an extensive range of products, benefit from our commitment to innovation, and experience exceptional customer service. We are dedicated to being your trusted partner in meeting your automotive needs.
							</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<BsTruck size={40} color='red'/>
									</div>
									
									<h3>Quality &amp; and Reliability:</h3>
									<p style={{ color: '#002F63' }}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<LuShoppingBag size={40} color='red' />
									</div>
									<h3>Easy to Shop</h3>
									<p style={{ color: '#002F63' }}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<HiOutlineSupport size={40} color='red'/>
									</div>
									<h3>24/7 Support</h3>
									<p style={{ color: '#002F63' }}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<FaRepeat size={40} color='red'/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p style={{ color: '#002F63' }}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src="images/car-part-5.jpg" alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
  )
}

export default WhyUs