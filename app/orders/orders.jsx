"use client"
import React from 'react'

function Orders({data,error}) {

  return (
    <div className=''>
    <div className='px-10 text-xl py-4 text-slate-400  bg-slate-200'>Your Order History</div>
    <div className='bg-purple-100  px-10 h-full flex'>
      
    <table className='border-seperate-none w-full '>
  <thead>
    <tr className='border-none w-full ' >
      <th className='text-red-700 border-none ' scope="col">Order Id</th>
      <th  className='text-red-700'  scope="col">Delivery Fee</th>
      <th  className='text-red-700'  scope="col">Paid status</th>
      <th  className='text-red-700'  scope="col">Delivery status</th>
      <th  className='text-red-700'  scope="col">Payment Method</th>
      <th  className='text-red-700'  scope="col">Total Fee</th>

    </tr>
  </thead>
  
  {
    data.map((item)=>{
return   <tr key={item.id}>
<td className='text-[#002F63] border-none ' scope="row">{item.id}</td>
<td className='text-[#002F63]'>{item.deliveryFee}</td>
<td><span className='text-[#002F63]'>{item.paid}
    </span> </td>
<td >
<span className='text-[#002F63]'>{item.order_status}</span>

</td>
<td>
<span className='text-[#002F63]'>{item.paymentMethod}</span>
</td>
<td>
<span className='text-[#002F63]'>{item.totalFee}</span>
</td>
</tr>
    })
  }

  
  

</table>
</div>
</div>
  )
}

export default Orders