const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginPage")

app.post('/signup', (req,res)=>{ 
    const newUser = new EmployeeModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
    EmployeeModel.create(newUser)
    .then(employees=> res.json(employees))
    .catch(err=> res.json(err))
})

app.post("./login",async(req,res)=>{
    try{
        const check = await EmployeeModel.findOne({name: req.body.name})
        if(check.password === req.body.password){
            res.render("home")
            console.log("Donbe")
        }
        else{
            res.render("Wrong Password")
        }
    }
    catch{
        res.render("Wrong Details")
    }
})


app.listen(3001,()=>{
    console.log("Server is listening")
})