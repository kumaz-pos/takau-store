"use server"

import supabase from "@/helpers/supabase";
import { revalidatePath } from "next/cache";
export async function addAddress(formData) {
    
    let houseNumber=formData.get("houseNumber");
    let street= formData.get("street");
    let surburb=formData.get("surburb");
    let city= formData.get("city");
    console.log(city);
    let {data,error}= await supabase.from("Address").insert([{
        houseNumber,street,surburb,city
    }])
    return data
    console.log(error);
    revalidatePath("/cart")

}
export async function updateAddress(formData) {
    let id= formData.get("id")
    let address=formData.get("address");
    let street= formData.get("street");
    let surbub=formData.get("surbub");
    let city= formData.get("city");
    let {data,error}= await supabase.from("address").update({
        address,street,surbub,city
    }).match(id)
    revalidatePath("/cart")

}