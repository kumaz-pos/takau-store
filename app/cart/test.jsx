import React from 'react'

function Test({item}) {
  return (
    <div className='bg-green-200'>
        {

              
  <tr key={item.id}>
    <td class="product-thumbnail">
      <img src="images/product-1.png" alt="Image" class="img-fluid"/>
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{item.part_name} {item.car_name}</h2>
    </td>
    <td>${item.price}</td>
    <td>
      
      <div class="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: "120px"}}>
        <div class="input-group-prepend">
       
        
    
         
       
         {quantity}
        
     
      
        </div>
      
    
    
    <form >
      <input onChange={(e)=>setquantity(e.target.value)} type="number" />
      <button onClick={async ()=> await updateItem(e,item)} type='submit'>edit</button>
    </form>
    
    
    
        
        
    
      </div>
    
     
    
    </td>
    <td>${item.item_price}</td>
    
    <td><a href="#" class="btn btn-black btn-sm">Edit</a></td>
    <td><a href="#" class="btn btn-black btn-sm">X</a></td>
    </tr>
                     
        }
         
    </div>
  )
}

export default Test