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
//Adding Node features
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit:"50mb", extended: true}));
app.use(cors());
//Importing the connectToDB function to the index.js file as it is the main entry to the project 
app.use("/api/product", product)
//Run Node APP
module.exports = app
