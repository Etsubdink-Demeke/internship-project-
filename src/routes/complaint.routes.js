const express = require("express");

//Importing express router
const router = express.Router();
const { create, update, get, show, deleteComplaint} =  require("../controller/complaint.controller");


//Importing the product validation function from validation.middleware
const { complaintSchema } = require("../middleware/validation.middleware");


// Route for creating a product 
router.post("/create", complaintSchema, create);

//Route to update a specfic product
router.put("/update/:id", complaintSchema, update);

//route to get all products
router.get("/get", get);

//route to get or show only a specfic product
router.get("/show/:id", show);

//route to delete a specfic product
router.delete("/delete/:id", deleteComplaint); 

//Exporting the routes 
module.exports = router;
