const Recipe = require('../models/Recipe')

//get all recipe

module.exports.get_all_recipes = async (req,res) => {
   
    try{
        const data = await Recipe.find()
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

module.exports.get_user_recipe = (req,res) => {

}

module.exports.post_recipe = async (req,res) => {

    const {title,body} = req.body
    const user_id = req.user_id
    const username = req.username
    
 
  
    try{
        const newRecipe = Recipe({title,body, user_id,username })
        const data = await newRecipe.save()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
    }

}

module.exports.update_recipe = async (req,res) => {
    const {id} = req.params
    try{
        const data = await Recipe.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({"message":"Succefully Updated the Recipe"})
    }
    catch(err){
        console.log(err)
    }
}

module.exports.delete_recipe =  async(req,res) => {
    const id = req.params.id
    try{
        const data = await Recipe.findByIdAndDelete(id)
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
    }
    
}


