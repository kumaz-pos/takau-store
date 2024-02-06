"use server"
import supabase from "@/helpers/supabase";
import { revalidatePath } from "next/cache"


async function getProduct(product_id) {
    const {data,error}= await supabase.from("Takau").select().eq("id",product_id).maybeSingle();
    if (data) {
       
        return data
    }else{
        console.log(error);
        return error
    }
   // console.log(data);
}

export async function addToCart(formData) {

    
    let product_id=formData.get("id");
    let product=await getProduct(product_id)

    const {data,error}= await supabase.from("Cart").select().eq("product_id",product.id).maybeSingle();
    if (data) {
        console.log("product exists");
    }else{
        const response= await supabase.from("Cart").insert([
            {
                product_id:product.id,part_name:product.PartName,car_name:product.CarName,price:product.SellingPrice,item_price:product.SellingPrice*1
            }
        ])
        revalidatePath("/")

    }



 
    
}


export async function updateCart(formData) {
    console.log(formData);
    let productId= formData.get("id");
    let quantity=formData.get("quantity");
    let product= await getProduct(productId);
    let cartItem= await getCartItem(productId)
    const {data,error}=await supabase.from("Cart").update({
quantity,item_price:product.SellingPrice*quantity
    }).match(productId)
}

export async function emptyCart() {
  
    const {data,error}=await supabase.from("Cart").delete("*");
}

export async function getCartItem(id) {
    
    const {data,error}= await supabase.from("Cart").select("*").eq("id",id).maybeSingle();
    if (data) {
        return data
    }
    else{
        console.log("error");
    }
}
export async function getCart() {
    
    const {data,error}= await supabase.from("Cart").select("*");
    console.log(response);

    try {
        return data
    } catch (error) {
        return error
    }
    //console.log(data);
    /*
    if (data) {
        return data
    }
    else{
       return error
    }
    */
}


export async function handleChange(formData) {
    let item=formData.get("item");
    let id=formData.get("id");
    let quantity=formData.get("quantity")
    let price=formData.get("price")
  
console.log(formData);
    const {data,error}=await supabase.from("Cart").update({
        quantity,item_price:price*quantity
          }).match({id})
          console.log(data);
          revalidatePath("/")
  }
  export async function removeItem(formData) {
    let id=formData.get("id");
    console.log(id);
    let {data,error}=await supabase.from("Cart").delete().eq("id",id)
    console.log(data);
    revalidatePath("/cart")
  }

