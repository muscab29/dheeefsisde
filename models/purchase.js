import mongoose from "mongoose";
const purchase = new mongoose.Schema({
 
  amount: {
    type: Number,
    default:100
   
   
  },
  purchaseItem:{
    type:String
  },
  creditInfo:{
    type:"string"
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },



}, { timestamps: true });



export default mongoose.model("Purchase", purchase);
