
const express = require("express");

//Importing express router
const router = express.Router();
//Importing the complaint controller
const { create, update, get, show, deleteComplaint} =  require("../controller/complaint.controller");


//Importing the complaint validation function from validation.middleware
const { complaintSchema } = require("../middleware/validation.middleware");


// Route for creating a complaint
router.post("/create", complaintSchema, create);

//Route to update a specfic complaint
router.put("/update/:id", complaintSchema, update);

//route to get all complaints
router.get("/get", get);

//route to get or show only a specfic complaint
router.get("/show/:id", show);

//route to delete a specfic complaint
router.delete("/delete/:id", deleteComplaint); 

//Exporting the routes 
module.exports = router;
