import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        let connection= mongoose.connection;
        connection.on("connected",()=>{
            console.log("connected");
        })
        connection.on("error",(error)=>{
console.log(`error ${error}`);
process.exit(1)
        })
    } catch (error) {
        console.log(error);
    }
}