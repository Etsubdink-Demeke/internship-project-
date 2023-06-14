// importing the mongoose library
const mongoose= require("mongoose");
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
    date: {
        type:String
    }

 })
 module.exports = mongoose.model('complaint', complaintSchema);