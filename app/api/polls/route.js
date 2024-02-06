
import {NextResponse,NextRequest} from "next/server";
import supabase from "@/helpers/supabase";
import {Paynow} from "paynow"

export async function OPTIONS(req) {
  const origin = req.headers.get('origin')

  return new NextResponse(null, {
      status: 204,
      headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
  })
}

export async function POST(req,res) {

  try {
    const body=await req.json();
    console.log(req);
    const {pollUrl}=body;

 let paynow = new Paynow(process.env.PAYNOW_INTERGRATION_ID, process.env.PAYNOW_INTERGRATION_KEY);  
 
 
 
   paynow.resultUrl = "http://example.com/gateways/paynow/update";
 
 
 
 
 paynow.returnUrl = "http://localhost:3000/cart";
  
  
 
  
 
 
 let status =await paynow.pollTransaction(pollUrl);
 
 
 
console.log(status);
   
 


 
   return NextResponse.json({req});
   
  } catch (error) {
  return NextResponse.error({error:"eror"},{status:500})
   
  }
 }
 
