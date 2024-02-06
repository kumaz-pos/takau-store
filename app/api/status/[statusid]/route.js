import { NextRequest,NextResponse } from "next/server";
export async function GET(req,res,{params}) {

    try {
   
     
 
   console.log(params);
   /*
   let paynow = new Paynow(process.env.PAYNOW_INTERGRATION_ID, process.env.PAYNOW_INTERGRATION_KEY);  
   
   
   
     paynow.resultUrl = "http://example.com/gateways/paynow/update";
   
   
   
   
   paynow.returnUrl = "http://localhost:3000/cart";
    
    
   
    
   
   
   let status =await paynow.pollTransaction(url);
   
   
   
   if (status.paid()) {
      console.log(status);
      console.log("hello");
      
     } else {
       console.log("Why you no pay?");
       console.log("hello");
     }
     
     
   
   
   */
   
     return NextResponse.json({name:params})
     
    } catch (error) {
    return NextResponse.error({error:"eror"},{status:500})
     
    }
   }
   