const User = require('../models/User')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
const createAccount = async(req,res) =>{
    const {username,email,user_password} = req.body
    console.log(username,email,user_password)
    try{
     
        if(!email || !user_password || !username){
            return res.status(400).json({errorMessage:"input all fields"})
        }
        const existingEmail = await User.findOne({email})
        if(existingEmail)
        return res.status(400).json({errorMessage:"user already register"})

        const existingUsername = await User.findOne({username})
        if(existingUsername)
        return res.status(400).json({errorMessage:"username already exist"})

        //hash the password
        const salt = await bcrypt.genSalt()
        const password = await bcrypt.hash(user_password,salt)

        //save new user account

        const newUser = new User({
            username,email,password
        })
        const savedUser = await newUser.save();
        res.status(201).json("Successfully created and account")
        
    }
    catch(err){
        console.log(err)
        res.status(500).send()
    }
}

//login 

const login_user = async(req,res) => {
    const {email,password} = req.body
    try{
     
        if(!email || !password){
            return res.status(400).json({errorMessage:"input all fields"})
        }

    const existingUser = await User.findOne({email});
    if(!existingUser)
    return res.status(401).json({errorMessage:"Incorrect Email or Password"})

    const passwordCorrect = await bcrypt.compare(password,existingUser.password)

    if(!passwordCorrect)
    return res.status(401).json({errorMessage:"Incorrect Email or Password"})

    //sign token
    const token = jwt.sign({user_id:existingUser._id, username:existingUser.username},process.env.JWT_SECRET)

    res.cookie("token", token,{})
    res.status(200).json({"username":existingUser.username,message:"Successfully log in"})


    } catch(err){
        console.log(err)
        res.status(500).send()
    }
    

}

//log out

const logout_user = async(req,res) => {
    res.cookie("token","",{
     
        expires:new Date(0)
    })
    res.send("successfully log out")
}
module.exports = {createAccount,login_user,logout_user}