// importing the mongoose library
const mongoose= require("mongoose");
//using mongoose to create complaint schema
const complaintSchema= mongoose.Schema({
    complaintId:{
        type:String
    },
    name:{
        type:String 
    },
    description:{
        type:String
    },
    destinaion:{
        type:String
    },
    date: {
        type:String
    }

 })
 //exporting the complaint schema
 module.exports = mongoose.model('complaint', complaintSchema);