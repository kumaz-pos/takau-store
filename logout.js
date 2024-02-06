import axios from "axios"
const logout=async()=>{
    try {
     await axios.get("/api/logout")
    } catch (error) {
        console.log("error");
    }
}

export default logout