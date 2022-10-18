import mongoose from "mongoose";
const demo = new mongoose.Schema({
  firstName: {
    type: "string",
    required: [true, "please enter a first name"],
    trim: true,
  },
  email: {
    type: "string",
    unique: true,
    required: [true, "please enter a email address"],
    trim: true,
  },
 bookingDate :{
    type : Date,
    required: [true, "please enter a date"],
 },
 companyName : {
   type:String,
    default:'google'
 },
 phoneNumber: {
    type:Number,
    required :[true,'please enter a phone number']
 },
 approved:{
   type:Boolean,
   default:true
 }
}, { timestamps: true });



export default mongoose.model("Demo", demo);
