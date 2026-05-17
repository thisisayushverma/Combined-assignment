import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const idGenerator = customAlphabet('QWERTYUIOPASDFGHJKLZXCVBNM',6);


const householdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      trim: true,
    },

    inviteCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      minlength: 6,
      maxlength: 6,
      trim: true,
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    wasteScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// householdSchema.pre('save',function (next){
//   if(!this.inviteCode){
//     this.inviteCode = idGenerator();
//     console.log("invitecode -",this.inviteCode);
//   }
//   next();
// })




const Household = mongoose.model("Household", householdSchema);

export default Household;