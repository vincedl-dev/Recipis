const Recipe = require('../models/Recipe')
const mongoose = require('../models/Recipe')
const expressAsyncHandler = require ('express-async-handler');
const { validationResult } = require('express-validator');


//get all recipe

module.exports.get_all_recipes = expressAsyncHandler(async(req,res) => {
  
    try{
        const data = await Recipe.find().sort({"_id":-1})
        res.status(200).json(data)
    }catch(err){
        console.log(err)
    }
})

module.exports.get_user_recipes = expressAsyncHandler(async (req,res) => {
    const user_id= req.user_id

    try{
        const data = await Recipe.find({user_id}).sort({"_id":-1})
        if(data.length === 0 ){
            res.status(200).json([])
        }
        res.status(200).json(data)
    }catch(err){
    
    }
})


module.exports.get_single_recipe = expressAsyncHandler(async(req,res) => {
    
    const id = req.params.id
    const error = validationResult(req);  
    try{

        if(!error.isEmpty()) {
            throw err
        }

        const data = await Recipe.findById(id)
        if(data === null){
            throw err;
        }
        res.status(200).json(data)
    }   
    catch(err){
        res.status(400).json([])
    }

})

module.exports.search_recipes = expressAsyncHandler(async(req,res) => {
    
    const title = req.query.title
    try{
        const data = await Recipe.find({title: {$regex: title, $options: 'i'}})
        
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:"non"})
    }
})



module.exports.post_recipe = expressAsyncHandler(async (req,res) => {
    const error = validationResult(req);
  

    const {title,body} = req.body
    const user_id = req.user_id
    const username = req.username
    
 
  
    try{
        if(!error.isEmpty())  throw err  
        const newRecipe = Recipe({title,body, user_id,username })
        const data = await newRecipe.save()
        res.status(200).json({message:"Added a new Recipe"})
    }
    catch(err){
        res.status(400).json({message:"Something went wrong. Try again"})
    }

})

module.exports.update_recipe = expressAsyncHandler(async (req,res) => {
    
    const {id} = req.params
    const error = validationResult(req);
 

 

    try{
        if(!error.isEmpty())  throw err    
        const data = await Recipe.findByIdAndUpdate(id,req.body,{new:true})
        if(data === null){
            throw err
        }
        res.status(200).json({message:"Succefully updated the Recipe"})
    }
    catch(err){
        res.status(400).json({message:"Something went wrong. Try again"})
    }
})

module.exports.delete_recipe =  expressAsyncHandler(async(req,res) => {
    const id = req.params.id
    const error = validationResult(req);



  
    try{
        if(!error.isEmpty())  throw err    
        const data = await Recipe.findByIdAndDelete(id)
        
        if(data === null){throw err }

        res.status(200).json({message:"Succefully deleted the Recipe"})
    }
    catch(err){
        res.status(400).json({message:"Something went wrong. Try again"})
    }
    
})


