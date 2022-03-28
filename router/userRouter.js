const {Router} = require('express')

const {createAccount,login_user,logout_user} = require('../controllers/authController')

const router = Router()

router.post('/signup',createAccount)

router.post('/login',login_user)
router.get('/logout',logout_user);

//router.get('/islogin',authController.checker)

module.exports = router;