import {connect} from "../../dbConfig/dbConfig"
import Users from "@/model/users"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
connect()


export async function POST(req) {
    try {
     const reqBody= await req.json();
     const {password,email}=reqBody;
     const existingUser= await Users.findOne({email})
     if (!existingUser) {
        return NextResponse.json({error:"User does not  exist"},{status:400})
     }
   const validPassword= await bcryptjs.compare(password,existingUser.password);
   if (!validPassword) {
    return NextResponse.json({error:"Invalid password"},{status:401})
   }
   const tokenData={
    id:existingUser._id,
    name:existingUser.name,
    surname:existingUser.surname,
    email:existingUser.email
   }
   const token=  jwt.sign(tokenData,process.env.SECRET_SOMETHING,{expiresIn:"1d"})
    
     
const response= NextResponse.json({
    message:"Login succesful",
    success:true
 
    

})
response.cookies.set("token",token,{
    httpOnly:true
})
return response
    } catch (error) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}