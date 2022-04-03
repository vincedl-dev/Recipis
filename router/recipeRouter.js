const router = require('express').Router()

const recipeController = require('../controllers/recipeController')



router.get('/all-recipes',recipeController.get_all_recipes)
router.get('/user',recipeController.get_user_recipes)
router.post('/new-recipe',recipeController.post_recipe)

router.get('/',recipeController.search_recipes)



router.get('/:id',recipeController.get_single_recipe)

router.put('/:id',recipeController.update_recipe)

router.delete('/:id',recipeController.delete_recipe)



//router.get('/islogin',authController.checker)

module.exports = router;