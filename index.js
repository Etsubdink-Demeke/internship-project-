//Importing Libraries
const express = require("express")
require("dotenv").config()
const cors = require("cors") 
const path = require("path")


const app = express();
//Initalizing the express app
//Importing the connectToDB function to the index.js file as it is the main entry to the project 
const connectToDB = require("./src/config/db_config");

//calling the function or running the function
connectToDB();
//Importing the product routes module
const product = require("./src/routes/product.routes")
const complaint = require("./src/routes/complaint.routes")
const auth = require("./src/routes/auth.routes");


//Adding Node features
//using the auth route   
app.use("/api/auth", auth)
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit:"50mb", extended: true}));
app.use(cors());
//Importing the connectToDB function to the index.js file as it is the main entry to the project 
app.use("/api/product", product)
app.use("/api/complaint", complaint)
//Run Node APP
module.exports = app
