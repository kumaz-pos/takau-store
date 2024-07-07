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
									<p style={{ color: '#002F63' }}>At Japan Direct, we are committed to providing our customers with the highest quality car parts available. We source our parts directly from Japan, ensuring that you receive genuine OEM parts or high-quality aftermarket parts that meet the strictest standards. Our parts are rigorously tested to ensure that they meet or exceed the performance and durability of the original parts.	</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<LuShoppingBag size={40} color='red' />
									</div>
									<h3>Easy to Shop</h3>
									<p style={{ color: '#002F63' }}>We understand that shopping for car parts can be a daunting task. That's why we've made our website easy to navigate and use. You can browse our extensive catalog by car make, model, and year, or you can use our search bar to find the specific parts you need. We also offer a variety of helpful guides and resources to help you make informed decisions..</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<HiOutlineSupport size={40} color='red'/>
									</div>
									<h3>24/7 Support</h3>
									<p style={{ color: '#002F63' }}>Our knowledgeable and friendly customer support team is available 24/7 to answer your questions and help you find the right parts for your car. We can also provide you with installation instructions and troubleshooting assistance.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<FaRepeat size={40} color='red'/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p style={{ color: '#002F63' }}>We are confident that you will be satisfied with your purchase from Japan Direct. However, if you are not happy with your order for any reason, you can return it for a full refund within 30 days of purchase. We make the return process easy and hassle-free so that you can shop with confidence.</p>
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