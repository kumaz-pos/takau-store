import {connect} from "../../dbConfig/dbConfig"
import Users from "@/model/users"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
connect()


export async function POST(req) {
    try {
     const reqBody= await req.json();
     const {name,surname,password,email}=reqBody;
     const existingUser= await Users.findOne({email})
     if (existingUser) {
        return NextResponse.json({error:"User already exists"},{status:400})
     }
     const salt= await bcryptjs.genSalt(10);
     const hashedPassword= bcryptjs.hash(password,salt);
     const newUser= new Users({
        name,surname,email,password:hashedPassword
     })
     const savedUser= await newUser.save();
return NextResponse.json({
    message:"User created",
    success:true,
    user:{
        name:savedUser.name,
        surname:savedUser.surname,
        email:savedUser.email,

    }
    

})
    } catch (error) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}