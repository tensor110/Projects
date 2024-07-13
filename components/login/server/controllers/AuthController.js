const UserModel = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req,res)=>{
    try{
        const {username, email, password} = req.body
        const user = await UserModel.findOne({email})
        if(user){
            return res.status(409)
                .json({message: 'User is already exist, you can login', success: false})
        }
        const userModel = new UserModel({username, email, password})
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save();
        res.status(201)
            .json({
                message: 'Signup Successfully',
                success: true
            })
    }
    catch(err){
        res.status(500)
        .json({
            message: 'Internal server error',
            success: false
        })
    }
}

const signin = async (req,res)=>{
    try{
        const {username, password} = req.body
        const user = await UserModel.findOne({username})
        const errorMsg = 'Email or password wrong'
        if(user){
            console.log('User found')
        }
        if(!user){
            return res.status(403)
                .json({message: errorMsg, success: false})
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password)
        if(!isPasswordEqual){
            return res.status(403)
                .json({message: errorMsg, success: false})
        }

        if (!process.env.SECRET_KEY) {
            console.error("SECRET_KEY is not defined in environment variables");
            return res.status(500).json({ message: "Internal server error", success: false });
          }

        const jwtToken = jwt.sign(
            {username: user.username, _id: user._id},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        res.status(200)
            .json({
                message: 'Signin Successfully',
                success: true,
                jwtToken,
                email,
                username: user.username
            })
    }
    catch(err){
        res.status(500)
        .json({
            message: 'Internal server error',
            success: false
        })
    }
}

module.exports = {
    signup, signin
}