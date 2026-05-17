import { get } from "mongoose";
import Item from "../models/item.model.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getItemStatus } from "../utils/getStatus.js";

const createItems = asyncHandler(async (req,res)=>{
    const {name , category, expiryDate , quantity} = req.body || {};
    const {_id} = req.user;
    if(!name || !category || !expiryDate){
        return res.status(400).json({
            status:400,
            error:"Bad request",
            data:null
        })
    }

    const getUserDetials = await User.findById(_id);
    if(!getUserDetials){
        return res.status(404).json({
            status:404,
            error:"User not found",
            data:null
        })
    }

    if(!getUserDetials.householdId){
        return res.status(400).json({
            status:400,
            error:"Not in room",
            data:null
        })
    }

    const status = getItemStatus(expiryDate);

    const newItem = await Item.create({
        householdId:getUserDetials.householdId,
        addedBy:getUserDetials._id,
        name,
        category,
        quantity:quantity?quantity:1,
        expiryDate,
        status
    }) 

    return res.status(201).json({
        status:201,
        error:null,
        data:{
            newItem
        }
    })
})


const editItems = asyncHandler(async(req,res)=>{
    const {id} = req.params || {};
    const {_id} = req.user || {};
    const {name,category,quantity,expiryDate} = req.body || {};

    const updateFields = {};

    if (name !== undefined) {
    updateFields.name = name;
    }

    if (category !== undefined) {
    updateFields.category = category;
    }

    if (quantity !== undefined) {
    updateFields.quantity = quantity;
    }

    if (expiryDate !== undefined) {
    updateFields.expiryDate = expiryDate;
    }
    
    const item = await Item.findById(id);

    if (!item) {
        return res.status(404).json({
            status: 404,
            error: "Item not found",
            data: null
        });
    }

    if (item.addedBy.toString() !== _id.toString()) {
        return res.status(403).json({
            status: 403,
            error: "Forbidden Access",
            data: null
        });
    }

    const updatedItem = await Item.findByIdAndUpdate(
        id,
        updateFields,
        {
            new: true,
            runValidators: true
        }
    );

    return res.status(200).json({
        status:200,
        error:null,
        data:{
            updatedItem
        }
    })
})


const updateStatus = asyncHandler(async(req,res)=>{
    const {_id} = req.user || {};
    const {id} = req.params || {};
    const {status} = req.body || {};

    const allowedStatus = [
        "used",
        "wasted"
    ]

    if(!allowedStatus.includes(status)){
        return res.status(400).json({
            data:null,
            status:400,
            error:"Bad request"
        })
    }

    const getItem = await Item.findById(id);

    if(!getItem){
        return res.status(404).json({
            status:404,
            error:"Item not found",
            data:null
        })
    }

    if(getItem.addedBy.toString() != _id.toString()){
        return res.status(403).json({
            status:403,
            error:"Unauthorized Access",
            data:null
        })
    }

    const updatedItem = await Item.findByIdAndUpdate(id,
        {
            $set:{
                status
            }
        }
    )

    return res.status(200).json({
        status:200,
        error:null,
        data:{
            updatedItem
        }
    })

})

const deleteItem = asyncHandler(async (req,res)=>{
    const {_id} = req.user;
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            status:400,
            error:"Bad request",
            data:null
        })
    }

    const checkItem = await findById(id);

    if(!checkItem){
        return res.status(404).json({
            status:404,
            error:"Not found",
            data:null
        })
    }

    if(checkItem.addedBy.toString() !== _id.toString()){
        return res.status(403).json({
            status:403,
            error:"Unauthorized Access",
            data:null
        })
    }

    const deletedItem = await Item.findByIdAndDelete(id);

    return res.status(200).json({
        status:200,
        error:null,
        data:"Item deleted successfully"
    })

})

export {
    createItems,
    editItems,
    updateStatus,
    deleteItem
}