const express = require ('express')
const router = express.Router()
const {userSignupValidator,userSigninValidator} = require('../validator/index')

const { userById } = require("../controllers/user")
const { signup, signin, signout } = require("../controllers/auth")

router.post("/signup",userSignupValidator, signup) 
router.post("/signin",userSigninValidator, signin) 
router.get("/signout",signout) 

//any route containing: userId, our app will execute first userById()
router.param("userId", userById)

module.exports = router