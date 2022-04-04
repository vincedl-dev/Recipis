const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressAsyncHandler = require ('express-async-handler');
const { validationResult } = require('express-validator');

//register
const createAccount = expressAsyncHandler(async(req,res) =>{
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        });
    }

    const {username,email,user_password} = req.body
    console.log(username,email,user_password)
    try{
     
        if(!email || !user_password || !username){
             res.status(400).json({message:"input all fields"})
        }
        const existingEmail = await User.findOne({email})
        if(existingEmail)
        return res.status(400).json({message:"user already register"})

        const existingUsername = await User.findOne({username})
        if(existingUsername)
        return res.status(400).json({message:"username already exist"})

        //hash the password
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(user_password,salt)

        //save new user account

        const newUser = new User({
            username,email,password
        })
        const savedUser = await newUser.save();
        res.status(201).json({message:"Successfully created and account"})
        
    }
    catch(err){
        console.log("WORKING")
        res.status(500).send("why")
    }
})

//login 

const login_user = expressAsyncHandler(async(request,res) => {

    const {email,password} = request.body

    const error = validationResult(request);
    console.log(error)
    if(!error.isEmpty()) {
        return response.status(400).json({
            error: error.array()
        });
    }

    try{
     
        if(!email || !password){
            return res.status(401).json({message:"input all fields"})
        }

    const existingUser = await User.findOne({email});
    if(!existingUser)
    return res.status(401).json({message:"Incorrect Email or Password"})

    const passwordCorrect = await bcrypt.compare(password,existingUser.password)

    if(!passwordCorrect)
    return res.status(401).json({message:"Incorrect Email or Password"})

    //sign token
    const token = jwt.sign({user_id:existingUser._id, username:existingUser.username},process.env.JWT_SECRET)
    const logintoken = jwt.sign("login",process.env.SIGNED_IN)
    
    res.status(200).cookie('token',token).json({"username":existingUser.username,message:"Successfully log in",logintoken})



    } catch(err){
        console.log(err)
        res.status(500).send()
    }
    

})

//log out

const logout_user = async(req,res) => {
    res.cookie("token","",{
     
        expires:new Date(0)
    })
    res.send("successfully log out")
}
module.exports = {createAccount,login_user,logout_user}