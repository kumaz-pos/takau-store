import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    surname:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const Users=mongoose.model.users||mongoose.model("users",userSchema)
export default Users