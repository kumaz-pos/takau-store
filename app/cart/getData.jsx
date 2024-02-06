import supabase from "@/helpers/supabase";

export async function getCartItem(id) {
let {data,error}= await supabase.from("Cart").select("*").eq("id",id).maybeSingle();
if (data) {
  return data
}else{
  return error
}
}

export async function increment(id,quantity) {
 

  let cartItem= await getCartItem(id);
  const {data,error}=await supabase.from("Cart").update({
quantity,item_price:cartItem.price*quantity
  }).match(id)
  console.log(data);
  //revalidatePath("/")

}
export async function decrement(id,quantity) {
  console.log(formData);



  const {data,error}=await supabase.from("Cart").update({
quantity,item_price:product.SellingPrice*quantity
  }).match(id)
  //revalidatePath("/")

}

export async function getData() {
  const {data,error}= await supabase.from("Cart").select("*");
  if (data) {
    return data
  }else{
    return error
  }
}