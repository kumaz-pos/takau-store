import React from 'react'

function Product({item,addToCart}) {
  return (
    <div key={item.id} class="col-12 col-md-4 col-lg-3 mb-5">
    <a class="product-item" href="#">
        <img src={item.images} class="img-fluid product-thumbnail"/>
        <h3 class="product-title">{item.PartName} - {item.CarName}  {item.Model}</h3>
        <strong class="product-price">${item.SellingPrice}</strong>

        <form  action={addToCart}>
<input type="hidden" name='id' value={item.id}/>
<button  type='submit' class="icon-cross">
            <img src="images/cross.svg" class="img-fluid"/>
        </button>
</form>
    </a>
</div> 
  )
}

export default Product