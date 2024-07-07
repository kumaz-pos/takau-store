import React from 'react'

function Footer() {
  return (
    <footer class="footer-section">
    <div class="container relative">

        <div class="sofa-img">
            <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Hondafit.png" style={{ marginTop: '150px' }} alt="Image" class="img-fluid"/>
        </div>

        <div class="row">
            <div class="col-lg-8">
                <div class="subscription-form mt-15">
                    <h3 class="d-flex align-items-center"><span class="me-1"><img  className='mt-20 lg:mt-0' src="images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span className='mt-20 lg:mt-0'>Subscribe to Newsletter</span></h3>

                    <form action="#" class="row g-3">
                        <div class="col-auto">
                            <input type="text" class="form-control" placeholder="Enter your name"/>
                        </div>
                        <div class="col-auto">
                            <input type="email" class="form-control" placeholder="Enter your email"/>
                        </div>
                        <div class="col-auto">
                            
                            <button class="btn btn-primary">
                                <span class="fa fa-paper-plane"></span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

        <div class="row g-5 mb-5">
            <div class="col-lg-4">
                <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Japan Direct<span>.</span></a></div>
                <p class="mb-4">If you have any questions, comments, or concerns, please feel free to reach out to us using the following contact details.
94 Prince Edward Street
Milton Park Harare Zimbabwe

</p>

                <ul class="list-unstyled custom-social">
                    <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
                    
                    <li><a href="https://wa.me/"><span class="fa fa-brands fa-whatsapp"></span></a></li>
                    <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
                   
                </ul>
            </div>

            <div class="col-lg-8">
                <div class="row links-wrap">
                    <div class="col-6 col-sm-6 col-md-3">
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-sm-6 col-md-3">
                        <ul class="list-unstyled">
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Cart</a></li>
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
  )
}

export default Footer