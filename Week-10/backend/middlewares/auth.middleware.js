import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler((req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            staus:401,
            error:"Unauthorized access",
            data:null
        })
    }

    const accessToken = token.split(" ")[1];
    const decoded = jwt.verify(accessToken,process.env.ACCESS_TOKEN);

    if(!decoded){
        return res.status(401).json({
            staus:401,
            error:"Unauthorized access",
            data:null
        })
    }
    console.log("decoded",decoded);
    
    req.user = decoded;
    next();
})


export {
    authMiddleware
}