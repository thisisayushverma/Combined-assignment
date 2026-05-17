import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    householdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Household",
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  },
);


userSchema.methods.generateAccessToken = function (){
  return jwt.sign({
    _id:this._id,
    email:this.email,
    householdId:this.householdId
  },
  process.env.ACCESS_TOKEN,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}


userSchema.methods.generateRefreshToken = function (){
  return jwt.sign({
    _id:this._id
  },
  process.env.REFRESH_TOKEN,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  })
}

const User = mongoose.model("User", userSchema);

export default User;
