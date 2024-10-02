import React from 'react'

export default function Contact() {
  return (
    <div className='px-10 py-10  bg-white'>
    <div className='lg:px-20 flex flex-col md:flex-row '>
        <div className='flex w-full lg:w-1/2 lg:rounded-tl-xl lg:rounded-bl-xl sm:bg-green-400!important   bg-slate-400'>
     <img src="https://zpuplawsjodqxxfqxchz.supabase.co/storage/v1/object/public/Car%20parts/Hondafit.png" style={{ marginTop: '150px' }} alt="Image" class="img-fluid"/>
       
        </div>
        <div className='flex w-full lg:w-1/2 lg:rounded-tr-xl lg:rounded-br-xl px-4 py-3  bg-red-200'>
<div className='flex flex-col w-full'>
<div className=' text-2xl pt-8 text-red-600'>We'd love to hear from you! </div>
<div>

If you have any questions, comments, or concerns, please feel free to reach out to us using the following contact details.
<p className='text-[#002F63]'>94 Prince Edward Street<br></br>
Milton Park Harare Zimbabwe</p>
<p>
  <a href="tel:0786444606" className='no-underline'>0786444606</a>
</p>

</div>




<div className='flex lg:flex-row flex-col pt-4'>
<div className='w-full bg-transparent '>
<input className='bg-transparent w-full border-blue-500 border placeholder-red-500 rounded-lg text-md py-2 px-2' type='text' placeholder='enter your name'></input>
</div>
<div className='w-full lg:ml-2 bg-transparent '>
<input className='bg-transparent w-full border-blue-500 border placeholder-red-500 rounded-lg text-md py-2 px-2' type='text' placeholder='enter your surname'></input>
</div>
</div>

<div className='w-full mt-3 bg-transparent '>
<input  className='bg-transparent w-full border-blue-500 border placeholder-red-500 rounded-lg text-md py-2 px-2' type='text' placeholder='enter your email'></input>
</div>


<div className='w-full mt-3 bg-transparent '>
<input  className='bg-transparent w-full border-blue-500 border placeholder-red-500 rounded-lg text-md py-2 px-2' type='text' placeholder='enter your phone number'></input>
</div>

<div className='w-full rounded-xl mt-4 bg-transparent '>
<textarea className='bg-transparent rounded-xl border text-red-500 w-full py-4 px-2 placeholder-red-500' type='text' placeholder='Describe your issue'></textarea>
</div>

<div className='w-1/2 rounded-xl mt-4 text-center mb-4 bg-[#002F63] text-white px-2 py-2 '>
    Send
</div>

<ul class="flex flex-rows justify-between">
                    <li><a href="#"><span class="fa fa-brands fa-facebook-f text-3xl text-red-500"></span></a></li>
                    
                    <li><a href="https://wa.me/"><span color='red'  class="fa fa-brands fa-whatsapp text-3xl text-red-500"></span></a></li>
                    <li><a href="#"><span class="fa fa-brands fa-instagram text-3xl text-red-500"></span></a></li>
                   
                </ul> 

</div>
        </div>
    </div>
    </div>
  )
}
