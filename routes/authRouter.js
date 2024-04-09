const express=require('express')
const { registerController, loginController, controlUserController } = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const router=express.Router()
router.post('/register',registerController)
router.post("/login",loginController)
router.get("/current-user",authMiddleware,controlUserController)
module.exports = router;