//Importing express-async-handler
const asyncHandler = require("express-async-handler"); 

/*
  =============================================================================
 NB:express-async-handler is Simple middleware for handling exceptions 
 inside of async express routes and passing them to your express error handlers.
  =============================================================================
*/



const complaintModel = require("../models/complaint.model");
//Importing the UUIDv4 Library
const { v4: uuidv4 } = require('uuid');
//Get all complaints async function 
const get = asyncHandler(async (req, res) => {

    //Fetching all complaints from the database and assigning it to complaints
    const complaints = await complaintModel.find();

    //Responding the data to any request made
    return res.status(200).json({
        success: true,
        data: complaints.reverse()
    })
    //I use .reverse() function to get the latest datas at first  
}
);

//Get Single complaint
const show = asyncHandler(async (req, res) => {
    //Destructing id from req.params
    const { id } = req.params

    //Fetching single complaint using the id in the req.params from the database and assigning it to complaint
    const complaint = await complaintModel.findOne({ complaintId: id });

    try {
        if(complaint){

            //Responding the data to any request made
            return res.status(200).json({
                success: true,
                data: complaint
            })
        }
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
}
);

const create = asyncHandler(async (req, res) => {
    //Destruct the data sent from req.body 
    const { name, description, destination,date } = req.body

    //we use uuidv4 to generate a random and unique id for the complaints
    const complaintId = uuidv4();

    try {
        //creating the complaint
        const complaint = await new complaintModel({
            complaintId: complaintId,
            name: name,
            description: description,
            destination:destination,
            date: date
        })
        //save the complaint
        complaint.save();

        return res.status(201).json({
            success: true,
            message: "complaint created sucessfully",
            data: complaint
        })
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
});
const update = asyncHandler(async (req, res) => {
    //Destruct the data sent from req.body 
    const { name, description,destination, date } = req.body

    //Destructing the id from req.params
    const { id } = req.params

    //assigning the specfic product to variable called complaint
    let complaint = await complaintModel.findOne({ complaintId: id });

    try {

        if (complaint) {
            //updating the datas of that complaint
            complaint.updateOne(
                {
                    $set: {
                        name: name,
                        description: description,
                        destination:destination,
                        date: date,
                    }
                },
                {}, { new: true }
            )

            return res.status(201).json({
                success: true,
                message: "complaint updated sucessfully",
                data: complaint
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "complaint not found",
            })
        }

    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    } 
});

//Delete a single complaint
const deleteComplaint = asyncHandler(async (req, res) => {
    //Destructing id from req.params
    const { id } = req.params

    try {

    //Fetching single complaint using the id in the req.params from the database and assigning it to complaint
    await complaintModel.deleteOne({ complaintId: id });

    //Since there is no data to be responde we simple send a message
    return res.status(410).json({
        success: true,
        message: "complaint deleted sucessfully",
    })

    } catch (error) {
            return res.status(412).send({
                success: false,
                message: error.message
            })
        }
    
})
module.exports = {
    get,
    show,
    create,
    update,
    deleteComplaint,
}