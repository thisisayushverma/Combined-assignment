import mongoose from "mongoose";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcryptjs from "bcryptjs";

const registerHandler = asyncHandler(async(req,res)=>{
    const {email , name, password} = req.body;
    // console.log("req",req);
    
    if(!email || !name || !password){
        return res.status(400).json({
            status: 400,
            error : "Invalid Credentials",
        })
    }

    const checkUserExist = await User.findOne({
        email
    })

    console.log("checkUserExist",checkUserExist);

    if(checkUserExist){
        return res.status(400).json({
            status: 400,
            error : "User already created",
        })
    }

    const hashedPassword = await bcryptjs.hash(password,10);
    const createduser = await User.create({email,name,password:hashedPassword});

    if(!createduser){
         return res.status(500).json({
            status: 500,
            error : "Server Error",
        })
    }
    const finalUserDetials = createduser.toObject();
    delete finalUserDetials.password;
    delete finalUserDetials.__v;
    console.log("user created",createduser);
    
    return res.status(201).json({
        status:201,
        data:{
            userDetails : finalUserDetials
        },
        error:null
    })

})

const loginHandler = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            status: 400,
            error : "Invalid Credentials",
        })
    }

    const existedUser = await User.findOne({email}).select("+password");

    if(!existedUser){
        return res.status(400).json({
        status: 400,
        error : "Invalid Credentials",
        })
    }

    const comparePassword = await bcryptjs.compare(password,existedUser.password);

    if(!comparePassword){
        return res.status(400).json({
        status: 400,
        error : "Invalid Credentials",
    })
    }
    console.log("date",existedUser);
    

    const accessToken = existedUser.generateAccessToken();
    const refreshToken = existedUser.generateRefreshToken();

    res.cookie("token",refreshToken,{
        httpOnly:true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.setHeader("Authorization",`Bearer ${accessToken}`)

    return res.status(200).json({
        status:200,
        data:{
            message : "login successfully"
        },
        error:null
    })

})


const getUser = asyncHandler(async (req,res)=>{
    const {_id} = req.user;
    console.log("id - ",_id);
    
    if(!_id){
        return res.status(401).json({
            status:401,
            data:null,
            error: "Unauthorized access"
        })
    }

    const userDetails = await User.findById(_id).select("-password");
    if(!userDetails){
        return  res.status(400).json({
            status:400,
            data:null,
            error: "Bad request"
        })
    }
    console.log("user details -",userDetails);
    
    return res.status(200).json({
        staus:200,
        data:{
            userDetails
        },
        error:null
    })


})



export {
    registerHandler,
    loginHandler,
    getUser
}