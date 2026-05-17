import mongoose from "mongoose";
import Household from "../models/household.model.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { customAlphabet } from "nanoid";

const idGenerator = customAlphabet('QWERTYUIOPASDFGHJKLZXCVBNM',6);

const createHousholds = asyncHandler(async (req,res)=>{
    const {_id, email} = req.user;
    const {name} = req.body || {};
    // console.log("req.user",req.user);

    const getUserDetails = await User.findById({_id,householdId:null});
    // console.log("user details",getUserDetails);
    
    if(!getUserDetails){
        return res.status(400).json({
            status:400,
            error:"You cannot create household.",
            data:null
        })
    }

    if(!name) {
         return res.status(400).json({
            status:400,
            error:"Insufficient Credentails.",
            data:null
        })
    }

    const inviteCode = idGenerator();
    console.log("inviteCode",inviteCode);

    const createHousehold = await Household.create({name,
        members:[_id],
        inviteCode:inviteCode
    })
    
    const updateUser = await User.findByIdAndUpdate(_id,{
        householdId:createHousehold.id
    })

    return res.status(201).json({
        status:201,
        data:{
            createHousehold
        },
        error :null
    })

})



const joinHousehold = asyncHandler(async (req,res)=>{
    const {_id,name,email} = req.user;
    const {inviteCode} = req.body || {};

    console.log("invite Code",inviteCode);
    

    if(!inviteCode || !_id){
        return res.status(400).json({
            error:"Invalid Credentials"
        })
    }

    const checkUserExist = await User.findOne({
        _id,
        householdId:null
    })

    if(!checkUserExist){
        return res.status(400).json({
            error:"You'r alredy in household"
        })
    }

    const updateHousehold = await Household.findOneAndUpdate({
        inviteCode
    },{
        $addToSet:{
            members:_id
        }
    },{
        new :true
    })

    console.log("updateHousehold",updateHousehold);

    if (!updateHousehold) {
        return res.status(404).json({
            message: "Invalid invite code"
        });
    }

    const updateUser = await User.findByIdAndUpdate({
        _id
    },{
        householdId:updateHousehold._id
    })

    
    return res.status(201).json({
        status:201,
        data:{
            updateHousehold
        },
        error:null
    })
})


const getHouseholdId = asyncHandler(async (req,res)=>{
    const {_id} = req.user || {};
    if(!_id){
        return res.status(401).json({
            status:401,
            data:null,
            error:"Unauthorized Access"
        })
    }

    const getHouseId = await User.findById({_id});
    return res.status(200).json({
        status:200,
        data: getHouseId,
        error:null
    })
})

const getAllMembers = asyncHandler(async (req,res)=>{
    const {_id} = req.user || {};

    const allMembers = await User.findById({_id}).populate({
        path:'householdId',
        populate:{
            path:"members",
            select:"name email"
        }
    })

    console.log("allmembers",allMembers);
    
    return res.status(200).json({
        status:200,
        data:{
            allMembers
        },
        error:null
    })
})

const leaveHousehold = asyncHandler(async(req,res)=>{
    const {_id,email,householdId} = req.user || {};
    if(!_id || !email){
        return res.status(401).json({
            status:401,
            data:null,
            error:"Unauthorized Access"
        })
    }

    const existedUser = await User.findById(_id);
    if(!existedUser){
        return res.status(404).json({
            status:404,
            data:null,
            error:"User not found"
        })
    }

    const finalHouseholdId = existedUser?.householdId;
    
    if(!finalHouseholdId){
        return res.status(400).json({
            status:400,
            data:null,
            error:"Bad request"
        })
    }

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        await User.findByIdAndUpdate(_id,{
            $unset:{
                householdId:1
            }
        },
        {
            session
        })

        await Household.findByIdAndUpdate(finalHouseholdId,{
            $pull:{
                members:_id
            }
        },
        {
            session
        })

        await session.commitTransaction();

        return res.status(200).json({
            status:200,
            data:"Remove Household",
            error:null
        })
    } catch (error) {
        await session.abortTransaction();
        return res.status(500).json({
            status:500,
            data:"Server Error",
            error:null
        })
    }
    finally{
        session.endSession();
    }
})

export {
    createHousholds,
    joinHousehold,
    getAllMembers,
    leaveHousehold,
    getHouseholdId
}