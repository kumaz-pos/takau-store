
import {NextResponse,NextRequest} from "next/server";
import supabase from "@/helpers/supabase";
import {Paynow} from "paynow"
export async function POST(req,res) {

 try {
  const body=await req.json()
  const {items,invoiceNumber}=body;
  
  let paynow = new Paynow(process.env.PAYNOW_INTERGRATION_ID, process.env.PAYNOW_INTERGRATION_KEY);  
  let payment = paynow.createPayment(invoiceNumber);


  paynow.resultUrl = "http://example.com/gateways/paynow/update";




  paynow.returnUrl = "http://localhost:3000";
 
    items.map((item)=>{
      payment.add(`${item.part_name + " " +  item.part_name}`,item.item_price);
  })

  var  link ;
  const res=paynow.send(payment);
 let paymentresult=await paynow.send(payment).then(response => {
    // Check if request was successful
    if (response.success) {
      // Get the link to redirect the user to, then use it as you see fit
 link  = response.redirectUrl;
 let pollUrl = response.pollUrl;
 console.log(pollUrl);
async function createPollUrls() {
  let storePollUrl= await supabase.from("Pollurls").insert([pollUrl]);
  return storePollUrl
 }

 let responseSupabase=  Promise.resolve(createPollUrls())
console.log(responseSupabase);

 return response
    
    }
  });
 let pollUrl=await paynow.send(payment).then(response => {
    // Check if request was successful
    if (response.success) {
      // Get the link to redirect the user to, then use it as you see fit
 link  = response.redirectUrl;
 let pollUrl = response.pollUrl;

 
 return pollUrl
    
    }
  });

  let status = paynow.pollTransaction(pollUrl);
 
  
console.log(paymentresult);
  
  



  return NextResponse.json(paymentresult)
  
 } catch (error) {
  console.log("error");
  
 }

 


}
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

export async function GET(req,res) {

  try {
 let url= req.url;
 let pollUrl= url.substr(38);
 


 let paynow = new Paynow(process.env.PAYNOW_INTERGRATION_ID, process.env.PAYNOW_INTERGRATION_KEY);  
 
 
 
   paynow.resultUrl = "http://example.com/gateways/paynow/update";
 
 
 
 
 paynow.returnUrl = "http://localhost:3000/cart";
  
  
 
  
 
 
 let status =await paynow.pollTransaction(pollUrl);
 
 
 
console.log(status);
   
 


 
   return NextResponse.json(status);
   
  } catch (error) {
  return NextResponse.error({error:"eror"},{status:500})
   
  }
 }
 

