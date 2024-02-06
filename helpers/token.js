import jwt from "jsonwebtoken"

export const getTokenData=(req)=>{
try {
    const token=req.cookies.get("token")?.value || "";
    const decodedToken=jwt.verify(token,process.env.SECRET_SOMETHING)
    return decodedToken
} catch (error) {
    throw new Error("Error")
}
}