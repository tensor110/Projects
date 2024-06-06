const mongoose= require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const EmployeeModel = mongoose.model("loginData", EmployeeSchema, "loginData")
module.exports = EmployeeModel