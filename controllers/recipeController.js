const Recipe = require('../models/Recipe')

//get all recipe

module.exports.get_all_recipes = async (req,res) => {
  
    try{
        const data = await Recipe.find().sort({"_id":-1})
        res.status(200).json(data)
    }catch(err){
        console.log(err)
    }
}

module.exports.get_user_recipes = async (req,res) => {
    const user_id= req.user_id
    console.log(user_id)
    try{
        const data = await Recipe.find({user_id}).sort({"_id":-1})
        res.status(200).json(data)
    }catch(err){
        console.log(err)
    }
}


module.exports.get_single_recipe = async(req,res) => {
    const id = req.params.id
    try{
        const data = await Recipe.findById(id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
    }

}

module.exports.search_recipes = async(req,res) => {
    
    const title = req.query.title
    try{
        const data = await Recipe.find({title: {$regex: title, $options: 'i'}})
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
    }
}



module.exports.post_recipe = async (req,res) => {

    const {title,body} = req.body
    const user_id = req.user_id
    const username = req.username
    
 
  
    try{
        const newRecipe = Recipe({title,body, user_id,username })
        const data = await newRecipe.save()
        res.status(200).json({message:"Added a new Recipe"})
    }
    catch(err){
        console.log(err)
    }

}

module.exports.update_recipe = async (req,res) => {
    const {id} = req.params
    try{
        const data = await Recipe.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Succefully updated the Recipe"})
    }
    catch(err){
        console.log(err)
    }
}

module.exports.delete_recipe =  async(req,res) => {
    const id = req.params.id
    try{
        const data = await Recipe.findByIdAndDelete(id)
        res.status(200).json({message:"Succefully deleted the Recipe"})
    }
    catch(err){
        console.log(err)
    }
    
}


