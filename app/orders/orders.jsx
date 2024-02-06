"use client"
import React from 'react'

function Orders({data,error}) {

  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Delivery Fee</th>
      <th scope="col">Paid status</th>
      <th scope="col">Delivery status</th>
      <th scope="col">Payment Method</th>
      <th scope="col">Total Fee</th>

    </tr>
  </thead>
  <tbody>

  </tbody>
  {
    data.map((item)=>{
return   <tr key={item.id}>
<th scope="row">{item.id}</th>
<td>{item.deliveryFee}</td>
<td><span className='text-danger'>{item.paid}
    </span> </td>
<td >
<span className='text-danger'>{item.order_status}</span>

</td>
<td>
<span className='text-danger'>{item.paymentMethod}</span>
</td>
<td>
<span className='text-success'>{item.totalFee}</span>
</td>
</tr>
    })
  }

  
  

</table>
  )
}

export default Orders