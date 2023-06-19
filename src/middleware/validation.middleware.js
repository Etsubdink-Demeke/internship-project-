//Importing the validate.js from utils
const validator = require("../utils/validate")

//creating complaint validation
const complaintSchema = async (req, res, next) => {
   //creating the validation rule for every input field
    const validateRule = {
        "name": "required|string", 
        "description": "required|string", 
        "destination":"required|string",
        "date":"required"
    }


    await validator(req.body, validateRule, {}, (err, status) =>{
        if (!status){
            res.status(412)
            .send({
                success: false,
                    message: 'Validation failed',
                    data: err
            })
        
        } else {
            next();
        }
    }).catch(err => console.log(err))
}


module.exports = {
    complaintSchema
} 